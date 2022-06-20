// Authentication
import express, { Request, Response } from "express";
import { pool } from "../database/database.config";

import { collectionVehicles } from "../services/database.service";

import { decodeToken, uidToken } from "../firebase/admin.token";


export const takerRouter = express.Router();
takerRouter.use(express.json());

// Yo como usuario “Tomador” puedo rentar un vehículo por horas o días
takerRouter.post('/rentar', decodeToken, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let { typeRenta,  startDate, finishDate, placa} = req.body;
        const { email } = await uidToken(req);
        switch (typeRenta) {
            case 'hora':
                // 24
                const vehicle = await collectionVehicles.vehicles.findOne({ placa: placa });
                const user = await cliente.query('SELECT * FROM users WHERE email = $1', [email]);
                const milisecondDiff = new Date(finishDate).getTime() - new Date(startDate).getTime();
                const dayDiff = Math.round(milisecondDiff / (1000 * 3600 * 24));
                const horaTotal = dayDiff * Number(vehicle.price);
                return {horaTotal, user: user.rows[0], vehicle};
                break;
            case 'dia':
                // 24
                break;
            case 'mes':
                // 30
                break;
            default:
                break;
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})
