import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import { connectDatabase } from "./services/database.service";
import { vehicleRouter } from "./routes/vehicle.routes";
import { authRouter } from "./routes/users.routes";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
dotenv.config();

app.use(cors())
app.set("port", process.env.PORT || 3000);

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
                url: "http://34.66.155.91:5000/",
                description: "Servidor"
            },
            {
                url: "http://localhost:5000/",
                description: "Local"
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
            urlLocal: "http://localhost:5000/auth/login",
            urlServer: "http://34.66.155.91:5000/auth/login",
            pd: "Si no tienes creada una cuenta para logearte puedes ingresar a la siguiente url: http://localhost:5000/auth/signin o http://34.66.155.91:5000/auth/signin"
        },
        {
            info: "Servidor local con token",
            url: "http://localhost:5000/vehicle"
        },
        {
            info: "Servidor Cloud con token",
            url: "http://34.66.155.91:5000/vehicle"
        }
    ])
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)))

connectDatabase()
    .then(() => {
        app.use(morgan("dev"));
        app.use("/vehicle", vehicleRouter)
        app.use("/auth", authRouter)
        app.listen(app.get("port"), () => {
            console.log(`Server running on port ${app.get("port")}`);
        })
    }).catch((error: Error) => {
        console.log("Database connection failed", error);
        process.exit();
    })


