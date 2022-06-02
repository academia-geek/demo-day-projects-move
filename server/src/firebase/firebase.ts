import { initializeApp } from "firebase/app"
import admin from "firebase-admin";
import {CONFIG_FIREBASE} from "../application/config/environment";
import serviceAccount from './serviceAccountKey.json';
import { ServiceAccount } from "firebase-admin";

const app = initializeApp(CONFIG_FIREBASE);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
})


export default { app, admin }