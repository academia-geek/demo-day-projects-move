import * as mongoDB from "mongodb";
import {COLLECTION_VEHICLES, COLLECTION_USERS, COLLECTION_PRICES} from "../application/config/environment";
/* import { vehicles } from "../models/vehicles";
import { Users } from "../models/users";
import { Users } from "../models/users"; */
import {Prices, Users, Vehicles} from "../models/index";

export const collectionVehicles: { vehicles?: mongoDB.Collection<Vehicles> } = {}
export const collectionUsers: { users?: mongoDB.Collection<Users> } = {}
export const collectionPrices: { prices?: mongoDB.Collection<Prices> } = {}

export const connectDatabase = async () => {
    const client = new mongoDB.MongoClient(process.env.MONGO_DEVELOPMENT)

    await client.connect()

    const db = client.db(process.env.DB_NAME)

    // await applySchemaValidation(db);

    // vehicles
    const vehiclesCollection = db.collection<Vehicles>(COLLECTION_VEHICLES)
    collectionVehicles.vehicles = vehiclesCollection

    //TODO: Users este no debe de ir aca pero mientras
    const usersCollection = db.collection<Users>(COLLECTION_USERS)
    collectionUsers.users = usersCollection

    // Users
    const pricesCollection = db.collection<Prices>(COLLECTION_PRICES)
    collectionPrices.prices = pricesCollection

    console.log(`Successfully connected to database: ${db.databaseName} and collection vehicles: ${vehiclesCollection.collectionName} and collection Users: ${usersCollection.collectionName}`,)
}