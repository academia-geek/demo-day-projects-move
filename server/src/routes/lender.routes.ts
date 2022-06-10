// Authentication
import express, { Request, Response } from "express";
import { pool } from "../database/database.config";

import { collectionVehicles } from "../services/database.service";

import { tokenPrestador } from "../firebase/admin.token";


export const lenderRouter = express.Router();
lenderRouter.use(express.json());

// Como usuario prestador de servicios puedo registrar el precio del vehiculo
lenderRouter.put('/:cc_user', tokenPrestador, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const { cc_user } = req.params;
        const { price } = req.body;
        const usersResult = await cliente.query('SELECT * FROM users WHERE cc_user = $1', [cc_user]);
        if (usersResult.rowCount === 0) {
            res.status(400).json({ message: "El usuario no esta registrado" });
        } else {
            console.log(usersResult.rows.map(row => row.cc_user));

            const [result] = usersResult.rows.map((row) => row.cc_user)
            console.log(result);
            
            const vehicle = await collectionVehicles.vehicles.findOneAndUpdate({ cc_owner: result }, { $set: { price } });
            console.log(vehicle, price);
            if (!vehicle) {
                return res.status(400).json({ message: `No se pudo registrar el precio comunicarse con el Administrador` });
            } else {

                return res.status(200).json({ message: `El precio del vehiculo ha sido actualizado` });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})
