import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()

//pasar esto al .env
/*
const pool = createPool({
    host: 'localhost',
    user: 'root',
    database:'dicsys',
    password: '20010209Xx$$',
    connectTimeout: 30000
});
*/

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    connectTimeout: 30000
});

export default pool;

//netstat -nao|findstr 0.0:3306
//taskkill /pid 16952 /f