import sql from "../data/db";
import veg_starters from "../data/vegStarters";
import non_veg_starters from "../data/nonVegStarters";
import veg_platters from "../data/vegPlatters";
import non_veg_platters from "../data/nonVegPlatters";
import veg_main_course from "../data/vegMainCourse";
import non_veg_main_course from "../data/nonVegMainCourse";
import veg_biryani from "../data/vegBiryani";
import non_veg_biryani from "../data/nonVegBiryani";
import veg_rice from "../data/vegRice";
import non_veg_rice from "../data/nonVegRice";
import rotis_and_breads from "../data/rotisAndBreads";
import chaats from "../data/chaats";
import salads from "../data/salads";
import raitas from "../data/raita";
import sweet_dishes from "../data/sweetDishes";
import beverages from "../data/beverages";

// async function seedUser() {
//     try {
//         await sql`
            // CREATE TABLE IF NOT EXISTS users (
            //     user_id SERIAL PRIMARY KEY,
            //     first_name VARCHAR(50) NOT NULL,
            //     last_name VARCHAR(60) NOT NULL,
            //     email VARCHAR(100) UNIQUE NOT NULL,
            //     mobile_no VARCHAR(10) UNIQUE NOT NULL,
            //     password VARCHAR(100) NOT NULL,
            //     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            //     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            //     city VARCHAR(30),
            //     state VARCHAR(30),
            //     address VARCHAR(150)
            // );
//         `;
//         console.log(`✅ | users Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating users Table:', err);
//     }
// }

// async function seedAdmin() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS admin (
//                 admin_id SERIAL PRIMARY KEY,
//                 first_name VARCHAR(50) NOT NULL,
//                 last_name VARCHAR(60) NOT NULL,
//                 email VARCHAR(100) UNIQUE NOT NULL,
//                 password VARCHAR(100) NOT NULL
//             );
//         `;
//         console.log(`✅ | admin Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating admin Table:', err);
//     }
// }

// async function seedRestaurant() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS restaurant (
//                 name VARCHAR(100) PRIMARY KEY,
//                 address VARCHAR(150),
//                 contact_no INTEGER
//             );
//         `;
//         console.log(`✅ | restaurant Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating restaurant Table:', err);
//     }
// }

// async function seedCategory() {
//     try {
//         // await sql`
            // CREATE TABLE IF NOT EXISTS category (
            //     category_id SERIAL PRIMARY KEY,
            //     name VARCHAR(50) NOT NULL,
            //     type VARCHAR(10)
            // );
//         // `;
//         // console.log(`✅ | category Table Created Successfully!`);

//         // const categories = [
//         //     { table: 'veg_starters', name: 'Veg Starters', type: 'veg' },
//         //     { table: 'non_veg_starters', name: 'Non Veg Starters', type: 'non_veg' },
//         //     { table: 'veg_platters', name: 'Veg Platters', type: 'veg' },
//         //     { table: 'non_veg_platters', name: 'Non Veg Platters', type: 'non_veg' },
//         //     { table: 'veg_main_course', name: 'Veg Main Course', type: 'veg' },
//         //     { table: 'non_veg_main_course', name: 'Non Veg Main Course', type: 'non_veg' },
//         //     { table: 'veg_biryani', name: 'Veg Biryani', type: 'veg' },
//         //     { table: 'non_veg_biryani', name: 'Non Veg Biryani', type: 'non_veg' },
//         //     { table: 'veg_rice', name: 'Veg Rice', type: 'veg' },
//         //     { table: 'non_veg_rice', name: 'Non Veg Rice', type: 'non_veg' },
//         //     { table: 'rotis_and_breads', name: 'Rotis and Breads', type: null },
//         //     { table: 'chaats', name: 'Chaats', type: null },
//         //     { table: 'salads', name: 'Salads', type: null },
//         //     { table: 'raita', name: 'Raitas', type: null },
//         //     { table: 'sweet_dishes', name: 'Sweet Dishes', type: null },
//         //     { table: 'beverages', name: 'Beverages', type: null },
//         // ];

//         // for (const { table, name, type} of categories) {
//         //     const [{ category_id }] = await sql`
//         //         INSERT INTO category (name, type)
//         //         VALUES (${name}, ${type})
//         //         RETURNING category_id
//         //     `;

