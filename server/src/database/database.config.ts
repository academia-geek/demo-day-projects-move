import { Pool } from "pg";
import { CONFIG_POSTGRES } from "../application/config/environment";

export const pool = new Pool(CONFIG_POSTGRES)