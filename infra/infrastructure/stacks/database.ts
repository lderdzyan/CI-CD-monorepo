import { Database } from "../components/database";
const db = new Database("database");

export const tables = db.tables;
