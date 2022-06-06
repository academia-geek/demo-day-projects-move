// Authentication
import express, { Request, Response } from "express";
import { pool } from "../database/database.config";
import auth from "../firebase/auth"

import authSchema from "../schemas-joi/users.schemajoi"
import validator from '../utilities/validator'

import { collectionUsers } from "../services/database.service";

import { decodeToken, uidToken } from "../firebase/admin.token";
import userSchema from "../schemas-joi/user.schemajoi";

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
authRouter.get('/users', decodeToken, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const result = await cliente.query('SELECT * FROM users');
        res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

// Crear un nuevo usuario
authRouter.post('/users', decodeToken, validator.body(userSchema), async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const uid = await uidToken(req);
        if (uid != null) {
            const { cc_user, first_name, last_name, email, city, age, address } = req.body;
            const result = await cliente.query('INSERT INTO users (cc_user, first_name, last_name, email, city, age, address, uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [cc_user, first_name, last_name, email, city, age, address, uid]);
            if (result.rowCount > 0) {
                return res.status(201).send({ message: "Usuario creado" });
            } else {
                return res.status(500).send({ message: "Error al crear el usuario" });
            }
        } else {
            return res.status(500).json({ message: "Error al obtener el uid" });
        }
    } catch (error) {
        if (error.constraint === "users_pkey") {
            return res.status(400).send({ message: "cc_user, ya esta registrada" });
        } else {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    } finally {
        cliente.release(true);
    }
})

// Cambiar la informacion del usuario
authRouter.put('/users/:id', decodeToken, validator.body(userSchema), async (req: Request, res: Response) => {
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

// Volver a un usuario administrador
authRouter.put('/users/:id/:role', decodeToken, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const { id } = req.params;
        const { role } = req.params;
        const result = await cliente.query('UPDATE users SET role = $1 WHERE cc_user = $2', [role, id]);
        if (result.rowCount > 0) {
            return res.status(200).send({ message: "Usuario actualizado" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    } finally {
        cliente.release(true);
    }
})

authRouter.post('/users/lender', decodeToken, async (req: Request, res: Response) => { })