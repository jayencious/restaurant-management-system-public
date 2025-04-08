// import { Pool } from 'pg';
// import dotenv from 'dotenv';

// dotenv.config();

// export const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });

// export async function query(text: string, params: any[]) {
//     const client = await pool.connect();
//     try {
//         const res = await client.query(text, params);
//         return res.rows;
//     } finally {
//         client.release();
//     }
// }