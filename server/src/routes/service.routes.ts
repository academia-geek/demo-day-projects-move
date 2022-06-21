// Authentication
import express, { Request, Response } from "express";
import { pool } from "../database/database.config";

import { collectionVehicles } from "../services/database.service";

import { tokenAdmin, uidToken } from "../firebase/admin.token";
import { arreglarFechaService } from "../utilities/arreglarFecha";

export const serviceRouter = express.Router();
serviceRouter.use(express.json());

serviceRouter.get('/', tokenAdmin, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const query = await cliente.query('SELECT * FROM service');
        const services = arreglarFechaService(query.rows);
        return res.status(200).json({ services });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    } finally {
        cliente.release(true);
    }
})