//         //     const items = await sql`
//         //         SELECT * FROM ${sql(table)}
//         //     `;

//         //     for (const item of items) {
//         //         await sql`
//         //             INSERT INTO food_items (category_id, item_name, description, price)
//         //             VALUES(${category_id}, ${item.name}, ${item.description}, ${item.price})
//         //         `;
//         //     }
//         //     console.log(`✅ Successfully inserted ${items.length} from ${table}`);
//         // }
//         // console.log(`✅ | Successfully inserted all food items into the database!`);
//     } catch (err) {
//         // console.error('❌ | Error Creating category Table:', err);
//         console.error('❌ | Error inserting food items into the database:', err);
//     } finally {
//         await sql.end();
//     }
// }

// async function seedFoodItems() {
//     try {
//         await sql`
            // CREATE TABLE IF NOT EXISTS food_items (
            //     item_id SERIAL PRIMARY KEY,
            //     category_id INTEGER NOT NULL REFERENCES category(category_id),
            //     item_name VARCHAR(150) NOT NULL,
            //     description TEXT NOT NULL,
            //     price DECIMAL(6, 2) NOT NULL,
            //     create_date DATE DEFAULT CURRENT_DATE
            // );
//         `;
//         console.log(`✅ | food_items Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating food_items Table:', err);
//     }
// }

// async function seedOrders() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS orders (
//                 order_id SERIAL PRIMARY KEY,
//                 user_id INTEGER NOT NULL REFERENCES users(user_id),
//                 total_price DECIMAL(10, 2) NOT NULL,
//                 delivery_address TEXT NOT NULL,
//                 name TEXT NOT NULL,
//                 phone TEXT NOT NULL,
//                 status VARCHAR(50) DEFAULT 'pending',
//                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//                 payment_id VARCHAR(100)                
//             );
//         `;
//         console.log(`✅ | orders Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating orders Table:', err);
//     }
// }

// async function seedOrderItems() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS order_items (
//                 order_item_id SERIAL PRIMARY KEY,
//                 order_id INTEGER NOT NULL REFERENCES orders(order_id),
//                 item_id INTEGER NOT NULL REFERENCES food_items(item_id),
//                 quantity INTEGER NOT NULL,
//                 price DECIMAL(6, 2) NOT NULL
//             );
//         `;
//         console.log(`✅ | order_items Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating order_items Table:', err);
//     }
// }

// async function seedCart() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS cart (
//                 cart_id SERIAL PRIMARY KEY,
//                 user_id INTEGER NOT NULL REFERENCES users(user_id),
//                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//             );
//         `;
//         console.log(`✅ | cart Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating cart Table:', err);
//     }
// }

// async function seedCartItems() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS cart_items (
//                 cart_item_id SERIAL PRIMARY KEY,
//                 cart_id INTEGER NOT NULL REFERENCES cart(cart_id),
//                 item_id INTEGER NOT NULL REFERENCES food_items(item_id),
//                 quantity INTEGER NOT NULL DEFAULT 1,
//                 added_price DECIMAL(6, 2) NOT NULL
//             );
//         `;
//         console.log(`✅ | cart_items Table Created Successfully!`);
//     } catch (err) {
//         console.error('❌ | Error Creating cart_items Table:', err);
//     }
// }

// async function seedVegStarters() {
//     try {
//         await sql`
//             CREATE TABLE IF NOT EXISTS veg_starters (
//                 id SERIAL PRIMARY KEY,
//                 type VARCHAR(9) NOT NULL,
//                 name VARCHAR(150) NOT NULL,
//                 description TEXT NOT NULL,
//                 price DECIMAL(6, 2) NOT NULL
//             );
//         `;
//         console.log(`✅ | veg_starters Table Created Successfully!`);

//         const insertedVegStarters = await Promise.all(
//             veg_starters.map((dish) => sql`
//                 INSERT INTO veg_starters (type, name, description, price)
//                 VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedVegStarters;
//     } catch (err) {
//         console.error('❌ | Error Inserting veg_starters Values:', err);
//     }
// }

// async function seedNonVegStarters() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS non_veg_starters (
//             //     id SERIAL PRIMARY KEY,
//             //     type VARCHAR(9) NOT NULL,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | non_veg_starters Table Created Successfully!`);

