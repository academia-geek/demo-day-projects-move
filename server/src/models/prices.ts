import { ObjectId } from "mongodb";

export interface Prices {
    id?: ObjectId;
    type: String;
    subtitle: String;
}