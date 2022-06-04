import express, { Request, Response } from "express";
import { pool } from "../database/database.config";

export const userRouter = express.Router();
userRouter.use(express.json());

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