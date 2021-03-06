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
    } finally {
        cliente.release(true);
    }
})


// Puedo ver los usuarios registrados como conductor de su vehiculo o los que ofrecieron solo su vehiculo
adminRouter.get('/info-lender', async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const result = await cliente.query(`SELECT * FROM service a
        INNER JOIN lender b ON a.id_lender_fk = b.id_lender
        INNER JOIN users c ON b.cc_user_fk = c.cc_user`);
        res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    } finally {
        cliente.release(true);
    }
})

// Yo como usuario administrador quiero ver el n??mero de carros rentados seg??n un filtro por fechas
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
        if (vehiclesRented.length === 0) {
            return res.status(200).send({ message: 'No hay vehiculos rentados en ese periodo' });
        } else {
            res.status(200).send({
                vehiclesRented: vehiclesRented.length,
                vehicles: vehiclesRented
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
})

// Ver la lista de prestadores y el reporte de sus comisiones
adminRouter.get('/lender/report', tokenAdmin, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const lenders = await cliente.query(`SELECT * FROM lender`);
        return res.status(200).send(lenders.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    } finally {
        cliente.release(true);
    }
})

//  Yo como usuario administrador puedo habilitar o inhabilitar un tomador
// Traer todos los usuarios que son tomadores y su informacion
adminRouter.get('/taker', tokenAdmin, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const takers = await cliente.query(`SELECT * FROM taker INNER JOIN users ON taker.taker_cc_user = users.cc_user`);
        const takersInfo = takers.rows.map(taker => {
            return {
                id_taker: taker.id_taker,
                cc_user: taker.taker_cc_user,
                full_name: taker.first_name + ' ' + taker.last_name,
                email: taker.email,
                city: taker.city,
                age: taker.age,
                role: taker.role,
                address: taker.address,
                active_user: taker.active_user,
                url_licencia_taker: taker.url_licencia_taker
            }
        })
        if (takers.rows.length > 0) {
            return res.status(200).send({
                takersRegistered: takers.rows.length,
                takers: takersInfo
            });
        } else {
            return res.status(200).send({ message: 'No hay tomadores registrados' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    } finally {
        cliente.release(true);
    }
})

//  Yo como usuario administrador puedo habilitar o inhabilitar un tomador
adminRouter.put('/taker/:cc_user', tokenAdmin, async (req: Request, res: Response) => {
    const { cc_user } = req.params;
    let cliente = await pool.connect();
    const { active_user } = req.body;
    try {
        const query = await cliente.query(`UPDATE users SET active_user = $1 WHERE cc_user = $2`, [active_user, cc_user]);
        if (query.rowCount > 0) {
            return res.status(200).send({ message: 'Usuario actualizado' });
        } else {
            return res.status(200).send({ message: 'No se encontro el usuario' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    } finally {
        cliente.release(true);
    }
})

// Yo como administrador puedo activar un prestador cuando este solicito serlo
adminRouter.put('/lender/:cc_user', tokenAdmin, async (req: Request, res: Response) => {
    const { cc_user } = req.params;
    let cliente = await pool.connect();
    try {
        const query = await cliente.query(`UPDATE lender SET active_lender = $1 WHERE cc_user = $2`, [true, cc_user]);
        if (query.rowCount > 0) {
            return res.status(200).send({ message: 'El usuario cambio su estatus a activo' });
        } else {
            return res.status(200).send({ message: 'No se encontro el usuario' });
        }
    } catch (error) {
        console.warn();
        
    }
})

// Como administrador puedo cambiar el rol de cualquier usuario ingresando su cedula
adminRouter.put('/active/lender', tokenAdmin, async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const { cc_user , role} = req.body;
        switch (role) {
            case 'usuario':
                const resultUser = await cliente.query('UPDATE users SET role = $1 WHERE cc_user = $2', [role, cc_user]);
                if (resultUser.rowCount > 0) {
                    return res.status(200).send({ message: "Usuario actualizado" });
                } else {}
                break;
            case 'prestador':
                const resultPrestador = await cliente.query('UPDATE users SET role = $1 WHERE cc_user = $2', [role, cc_user]);
                await cliente.query(`UPDATE lender SET active_lender = $1 WHERE cc_user_fk = $2`, [true, cc_user]);
                const user1 = await cliente.query('SELECT * FROM users WHERE cc_user = $1', [cc_user]);
                if (resultPrestador.rowCount > 0) {
                    await sendEmail(
                        [user1.rows[0].email], // email del usuario
                        user1.rows[0].first_name,
                        'Bienvenido Prestador a MovE',
                        true,
                        '0000',
                        `Bienvenido como prestador de nuestra plataforma MovE`
                    )
                    return res.status(200).send({ message: "Usuario actualizado" });
                } else {}
                break
            case 'tomador':
                const resultTomador = await cliente.query('UPDATE users SET role = $1 WHERE cc_user = $2', [role, cc_user]);
                const user2 = await cliente.query('SELECT * FROM users WHERE cc_user = $1', [cc_user]);
                if (resultTomador.rowCount > 0) {
                    await sendEmail(
                        [user2.rows[0].email], // email del usuario
                        user2.rows[0].first_name,
                        'Bienvenido a MovE',
                        true,
                        '0000',
                        `Bienvenido a nuestra plataforma MovE, donde encontraras todos los servicios que necesitas`
                    )
                    return res.status(200).send({ message: "Usuario actualizado" });
                } else {}
                break
            case 'admin':
                const resultAdmin = await cliente.query('UPDATE users SET role = $1 WHERE cc_user = $2', [role, cc_user]);
                if (resultAdmin.rowCount > 0) {
                    return res.status(200).send({ message: "Usuario actualizado" });
                } else {}
                break
            default:
                break;
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    } finally {
        cliente.release(true);
    }
})