//         const insertedNonVegStarters = await Promise.all(
//             non_veg_starters.map((dish) => sql`
//                     INSERT INTO non_veg_starters (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedNonVegStarters;
//     } catch (err) {
//         console.error('❌ | Error Inserting non_veg_starters Values:', err);
//     }
// }

// async function seedVegPlatters() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS veg_platters (
//             //     id SERIAL PRIMARY KEY,
//             //     type VARCHAR(9) NOT NULL,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | veg_platters Table Created Successfully!`);

//         const insertedVegPlatters = await Promise.all(
//             veg_platters.map((dish) => sql`
//                     INSERT INTO veg_platters (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedVegPlatters;
//     } catch (err) {
//         console.error('❌ | Error Inserting veg_platters Values:', err);
//     }
// }

// async function seedNonVegPlatters() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS non_veg_platters (
//             //     id SERIAL PRIMARY KEY,
//             //     type VARCHAR(9) NOT NULL,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | non_veg_platters Table Created Successfully!`);

//         const insertedNonVegPlatters = await Promise.all(
//             non_veg_platters.map((dish) => sql`
//                     INSERT INTO non_veg_platters (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedNonVegPlatters;
//     } catch (err) {
//         console.error('❌ | Error Inserting non_veg_platters Values:', err);
//     }
// }

// async function seedVegMainCourse() {
//     try {
//         // await sql`
//         //     CREATE TABLE IF NOT EXISTS veg_main_course (
//         //         id SERIAL PRIMARY KEY,
//         //         type VARCHAR(9) NOT NULL,
//         //         name VARCHAR(150) NOT NULL,
//         //         description TEXT NOT NULL,
//         //         price DECIMAL(6, 2) NOT NULL
//         //     );
//         // `;
//         // console.log(`✅ | veg_main_course Table Created Successfully!`);

//         const insertedVegMainCourse = await Promise.all(
//             veg_main_course.map((dish) => sql`
//                     INSERT INTO veg_main_course (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedVegMainCourse;
//     } catch (err) {
//         console.error('❌ | Error Inserting veg_main_course Values:', err);
//     }
// }

// async function seedNonVegMainCourse() {
//     try {
//         // await sql`
//         //     CREATE TABLE IF NOT EXISTS non_veg_main_course (
//         //         id SERIAL PRIMARY KEY,
//         //         type VARCHAR(9) NOT NULL,
//         //         name VARCHAR(150) NOT NULL,
//         //         description TEXT NOT NULL,
//         //         price DECIMAL(6, 2) NOT NULL
//         //     );
//         // `;
//         // console.log(`✅ | non_veg_main_course Table Created Successfully!`);

//         const insertedNonVegMainCourse = await Promise.all(
//             non_veg_main_course.map((dish) => sql`
//                     INSERT INTO non_veg_main_course (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,),
//         );

//         return insertedNonVegMainCourse;
//     } catch (error) {
//         console.error('❌ | Error Inserting non_veg_main_course Values:', error);
//     }
// }

// async function seedVegBiryani() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS veg_biryani (
//             //     id SERIAL PRIMARY KEY,
//             //     type VARCHAR(9) NOT NULL,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | veg_biryani Table Created Successfully!`);

//         const insertedVegBiryani = await Promise.all(
//             veg_biryani.map((dish) => sql`
//                     INSERT INTO veg_biryani (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,),
//         );

//         return insertedVegBiryani;
//     } catch (error) {
//         console.error('❌ | Error Inserting veg_biryani Values:', error);
//     }
// }

// async function seedNonVegBiryani() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS non_veg_biryani (
//             //     id SERIAL PRIMARY KEY,
//             //     type VARCHAR(9) NOT NULL,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | non_veg_biryani Table Created Successfully!`);

//         const insertedNonVegBiryani = await Promise.all(
//             non_veg_biryani.map((dish) => sql`
//                     INSERT INTO non_veg_biryani (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedNonVegBiryani;
//     } catch (error) {
//         console.error('❌ | Error Inserting non_veg_biryani Values:', error);
//     }
// }

// async function seedVegRice() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS veg_rice (
//             //     id SERIAL PRIMARY KEY,
//             //     type VARCHAR(9) NOT NULL,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | veg_rice Table Created Successfully!`);

