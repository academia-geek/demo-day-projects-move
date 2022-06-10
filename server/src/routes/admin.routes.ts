// Authentication
import express, { Request, Response } from "express";
import { pool } from "../database/database.config";
import auth from "../firebase/auth"

import authSchema from "../schemas-joi/users.schemajoi"
import validator from '../utilities/validator'

import { collectionUsers, collectionVehicles } from "../services/database.service";

import { tokenAdmin } from "../firebase/admin.token";
import userSchema from "../schemas-joi/user.schemajoi";
import { userUniqueSchema } from "../schemas-joi/user.schemajoi";
import generatecode from '../utilities/generateCode'
import sendEmail from '../utilities/sendGrid'
import lenderSchema from "../schemas-joi/lender.schemajoi";


export const adminRouter = express.Router();
adminRouter.use(express.json());

// Puedo ver los usuarios registrados como conductor de su vehiculo o los que ofrecieron solo su vehiculo
adminRouter.get('/lender', tokenAdmin, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const result = await cliente.query(`SELECT a.*, b.conductor FROM users a
        LEFT JOIN lender b ON b.cc_user_fk = a.cc_user
        WHERE b.conductor='si' OR b.conductor = 'no'`);
        res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})


// Puedo ver los usuarios registrados como conductor de su vehiculo o los que ofrecieron solo su vehiculo
adminRouter.get('/info-lender', tokenAdmin, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const result = await cliente.query(`SELECT * FROM service a
        INNER JOIN lender b ON a.id_lender_fk = b.id_lender
        INNER JOIN users c ON b.cc_user_fk = c.cc_user`);
        res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

// Yo como usuario administrador quiero ver el número de carros rentados según un filtro por fechas
adminRouter.get('/rented-cars/:inicio/:fin', tokenAdmin, async (req: Request, res: Response) => {
    const { inicio, fin } = req.params;
    try {
        const vehicles = await collectionVehicles.vehicles.find().toArray();
        const vehiclesRented = vehicles.filter(vehicle => {
            const f_inicio = new Date(vehicle.fecha_disponibilidad.fecha_inicio);
            const f_fin = new Date(vehicle.fecha_disponibilidad.fecha_fin);
            const f_inicio_param = new Date(inicio);
            const f_fin_param = new Date(fin);
            if (f_inicio_param <= f_inicio && f_fin_param >= f_fin) {
                if (vehicle.activo === false) {
                    return vehicle;
                }
            }
        })
        res.status(200).send({
            vehiclesRented: vehiclesRented.length,
            vehicles: vehiclesRented
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

// Ver la lista de prestadores y el reporte de sus comisiones
