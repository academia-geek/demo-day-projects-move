import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { vehicles } from "../models/vehicle";
import { Users } from "../models/users";

export const collectionvehicles: { vehicles?: mongoDB.Collection<vehicles> } = {}
export const collectionUsers: { users?: mongoDB.Collection<Users> } = {}

export const connectDatabase = async () => {
    dotenv.config()

    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING || process.env.DB_CONN_STRING_DOCKER)

    await client.connect()

    const db = client.db(process.env.DB_NAME)

    // await applySchemaValidation(db);

    // vehicles
    const vehiclesCollection = db.collection<vehicles>(process.env.vehicle_COLLECTION_NAME)
    collectionvehicles.vehicles = vehiclesCollection

    // Users
    const usersCollection = db.collection<Users>(process.env.USER_COLLECTION_NAME)
    collectionUsers.users = usersCollection

    console.log(`Successfully connected to database: ${db.databaseName} and collection vehicles: ${vehiclesCollection.collectionName} and collection Users: ${usersCollection.collectionName}`,)
}

const applySchemaValidation = async (db: mongoDB.Db) => {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["layout", "key", "title"],
            additionalProperties: false,
            properties: {
                _id: {},
                layout: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                key: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                title: {
                    bsonType: "string",
                    description: "must be a string and is required"
                }
            }
        }
    }

    await db.command({
        collMod: process.env.vehicle_COLLECTION_NAME,
        validator: jsonSchema
    }).catch(async (error: mongoDB.MongoServerError) => {
        if (error.codeName === 'NamespaceNotFound') {
            await db.createCollection(process.env.vehicle_COLLECTION_NAME, { validator: jsonSchema });
        }
    })
}