import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function main() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`
    await sql`
        CREATE TABLE IF NOT EXISTS users (
            userid UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            username VARCHAR(69) NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password varchar(255) NOT NULL
            role varchar(69) NOT NULL
        );
    `;
}