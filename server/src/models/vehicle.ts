import { ObjectId } from "mongodb";

export interface vehicles {
    id?: ObjectId;
    type: String;
    subtitle: String;
    share: Object;
    images: Object;
    hub: Object;
    artists: String;
    layout: String;
    key: String;
    title: String;
    url: String;
}