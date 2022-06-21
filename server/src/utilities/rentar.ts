import { pool } from "../database/database.config";
import { collectionVehicles } from "../services/database.service";

export const rentar = async (tipoRenta: string, placa: string, fecha_inicio: string, fecha_fin: string, total: number, cc_owner: String, email: String) => {
    let cliente = await pool.connect();
    try {
        const updateVehicle = await collectionVehicles.vehicles.updateOne({ placa: placa }, { $set: { "activo": false } });
        if (updateVehicle.modifiedCount === 1) {
            const lender = await cliente.query('SELECT * FROM users INNER JOIN lender ON users.cc_user = lender.cc_user_fk WHERE cc_user = $1', [cc_owner]);
            const updateTotal = await cliente.query('UPDATE lender SET total_loans = total_loans + $1 WHERE cc_user_fk = $2', [total, cc_owner]);
            const id_lender_fk = lender.rows[0].id_lender;
            const taker = await cliente.query('SELECT * FROM users WHERE email = $1', [email]);
            const id_taker_fk = taker.rows[0].cc_user;
            const estate_servicio = "progreso"
            const query = await cliente.query('INSERT INTO service (id_lender_fk, id_taker_fk, placa, tipe_renta, beginning_service, end_service, estate_servicio) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id_lender_fk, id_taker_fk, placa, tipoRenta, fecha_inicio, fecha_fin, estate_servicio]);
            if (query.rowCount === 1) {
                return {
                    error: false, data: {
                        tipoRenta: tipoRenta,
                        placa: placa,
                        fecha_inicio: fecha_inicio,
                        fecha_fin: fecha_fin,
                        total: total,
                        cc_owner: cc_owner,
                        email_taker: email
                    }
                }
            } else {
                return { error: true, data: { message: 'No se pudo registrar la renta' } }
            }
        } else {
            return { error: true, data: { message: "No se pudo registrar" } }
        }
    } catch (error) {
        console.log(error);
        return { error: true, data: { message: error.message } }
    } finally {
        cliente.release(true);
    }
}