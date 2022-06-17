import { Request, Response, NextFunction } from "express";
import { connectDatabase } from "../services/database.service";

export const connectMongo = async (req: Request, res: Response, next: NextFunction) => {
    connectDatabase().then(() => {
        return next();
    })
}