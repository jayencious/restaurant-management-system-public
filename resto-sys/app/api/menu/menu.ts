import sql from "../db";
import { 
    beveragesData,
    chaatsData,
    nonVegBiryaniData,
    nonVegMainCourseData,
    nonVegPlattersData,
    nonVegRiceData,
    nonVegStartersData,
    raitasData,
    rotisAndBreadsData,
    saladsData,
    sweetDishesData,
    vegBiryaniData,
    vegMainCourseData,
    vegPlattersData,
    vegRiceData,
    vegStartersData
} from "@/app/data/types";

export const rupeeSymbol = '₹';

export async function getVegStarters() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        const data = await sql<vegStartersData[]>`
            SELECT * FROM veg_starters
        `;
        
        return data;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch veg starters data from database");
    }
}

export async function getNonVegStarters() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    
        const data = await sql<nonVegStartersData[]>`
            SELECT * FROM non_veg_starters
        `;
    
        return data;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch non-veg starters data from database");
    }
}

export async function getVegPlatters() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = await sql<vegPlattersData[]>`
            SELECT * FROM veg_platters
        `;
    
        return data;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch veg platters data from database");
    }
}

export async function getNonVegPlatters() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = await sql<nonVegPlattersData[]>`
            SELECT * FROM non_veg_platters
        `;
    
        return data;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch non-veg platters data from database");
    }
}

export async function getVegMainCourse() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const data = await sql<vegMainCourseData[]>`
            SELECT * FROM veg_main_course
        `;
    
        return data;
    } catch (err) {
        console.error(err);
        throw new Error("Failed to fetch veg main course data from database");
    }
}

export async function getNonVegMainCourse() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<nonVegMainCourseData[]>`
        SELECT * FROM non_veg_main_course
    `;

    return data;
}

export async function getVegBiryani() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<vegBiryaniData[]>`
        SELECT * FROM veg_biryani
    `;

    return data;
}

export async function getNonVegBiryani() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<nonVegBiryaniData[]>`
        SELECT * FROM non_veg_biryani
    `;

    return data;
}

export async function getVegRice() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<vegRiceData[]>`
        SELECT * FROM veg_rice
    `;

    return data;
}

export async function getNonVegRice() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<nonVegRiceData[]>`
        SELECT * FROM non_veg_rice
    `;

    return data;
}

export async function getRotisAndBreads() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<rotisAndBreadsData[]>`
        SELECT * FROM rotis_and_breads
    `;

    return data;
}

export async function getChaats() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<chaatsData[]>`
        SELECT * FROM chaats
    `;

    return data;
}

export async function getSalads() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<saladsData[]>`
        SELECT * FROM salads
    `;

    return data;
}

export async function getRaitas() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<raitasData[]>`
        SELECT * FROM raita
    `;

    return data;
}

export async function getSweetDishes() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<sweetDishesData[]>`
        SELECT * FROM sweet_dishes
    `;

    return data;
}

export async function getBeverages() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<beveragesData[]>`
        SELECT * FROM beverages
    `;

    return data;
}