//         const insertedVegRice = await Promise.all(
//             veg_rice.map((dish) => sql`
//                     INSERT INTO veg_rice (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedVegRice;
//     } catch (error) {
//         console.error('❌ | Error Inserting veg_rice Values:', error);
//     }
// }

// async function seedNonVegRice() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS non_veg_rice (
//             //     id SERIAL PRIMARY KEY,
//             //     type VARCHAR(9) NOT NULL,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | non_veg_rice Table Created Successfully!`);

//         const insertedNonVegRice = await Promise.all(
//             non_veg_rice.map((dish) => sql`
//                     INSERT INTO non_veg_rice (type, name, description, price)
//                     VALUES (${dish.type}, ${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedNonVegRice;
//     } catch (error) {
//         console.error('❌ | Error Inserting non_veg_rice Values:', error);
//     }
// }

// async function seedRotisAndBreads() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS rotis_and_breads (
//             //     id SERIAL PRIMARY KEY,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | rotis_and_breads Table Created Successfully!`);

//         const insertedRotisAndBreads = await Promise.all(
//             rotis_and_breads.map((dish) => sql`
//                     INSERT INTO rotis_and_breads (name, description, price)
//                     VALUES (${dish.name}, ${dish.description}, ${dish.price});
//                 `,),
//         );

//         return insertedRotisAndBreads;
//     } catch (error) {
//         console.error('❌ | Error Inserting rotis_and_breads Values:', error);
//     }
// }

// async function seedChaats() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS chaats (
//             //     id SERIAL PRIMARY KEY,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | chaats Table Created Successfully!`);

//         const insertedChaats = await Promise.all(
//             chaats.map((dish) => sql`
//                     INSERT INTO chaats (name, description, price)
//                     VALUES (${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedChaats;
//     } catch (error) {
//         console.error('❌ | Error Inserting chaats Values:', error);
//     }
// }

// async function seedSalads() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS salads (
//             //     id SERIAL PRIMARY KEY,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | salads Table Created Successfully!`);

//         const insertedSalads = await Promise.all(
//             salads.map((dish) => sql`
//                     INSERT INTO salads (name, description, price)
//                     VALUES (${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedSalads;
//     } catch (error) {
//         console.error('❌ | Error Inserting salads Values:', error);
//     }
// }

// async function seedRaitas() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS raita (
//             //     id SERIAL PRIMARY KEY,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | raita Table Created Successfully!`);

//         const insertedRaitas = await Promise.all(
//             raitas.map((dish) => sql`
//                     INSERT INTO raita (name, description, price)
//                     VALUES (${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );

//         return insertedRaitas;
//     } catch (error) {
//         console.error('❌ | Error Inserting raita Values:', error);
//     }
// }

// async function seedSweetDishes() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS sweet_dishes (
//             //     id SERIAL PRIMARY KEY,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | sweet_dishes Table Created Successfully!`);

//         const insertedSweetDishes = await Promise.all(
//             sweet_dishes.map((dish) => sql`
//                     INSERT INTO sweet_dishes (name, description, price)
//                     VALUES (${dish.name}, ${dish.description}, ${dish.price});
//                 `,
//             ),
//         );
//     } catch (error) {
//         console.error('❌ | Error Inserting sweetDishes Values:', error);
//     }
// }

// async function seedBeverages() {
//     try {
//         // await sql`
//             // CREATE TABLE IF NOT EXISTS beverages (
//             //     id SERIAL PRIMARY KEY,
//             //     name VARCHAR(150) NOT NULL,
//             //     description TEXT NOT NULL,
//             //     price DECIMAL(6, 2) NOT NULL
//             // );
//         // `;
//         // console.log(`✅ | beverages Table Created Successfully!`);

//         const insertedBeverages = await Promise.all(
//             beverages.map((beverage) => sql`
//                     INSERT INTO beverages (name, description, price)
//                     VALUES (${beverage.name}, ${beverage.description}, ${beverage.price});
//                 `,
//             ),
//         );
//     } catch (error) {
//         console.error('❌ | Error Inserting Beverages Values:', error);
//     }
// }

export async function GET() {
    try {
        const res = await sql.begin((sql) => [
            seedOrders(),
            seedOrderItems(),
        ]);

        return Response.json({ message: 'Database seeded successfully!' });
    } catch (err) {
        return Response.json({ err }, { status: 500 });
    }
};