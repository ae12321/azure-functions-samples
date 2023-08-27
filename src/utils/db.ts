import { Client, Pool } from "pg";
import {
  PROJECT_DATABASE_DB,
  PROJECT_DATABASE_HOST,
  PROJECT_DATABASE_PASS,
  PROJECT_DATABASE_PORT,
  PROJECT_DATABASE_USER,
} from "./constant";

const pool = new Pool({
  user: PROJECT_DATABASE_USER,
  host: PROJECT_DATABASE_HOST,
  database: PROJECT_DATABASE_DB,
  password: PROJECT_DATABASE_PASS,
  port: PROJECT_DATABASE_PORT,
});

export const query = async (sql: string, params: any[]) => {
  return await pool.query(sql, params);
};
