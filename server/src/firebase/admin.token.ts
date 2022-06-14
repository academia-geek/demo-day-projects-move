import { Request, Response, NextFunction } from "express";
import config from "./firebase";
import { pool } from "../database/database.config";

export const decodeToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        if (token === undefined) {
            return res.status(401).json({ message: "Unauthorized" });
        } else {
            const decodeValue = await config.admin.auth().verifyIdToken(token!);
            if (decodeValue != null || decodeValue != undefined) {
                return next();
            }
            return res.json({ message: "Unauthorized" });
        }
    } catch (error) {
        if (error.code === "auth/id-token-expired") {
            return res.json({ message: "Token expired" }).status(401);
        } else if (error.code === "auth/argument-error") {
            return res.json({ message: "Invalid token" }).status(401);
        } else {
            return res.json({ message: "Internal Server Error" }).status(500);
        }
    }
}

export const uidToken = async (req: Request) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        const decodeValue = await config.admin.auth().verifyIdToken(token!)
        return decodeValue;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const tokenAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        if (token === undefined) {
            return res.status(401).json({ message: "Unauthorized" });
        } else {
            const decodeValue = await config.admin.auth().verifyIdToken(token!);
            if (decodeValue != null || decodeValue != undefined) {
                const uid = decodeValue.uid;
                const cliente = await pool.connect();
                try {
                    const result = await cliente.query('SELECT role FROM users WHERE uid = $1', [uid]);
                    if (result.rows[0].role === "admin") {
                        return next();
                    } else {
                        return res.json({ message: "Admin Only" }).status(401);
                    }
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            }
            return res.json({ message: "Unauthorized" });
        }
    } catch (error) {
        if (error.code === "auth/id-token-expired") {
            return res.json({ message: "Token expired" }).status(401);
        } else if (error.code === "auth/argument-error") {
            return res.json({ message: "Invalid token" }).status(401);
        } else {
            return res.json({ message: "Internal Server Error" }).status(500);
        }
    }
}

export const tokenPrestador = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        if (token === undefined) {
            return res.status(401).json({ message: "Unauthorized" });
        } else {
            const decodeValue = await config.admin.auth().verifyIdToken(token!);
            if (decodeValue != null || decodeValue != undefined) {
                const uid = decodeValue.uid;
                const cliente = await pool.connect();
                try {
                    const result = await cliente.query('SELECT role FROM users WHERE uid = $1', [uid]);
                    // console.log(result.rows[0].role);

                    if (result.rows[0].role === "prestador") {
                        return next();
                    } else {
                        return res.json({ message: "Prestador Only" }).status(401);
                    }
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ message: "Internal Server Error" });
                }
            }
            return res.json({ message: "Unauthorized" });
        }
    } catch (error) {
        if (error.code === "auth/id-token-expired") {
            return res.json({ message: "Token expired" }).status(401);
        } else if (error.code === "auth/argument-error") {
            return res.json({ message: "Invalid token" }).status(401);
        } else {
            return res.json({ message: "Internal Server Error" }).status(500);
        }
    }
}