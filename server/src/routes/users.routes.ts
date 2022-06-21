// Authentication
import express, { Request, Response } from "express";
import { pool } from "../database/database.config";
import auth from "../firebase/auth"

import authSchema from "../schemas-joi/users.schemajoi"
import validator from '../utilities/validator'

import { collectionUsers } from "../services/database.service";

import { decodeToken, tokenAdmin, uidToken } from "../firebase/admin.token";
import userSchema from "../schemas-joi/user.schemajoi";
import { userUniqueSchema } from "../schemas-joi/user.schemajoi";
import generatecode from '../utilities/generateCode'
import sendEmail from '../utilities/sendGrid'
import lenderSchema from "../schemas-joi/lender.schemajoi";


export const authRouter = express.Router();
authRouter.use(express.json());

// esta ruta solo sirve para probar
authRouter.post('/signin', validator.body(authSchema), async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await auth.createUser(email, password);
        await collectionUsers.users.insertOne({ email, password }); // guado el usuario en mi base de datos en mongo
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// esta ruta solo sirve para probar
authRouter.post('/login', validator.body(authSchema), async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await auth.login(email, password);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// Lista de usuario pero se debe tener permisos de admin
authRouter.get('/users', tokenAdmin, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const result = await cliente.query('SELECT * FROM users');
        res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    } finally {
        cliente.release(true);
    }
})

// Crear un nuevo usuario
authRouter.post('/users', decodeToken, validator.body(userSchema), async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const { uid, email } = await uidToken(req);
        const code = generatecode();
        if (uid != null) {
            const { cc_user, first_name, last_name, city, age, address } = req.body;
            const params = {
                user: [email],
                subject: 'Validate email',
                first_name,
                code,

            }
            const resultUser = await cliente.query('SELECT * FROM users WHERE email = $1', [email]);
            if (resultUser.rowCount === 0) {
                const result = await cliente.query('INSERT INTO users (cc_user, first_name, last_name, email, city, age, address, uid, code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [cc_user, first_name, last_name, email, city, age, address, uid, code]);
                if (result.rowCount > 0) {
                    await sendEmail(
                        params.user,
                        params.subject,
                        params.first_name,
                        false,
                        params.code
                    )
                    return res.status(201).send({ message: "Usuario creado" });
                } else {
                    console.log("error al crear usuario");
                    return res.status(500).send({ message: "Error al crear el usuario" });
                }
            } else {
                console.log("El usuario ya existe");
                return res.status(500).send({ message: "El usuario ya existe" });
            }
        } else {
            console.log("Error al obtener el uid")
            return res.status(500).json({ message: "Error al obtener el uid" });
        }
    } catch (error) {
        console.log(error);
        if (error.constraint === "users_pkey") {
            return res.status(400).send({ message: "cc_user, ya esta registrada" });
        } else {
            console.log(error);
            return res.status(500).json({ error: error, message: "Internal Server Error" });
        }
    } finally {
        cliente.release(true);
    }
})

// Para postularse a ser prestador (Este debe ser lo primero que le pregunte al usuario que si quiere volver prestador) // OJO
authRouter.post('/users/lender', decodeToken, validator.body(lenderSchema), async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const { cc_user_fk, conductor } = req.body;
        const params = {
            user: ['cuentacorreomove@gmail.com'],
            subject: 'Activar usuario como prestador',
        }
        switch (conductor) {
            case 'si':
                const result = await cliente.query('INSERT INTO lender (cc_user_fk, conductor) VALUES ($1, $2)', [cc_user_fk, conductor]);
                await sendEmail(
                    params.user,
                    params.subject,
                    'Administrador',
                    true,
                    '0000',
                    `Activar usuario como prestador con cedula ${cc_user_fk}`
                )
                if (result.rowCount > 0) {
                    return res.status(201).json({ message: "postulacion correcta, el administrador se pondra en contacto con usted" });
                } else {
                    return res.status(500).json({ message: "Error creating lender" });
                }
                break;
            case 'no':
                await cliente.query('INSERT INTO lender (cc_user_fk, conductor) VALUES ($1, $2)', [cc_user_fk, conductor]);
                break;
            default:
                break;
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    } finally {
        cliente.release(true);
    }
})

authRouter.get('/activation-email/:code', async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const { code } = req.params;
        const result = await cliente.query('SELECT * FROM users WHERE code = $1', [code]);
        if (result.rowCount > 0) {
            const { cc_user } = result.rows[0];
            const resultUpdate = await cliente.query('UPDATE users SET active_user = $1 WHERE cc_user = $2', [true, cc_user]);
            if (resultUpdate.rowCount > 0) {
                return res.status(200).send({ message: "Email activado" });
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    } finally {
        cliente.release(true);
    }
})

// Como usuario registrado puede acceder a los datos personales de Mi cuenta para modificarlos. Excepto el correo electrónico.
authRouter.put('/users/:id', decodeToken, validator.body(userUniqueSchema), async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const { id } = req.params;
        const { cc_user, first_name, last_name, city, age, address } = req.body;
        const result = await cliente.query('UPDATE users SET cc_user = $1, first_name = $2, last_name = $3, city = $4, age = $5, address = $6 WHERE cc_user = $7', [cc_user, first_name, last_name, city, age, address, id]);
        if (result.rowCount > 0) {
            return res.status(200).send({ message: "Usuario actualizado" });
        } else {
            return res.status(500).send({ message: "Error al actualizar el usuario" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    } finally {
        cliente.release(true);
    }
})
