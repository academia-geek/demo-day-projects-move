import dotenv from "dotenv";

dotenv.config({ path: ".env" })


/**
|----------------------------------------------------------------------------------------|
    App Configuration
|----------------------------------------------------------------------------------------|
*/
export const ENVIRONMENT = process.env.NODE_ENV;
const PROD = ENVIRONMENT === "production" //
export const PORT = process.env.PORT


/**
|----------------------------------------------------------------------------------------|
    Authentication Configuration
|----------------------------------------------------------------------------------------|
*/

export const SESSION_SECRET = process.env.JWT_SECRET || ""

/**
* Use only if you include jwt
*/
// if (!SESSION_SECRET) process.exit(1)


/**
|----------------------------------------------------------------------------------------|
    Databases Configuration
|----------------------------------------------------------------------------------------|
*/

/**
*  MySQL
*/
export const CONFIG_MYSQL = {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
}

/**
*  Mongo DB
*/
export const MONGODB_URI = PROD
    ? process.env.MONGO_PRODUCTION
    : process.env.MONGO_DEVELOPMENT

export const DB_NAME = process.env.DB_NAME
/**
 * Postgres
 */
export const CONFIG_POSTGRES = {
    host: process.env.HOST_POSTGRES,
    user: process.env.DB_USER_POSTGRES,
    database: process.env.DATABASE_POSTGRES,
    password: process.env.DB_PASSWORD_POSTGRES,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0,
    max: 120,
    port: 5432,
}


/**
 * Configuracion para FirebaseApp
 * 
 */

export const CONFIG_FIREBASE = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};



/**
 * Colecciones de la base de datos mongo
 */
export const COLLECTION_VEHICLES = process.env.VEHICLE_COLLECTION_NAME || "vehicle"
export const COLLECTION_USERS = process.env.USER_COLLECTION_NAME || "users"
export const COLLECTION_PRICES = process.env.PRICE_COLLECTION_NAME || "prices"

/**
 * Envio de correos electrónicos
 */
export const KEY_SENDGRID = process.env.API_KEY_SENDGRID
export const SENDER_EMAIL = process.env.SENDER_EMAIL
export const SEND_CODE = process.env.SEND_CODE