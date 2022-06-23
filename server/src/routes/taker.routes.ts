// Authentication
import express, { Request, Response } from "express";
import { pool } from "../database/database.config";

import { collectionVehicles } from "../services/database.service";

import { decodeToken, uidToken } from "../firebase/admin.token";
import { rentar } from "../utilities/rentar";


export const takerRouter = express.Router();
takerRouter.use(express.json());

// Yo como usuario “Tomador” puedo rentar un vehículo por horas o días
takerRouter.post('/rentar', decodeToken, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        let { typeRenta, startDate, finishDate, placa } = req.body;
        const { email } = await uidToken(req);

        //Trae el vehiculo
        const vehicle = await collectionVehicles.vehicles.findOne({ "placa": placa });
        // Milisegundos de diferencia
        const milisecondDiff = new Date(finishDate).getTime() - new Date(startDate).getTime();
        // Dias de diferencia
        const dayDiff = Math.round(milisecondDiff / (1000 * 3600 * 24));
        // Horas rentados
        const horaRenta = Math.round(milisecondDiff / (1000 * 3600));
        switch (typeRenta) {
            case 'hora':
                // 24
                const totalRentaHora = horaRenta * Number(vehicle.price);
                const rentarVehicle = await rentar(typeRenta, placa, startDate, finishDate, totalRentaHora, vehicle.cc_owner, email);
                if (rentarVehicle.error === false) {
                    return res.status(200).json({ rentarVehicle });
                } else {
                    return res.status(500).json({ rentarVehicle });
                }
                break;
            case 'dia':
                // 24
                const totalRentaDia = (Number(vehicle.price) * 24) * dayDiff;
                const rentarVehicleDia = await rentar(typeRenta, placa, startDate, finishDate, totalRentaDia, vehicle.cc_owner, email);
                if (rentarVehicle.error === false) {
                    return res.status(200).json({ rentarVehicleDia });
                } else {
                    return res.status(500).json({ rentarVehicleDia });
                }
                break;
            case 'mes':
                // 30
                const totalRentaMes = (Number(vehicle.price) * 20) * 30;
                const rentarVehicleMes = await rentar(typeRenta, placa, startDate, finishDate, totalRentaMes, vehicle.cc_owner, email);
                if (rentarVehicle.error === false) {
                    return res.status(200).json({ rentarVehicleMes });
                } else {
                    return res.status(500).json({ rentarVehicleMes });
                }
                break;
            default:
                return res.status(400).json({ error: 'Tipo de renta no valido' });
                break;
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    } finally {
        cliente.release(true);
    }
})
