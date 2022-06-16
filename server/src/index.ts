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
                url: "http://localhost:5000/",
                description: "Local"
            },
            {
                url: "FOR CONFIGURATION",
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
    ])
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)))

app.subscribe(connectDatabase())
// .then(() => {

// }).catch((error: Error) => {
//     console.log("Database connection failed", error);
//     process.exit();
// })

app.use(morgan("dev"));
app.use("/vehicles", vehicleRouter)
app.use("/auth", authRouter)
app.use("/admin", adminRouter)
app.use("/lender", lenderRouter)
app.listen(app.get("port"), () => {
    console.log(`Server running on port ${app.get("port")}`);
})

export default app;
