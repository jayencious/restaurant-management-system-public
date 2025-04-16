import sql from "../db";

export const rupeeSymbol = '₹';

async function getVegStarters() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 1;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch veg_starters data from the database.');
    }
}

async function getNonVegStarters() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 2;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch non_veg_starters data from the database.');
    }
}

async function getVegPlatters() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 3;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch veg_platters data from the database.');
    }
}

async function getNonVegPlatters() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 4;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch non_veg_platters data from the database.');
    }
}

async function getVegMainCourse() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 5;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch veg_main_course data from the database.');
    }
}

async function getNonVegMainCourse() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 6;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch non_veg_main_course data from the database.');
    }
}

async function getVegBiryani() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 7;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch veg_biryani data from the database.');
    }
}

async function getNonVegBiryani() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 8;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch non_veg_biryani data from the database.');
    }
}

async function getVegRice() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 9;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch veg_rice data from the database.');
    }
}

async function getNonVegRice() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 10;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch non_veg_rice data from the database.');
    }
}

async function getRotisAndBreads() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 11;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch rotis_and_breads data from the database.');
    }
}

async function getChaats() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 12;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch chaats data from the database.');
    }
}

async function getSalads() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 13;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch salads data from the database.');
    }
}

async function getRaitas() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 14;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch raitas data from the database.');
    }
}

async function getSweetDishes() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 15;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch sweet dishes data from the database.');
    }
}

async function getBeverages() {
    try {
        const data = await sql`
            SELECT * FROM food_items
            WHERE category_id = 16;
        `;

        return data;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch beverages data from the database.');
    }
}

export {
    getVegStarters,
    getNonVegStarters,
    getVegPlatters,
    getNonVegPlatters,
    getVegMainCourse,
    getNonVegMainCourse,
    getVegBiryani,
    getNonVegBiryani,
    getVegRice,
    getNonVegRice,
    getRotisAndBreads,
    getChaats,
    getSalads,
    getRaitas,
    getSweetDishes,
    getBeverages
};