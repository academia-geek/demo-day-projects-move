import { Service } from "../models/service";

export const arreglarFechaService = (service: Array<Service>) => {
    let serviceArreglado = service.map(service => {
        return {
            id_service: service.id_service,
            id_lender_fk: service.id_lender_fk,
            id_taker_fk: service.id_taker_fk,
            placa: service.placa,
            tipe_renta: service.tipe_renta,
            beginning_service: JSON.stringify(service.beginning_service).replace(/\"/g, "").slice(0, 10),
            end_service: JSON.stringify(service.end_service).replace(/\"/g, "").slice(0, 10),
            estate_servicio: service.estate_servicio,
            km_service: service.km_service,
            observations_service: service.observations_service
        }
    })
    return serviceArreglado;
}