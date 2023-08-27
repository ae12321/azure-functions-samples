import * as dotenv from "dotenv";
dotenv.config();

export const PROJECT_DATABASE_HOST = process.env.PROJECT_DATABASE_HOST;
export const PROJECT_DATABASE_PORT = +process.env.PROJECT_DATABASE_PORT;
export const PROJECT_DATABASE_DB = process.env.PROJECT_DATABASE_DB;
export const PROJECT_DATABASE_USER = process.env.PROJECT_DATABASE_USER;
export const PROJECT_DATABASE_PASS = process.env.PROJECT_DATABASE_PASS;
