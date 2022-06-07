import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { pool } from "../database/database.config";
import { collectionVehicles } from "../services/database.service";

// Validation de JOI
import validator from '../utilities/validator'
import vehicleSchema from "../schemas-joi/vehicle.schemajoi";

// Token initial firebase
import { decodeToken } from '../firebase/admin.token'

export const vehicleRouter = express.Router();
vehicleRouter.use(express.json());

vehicleRouter.get("/", async (req: Request, res: Response) => {
    try {
        const vehicles = await collectionVehicles.vehicles.find({}).toArray();
        res.json(vehicles).status(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

vehicleRouter.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const vehicle = await collectionVehicles.vehicles.findOne({ _id: new ObjectId(id) });
        if (vehicle) {
            res.json(vehicle).status(200);
        } else {
            res.status(404).json({ message: "vehicle not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

vehicleRouter.post("/", decodeToken, validator.body(vehicleSchema), async (req: Request, res: Response) => {
    let cliente = await pool.connect();
    try {
        const newVehicle = req.body;
        const usersResult = await cliente.query('SELECT * FROM users WHERE cc_user = $1', [newVehicle.cc_owner]);
        if (usersResult.rowCount === 0) {
            res.status(400).json({ message: "El usuario no esta registrado" });
        } else {
            const vehicle = await collectionVehicles.vehicles.findOne({ placa: newVehicle.placa });
            if (vehicle) {
                res.status(400).json({ message: `El vehiculo con la placa ${vehicle.placa} ya se encuentra registrado` });
            } else {
                const result = await collectionVehicles.vehicles.insertOne(newVehicle);

                result
                    ? res.json({ "_id": result.insertedId }).status(201)
                    : res.status(500).json({ message: "Error while inserting vehicle" });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

vehicleRouter.put("/:id", decodeToken, async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const vehicle = req.body;

        const query = { _id: new ObjectId(id) };
        const result = await collectionVehicles.vehicles.updateOne(query, { $set: vehicle });

        result
            ? res.json(vehicle).status(200)
            : res.status(500).json({ message: "Error while updating vehicle" });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

vehicleRouter.delete("/:id", decodeToken, async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await collectionVehicles.vehicles.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send("Languaje deleted");
        } else if (!result) {
            res.json({ message: `Failed to delete languaje with id ${id}` }).status(400);
        } else if (!result.deletedCount) {
            res.json({ message: `Languaje with id ${id} not found` }).status(404);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})
