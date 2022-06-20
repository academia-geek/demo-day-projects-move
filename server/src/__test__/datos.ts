export const vehicle = {
    "_id": "62a5109391219b7514026744",
    "cc_owner": "1005206688",
    "marca": "Ford",
    "linea": "Mustang",
    "placa": "ABC123",
    "url_image": [
        {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg"
        },
        {
            "url": "https://upload.wikimedia.org/wikipedia/commons/2/29/1969_Ford_Mustang_Mach_1_%2837901276352%29.jpg"
        }
    ],
    "modelo": 2018,
    "color": "rojo",
    "fecha_disponibilidad": {
        "fecha_inicio": "2018-01-01",
        "fecha_fin": "2018-12-31"
    },
    "url_soat": "https://www.soat.com/",
    "url_tecnicomecanica": "https://www.tecnomecanica.com/",
    "url_ficha_tecnica": "https://www.fichatecnica.com/",
    "activo": false,
    "gama": "alta",
    "comision_renta": 0.1,
    "poliza": true,
    "tipo_vehiculo": "combustion",
    "tipo_combustible": "gasolina",
    "valor_combustible": 20000,
    "zone": [
        "Pereira",
        "Manizales",
        "Medellin"
    ],
    "price": 30000
}

export const user = {
    cc_user: '1005206688',
    first_name: 'Mario',
    last_name: 'Franco',
    email: 'lmfg06@gmail.com',
    city: 'Bogota',
    age: '20',
    role: 'admin',
    address: 'Calle 1',
    uid: 'HqtzyCn6JyR1Zoy1eqbrEV3ji5I3',
    active_user: true,
    code: "123456",
    conductor: 'no'
}

export const raiz = [
    "Bienvenidos a la API Rest de MovE",
    {
        info: "Endpoint con Autorizacion por token",
        auth: "Para poder acceder a los datos se debe logear este devuelve un token",
        urlLocal: "http://35.211.155.160:5000/auth/login",
        pd: "Si no tienes creada una cuenta para logearte puedes ingresar a la siguiente url: http://localhost:5000/auth/signin"
    },
    {
        info: "Servidor local con token",
        url: "http://35.211.155.160:5000/vehicles"
    },
    {
        info: "Documentacion de la API",
        url: "http://35.211.155.160:5000/api-docs"
    }
]