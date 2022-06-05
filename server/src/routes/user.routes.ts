import express, { Request, Response } from "express";
import { pool } from "../database/database.config";
import { uidToken } from "../firebase/admin.token";

import userSchema from "../schemas-joi/user.schemajoi";
import validator from '../utilities/validator'

export const userRouter = express.Router();
userRouter.use(express.json());

// Lista de usuario pero se debe tener permisos de admin
userRouter.get('/', async (req: Request, res: Response) => {
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
userRouter.post('/', validator.body(userSchema), async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const uid = await uidToken(req);
        if (uid != null) {
            const { cc_user, first_name, last_name, email, city, age, address } = req.body;
            const result = await cliente.query('INSERT INTO users (cc_user, first_name, last_name, email, city, age, address, uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [cc_user, first_name, last_name, email, city, age, address, uid]);
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: "Error al obtener el uid" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    } finally {
        cliente.release(true);
    }
})