import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectDatabase } from "./services/database.service";
import { vehicleRouter } from "./routes/vehicle.routes";
import { authRouter } from "./routes/users.routes";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { decodeToken } from "./firebase/admin.token";
import { adminRouter } from "./routes/admin.routes";
import { lenderRouter } from "./routes/lender.routes";
import { takerRouter } from "./routes/taker.routes";
import { serviceRouter } from "./routes/service.routes";

const app = express();
dotenv.config();

app.use(cors())
app.set("port", process.env.PORT || 8080);
app.enable('trust proxy');

const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MovE API Documentation',
            description:
                "Esta API es documentada con Swagger, así se puede lograr un correcto y adecuado manejo a la misma.",
            contact: {
                name: "Administrador",
                email: "cuentacorreomove@gmail.com",
            },
            version: '1.0.0'
        },
        servers: [
            {
                url: "http://localhost:5000/",
                description: "Local"
            },
            {
                url: "https://api.demodaymove.tech/",
                description: "Servidor"
            }
        ],
    },
    apis: ['./dist/docs/*.js']

}
app.get('/', (req, res) => {
    res.send([
        "Bienvenidos a la API Rest de MovE",
        {
            info: "Endpoint con Autorizacion por token",
            auth: "Para poder acceder a los datos se debe logear este devuelve un token",
            urlLocal: "https://api.demodaymove.tech/auth/login",
            pd: "Si no tienes creada una cuenta para logearte puedes ingresar a la siguiente url: https://api.demodaymove.tech/auth/signin"
        },
        {
            info: "Servidor local con token",
            url: "https://api.demodaymove.tech/vehicles"
        },
        {
            info: "Documentacion de la API",
            url: "https://api.demodaymove.tech/api-docs"
        }
    ])
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)))

connectDatabase()
    .then(() => {
        app.use(morgan("dev"));
        app.use("/vehicles", vehicleRouter)
        app.use("/auth", authRouter)
        app.use("/admin", adminRouter)
        app.use("/lender", lenderRouter)
        app.use("/taker", takerRouter)
        app.use("/service", serviceRouter)
        app.listen(app.get("port"), () => {
            console.log(`Server running on port ${app.get("port")}`);
        })
    }).catch((error: Error) => {
        console.log("Database connection failed", error);
        process.exit();
    })


