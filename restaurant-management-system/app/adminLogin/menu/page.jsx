import AdminMenuClient from "./adminMenuClient";
import { auth } from "../../auth";
import sql from "../../data/db";
import { Playfair } from "next/font/google";

const playfair = Playfair({
    subsets: ['latin'],
    weight: ['400', '600'],
    display: 'swap',
});

async function AdminMenu() {
    const session = await auth();

    if (!session || session.user.role !== "admin") {
        return <div>Access denied. Admins only</div>;
    }

    const userName = session?.user?.name;
    const userEmail = session?.user?.email;

    const getItemsByCategory = async (categoryId) => {
        const res = await sql`
            SELECT item_id, category_id, item_name, description, price
            FROM food_items
            WHERE category_id = ${categoryId}
        `;
        return res || [];
    }

    const [
        vegStarters,
        nonVegStarters,
        vegPlatters,
        nonVegPlatters,
        vegMainCourse,
        nonVegMainCourse,
        vegBiryani,
        nonVegBiryani,
        vegRice,
        nonVegRice,
        rotisAndBreads,
        chaats,
        salads,
        raitas,
        sweetDishes,
        beverages
    ] = await Promise.all([
        getItemsByCategory(1),
        getItemsByCategory(2),
        getItemsByCategory(3),
        getItemsByCategory(4),
        getItemsByCategory(5),
        getItemsByCategory(6),
        getItemsByCategory(7),
        getItemsByCategory(8),
        getItemsByCategory(9),
        getItemsByCategory(10),
        getItemsByCategory(11),
        getItemsByCategory(12),
        getItemsByCategory(13),
        getItemsByCategory(14),
        getItemsByCategory(15),
        getItemsByCategory(16),
    ]);

    return (
        <AdminMenuClient
            vegStarters={vegStarters}
            nonVegStarters={nonVegStarters}
            vegPlatters={vegPlatters}
            nonVegPlatters={nonVegPlatters}
            vegMainCourse={vegMainCourse}
            nonVegMainCourse={nonVegMainCourse}
            vegBiryani={vegBiryani}
            nonVegBiryani={nonVegBiryani}
            vegRice={vegRice}
            nonVegRice={nonVegRice}
            rotisAndBreads={rotisAndBreads}
            chaats={chaats}
            salads={salads}
            raitas={raitas}
            sweetDishes={sweetDishes}
            beverages={beverages}
            userName={userName}
            userEmail={userEmail}
        />
    );
}

export default AdminMenu;