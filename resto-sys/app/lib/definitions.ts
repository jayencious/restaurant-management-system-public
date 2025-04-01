import { pool } from "./db";

export default async function createUser() {
    try {
        const client = await pool.connect();
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(119) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log(`✅ | users Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating users Table:', err);
    } finally {
        pool.end();
    }
}

export async function createVegStarters() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS veg_starters (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | veg_starters Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating veg_starters Table:', err);
    } finally {
        pool.end();
    }
}

async function createNonVegStarters() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS non_veg_starters (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | non_veg_starters Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating non_veg_starters Table:', err);
    } finally {
        pool.end();
    }
}

async function createVegPlatters() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS veg_platters (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | veg_platters Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating veg_platters Table:', err);
    } finally {
        pool.end();
    }
}

async function createNonVegPlatters() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS non_veg_platters (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | non_veg_platters Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating non_veg_platters Table:', err);
    } finally {
        pool.end();
    }
}

async function createVegMainCourse() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS veg_main_course (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | veg_main_course Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating veg_main_course Table:', err);
    } finally {
        pool.end();
    }
}

async function createNonVegMainCourse() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS non_veg_main_course (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | non_veg_main_course Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating non_veg_main_course Table:', err);
    } finally {
        pool.end();
    }
}

async function createVegBiryani() {
    try {
        const client = await pool.connect();
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS veg_biryani (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | veg_biryani Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating veg_biryani Table:', err);
    } finally {
        pool.end();
    }
}

async function createNonVegBiryani() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS non_veg_biryani (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | non_veg_biryani Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating non_veg_biryani Table:', err);
    } finally {
        pool.end();
    }
}

async function createVegRice() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS veg_rice (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | veg_rice Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating veg_rice Table:', err);
    } finally {
        pool.end();
    }
}

async function createNonVegRice() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS non_veg_rice (
                id SERIAL PRIMARY KEY,
                type VARCHAR(9) NOT NULL,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | non_veg_rice Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating non_veg_rice Table:', err);
    } finally {
        pool.end();
    }
}

async function createRotisAndBreads() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS rotis_and_breads (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | rotis_and_breads Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating rotis_and_breads Table:', err);
    } finally {
        pool.end();
    }
}

async function createChaats() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS chaats (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | chaats Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating chaats Table:', err);
    } finally {
        pool.end();
    }
}

async function createSalads() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS salads (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | salads Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating salads Table:', err);
    } finally {
        pool.end();
    }
}

async function createRaitas() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS raita (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | raita Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating raita Table:', err);
    } finally {
        pool.end();
    }
}

async function createSweetDishes() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS sweet_dishes (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,'
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | sweet_dishes Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating sweet_dishes Table:', err);
    } finally {
        pool.end();
    }
}

async function createBeverages() {
    try {
        const client = await pool.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS beverages (
                id SERIAL PRIMARY KEY,
                name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                price DECIMAL(6, 2) NOT NULL
            );
        `);
        console.log(`✅ | beverages Table Created Successfully!`);
        client.release();
    } catch (err) {
        console.error('❌ | Error Creating beverages Table:', err);
    } finally {
        pool.end();
    }
}

// createUser(),
// createVegStarters(),
// createNonVegStarters(),
// createVegPlatters(),
// createNonVegPlatters(),
// createVegMainCourse(),
// createNonVegMainCourse(),
// createVegBiryani(),
// createNonVegBiryani(),
// createVegRice(),
// createNonVegRice(),
// createRotisAndBreads(),
// createChaats(),
// createSalads(),
// createRaitas(),
// createSweetDishes(),
// createBeverages();