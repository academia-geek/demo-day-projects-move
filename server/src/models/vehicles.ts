import { Int32, ObjectId } from "mongodb";

interface fecha_disponibilidad {
    fecha_inicio: string;
    fecha_fin: string;
}
export interface Vehicles {
    id?: ObjectId;
    cc_owner: String;
    placa: String;
    url_image: Array<string>; // Array
    modelo: Int32; // Int
    marca: String;
    color: string;
    linea: String;
    fecha_disponibilidad: fecha_disponibilidad;
    url_soat: String;
    url_tecnicomecanica: String;
    url_ficha_tecnica: String;
    estado: String;
    activo: Boolean;
    tipo: Array<string>; // String
    gama: String;
    comision_renta: Int32
    poliza: Int32
    limpieza: Int32
    tipo_combustible: String
    valor_combustible: Int32
    zone: Array<string>; // String
}


/**
 * 
    {
    "_id": {
        "$oid": "629a6368576a3f7d33017e8f"
    },
    "cc_owner": "1005206688",
    "placa": "ABC123",
    "url_image": [{
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg"
    }, {
        "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg"
    }],
    "modelo": 2018,
    "color": "rojo",
    "fecha_disponibilidad": {
        "fecha_inicio": "2018-01-01",
        "fecha_fin": "2018-12-31"
    },
    "url_soat": "https://www.soat.com/",
    "url_tecnomecanica": "https://www.tecnomecanica.com/",
    "url_ficha_tecnica": "https://www.fichatecnica.com/",
    "activo": true,
    "gama": "alta",
    "comision_renta": 0.1,
    "polisa": 20000,
    "tipo_vehiculo": "combustion",
    "tipo_combustible": "gasolina",
    "valor_combustible": 20000
}


 * 
 */