import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import SidebarToggle from "../../utils/sidebarToggle";
import { auth } from "../../auth";
import sql from "../../data/db";
import { rupeeSymbol } from "../../data/menuData/menu";
import { Playfair } from "next/font/google";
import Link from "next/link";

const playfair = Playfair({
    subsets: ['latin'],
    weight: ['400', '600'],
    display: 'swap'
});

async function OrderPage() {
    const session = await auth();
    const userName = session?.user?.name;
    const userEmail = session?.user?.email;

    if (!session?.user?.id) {
        return (
            <div
                className="flex flex-col min-h-screen"
            >
                <div
                    className="mb-2"
                >
                    <NavBar
                        NavbarBrandPath={'/userLogin/dashboard'}
                        userName={userName}
                        userEmail={userEmail}
                    />
                </div>
                <div
                    className="flex flex-grow flex-row px-2 relative"
                >
                    <SidebarToggle
                        SidebarLogoPath={'/userLogin/dashboard'}
                        SidebarItemDashboard={'/userLogin/dashboard'}
                        SidebarItemMenu={'/userLogin/menu'}
                        SidebarItemOrders={'/userLogin/orders'}
                        SidebarItemCart={'/userLogin/orderCart'}
                        SidebarItemCheckout={'/userLogin/checkout'}
                    />
                    <div
                        className="hidden md:flex md:w-60 md:mr-2 bg-white z-20"
                    >
                        <SideBar
                            SidebarLogoPath={'/userLogin/dashboard'}
                            SidebarItemDashboard={'/userLogin/dashboard'}
                            SidebarItemMenu={'/userLogin/menu'}
                            SidebarItemOrders={'/userLogin/orders'}
                            SidebarItemCart={'/userLogin/orderCart'}
                            SidebarItemCheckout={'/userLogin/checkout'}
                        />
                    </div>
                    <div
                        className="flex-grow p-4 text-center"
                    >
                        <h1
                            className={`text-4xl font-semibold ${playfair.className}`}
                        >
                            Order History
                        </h1>
                        <p
                            className="mt-4 text-xl text-gray-500"
                        >
                            You need to be logged in to view your orders.
                        </p>
                        <Link
                            href={'/userLogin/menu'}
                            className="mt-4 inline-block bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Browse Menu
                        </Link>
                    </div>
                </div>
                <div
                    className="mt-2"
                >
                    <FooterComponent />
                </div>
            </div>
        );
    }

    const orders = await sql`
        SELECT
            o.order_id,
            o.total_price,
            o.delivery_address,
            o.name,
            o.phone,
            o.status,
            o.created_at,
            o.payment_id,
            json_agg(
                json_build_object(
                    'item_id', oi.item_id,
                    'item_name', fi.item_name,
                    'quantity', oi.quantity,
                    'price', oi.price
                )
            ) as items
        FROM orders o
        LEFT JOIN order_items oi ON o.order_id = oi.order_id
        LEFT JOIN food_items fi ON oi.item_id = fi.item_id
        WHERE o.user_id = ${session.user.id}
        GROUP BY o.order_id, o.total_price, o.delivery_address, o.name, o.phone, o.status, o.created_at, o.payment_id
        ORDER BY o.created_at DESC
    `;

    return (
        <div
            className="flex flex-col min-h-screen"
        >
            <div
                className="mb-2"
            >
                <NavBar
                    userName={userName}
                    userEmail={userEmail}
                />
            </div>
            <div
                className="flex flex-grow flex-row px-2 relative"
            >
                <SidebarToggle />
                <div
                    className="hidden md:flex md:w-60 md:mr-2 bg-white z-20"
                >
                    <SideBar />
                </div>
                <div
                    className="flex-grow relative overflow-y-auto scrollbar-hide"
                    style={{
                        height: "calc(100vh - 180px)",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <h1
                        className={`text-4xl font-semibold text-center ${playfair.className}`}
                    >
                        Order History
                    </h1>
                    <hr
                        className="my-4"
                    />
                    {orders.length === 0 ? (
                        <div
                            className="text-center mt-10"
                        >
                            <p
                                className="text-xl text-gray-500"
                            >
                                You have no orders yet.
                            </p>
                            <Link
                                href={'/userLogin/menu'}
                                className="mt-4 inline-block bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                            >
                                Browse Menu
                            </Link>
                        </div>
                    ) : (
                        <div
                            className="max-w-4xl mx-auto"
                        >
                            <div
                                className="space-y-6"
                            >
                                {orders.map((order) => (
                                    <div
                                        key={order.order_id}
                                        className="bg-gray-100 p-4 rounded-lg shadow-md"
                                    >
                                        <div
                                            className="flex justify-between items-center"
                                        >
                                            <h2
                                                className={`text-xl font-semibold ${playfair.className}`}
                                            >
                                                Order #{order.order_id}
                                            </h2>
                                            <span
                                                className={`text-sm font-medium px-2 py-1 rounded ${
                                                    order.status === "pending"
                                                        ? "bg-yellow-200 text-yellow-800"
                                                        : order.status === "completed"
                                                        ? "bg-green-200 text-green-800"
                                                        : "bg-red-200 text-red-800" 
                                                    }`}
                                                >
                                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                </span>
                                        </div>
                                        <p
                                            className="text-sm text-gray-500"
                                        >
                                            Placed on: {new Date(order.created_at).toLocaleString()}
                                        </p>
                                        <p
                                            className="text-sm text-gray-500"
                                        >
                                            Transaction ID: {order.payment_id || "N/A"}
                                        </p>
                                        <div
                                            className="mt-2"
                                        >
                                            <h3
                                                className="font-medium"
                                            >
                                                Delivery Information
                                            </h3>
                                            <p
                                                className="text-sm"
                                            >
                                                Name: {order.name}
                                                <br />
                                                Phone: {order.phone}
                                                <br />
                                                Address: {order.delivery_address}
                                            </p>
                                        </div>
                                        <div
                                            className="mt-2"
                                        >
                                            <h3
                                                className="font-medium"
                                            >
                                                Items
                                            </h3>
                                            <div
                                                className="divide-y divide-gray-200"
                                            >
                                                {order.items.map((item, index) => (
                                                    <div
                                                        key={index}
                                                        className="py-2 flex justify-between"
                                                    >
                                                        <div>
                                                            <p
                                                                className="font-medium"
                                                            >
                                                                {item.item_ame} x {item.quantity}
                                                            </p>
                                                        </div>
                                                        <p
                                                            className="font-bold"
                                                        >
                                                            {rupeeSymbol}{(item.price * item.quantity).toFixed(2)}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div
                                            className="mt-2 border-t border-gray-200 pt-2"
                                        >
                                            <div
                                                className="flex justify-beween"
                                            >
                                                <span
                                                    className="font-medium"
                                                >
                                                    Total:
                                                </span>
                                                <span
                                                    className="font-bold"
                                                >
                                                    {rupeeSymbol}{order.total_price.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div
                className="mt-2"
            >
                <FooterComponent />
            </div>
        </div>
    );
}

export default OrderPage;