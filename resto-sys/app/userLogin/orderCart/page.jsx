import NavBar from "../../utils/navbar";
import SidebarToggle from "../../utils/sidebarToggle";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import { Playfair } from "next/font/google";
import { rupeeSymbol } from "../../data/menuData/menu";
import { Suspense } from "react";
import { auth } from "../../auth";
import { getCartItems, removeFromCart } from "../../actions/cart";
import CartButton from "../../utils/cartButton";
import Link from "next/link";

const playfair = Playfair({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
});

async function CartPage() {
    const session = await auth();
    const userId = session?.user?.id;
    const userName = session?.user?.name;
    const userEmail = session?.user?.email;

    const cartItems = userId ? await getCartItems() : [];

    const totalItems = cartItems.length;
    const totalPrice = cartItems.reduce((sum, item) => sum + item.added_price * item.quantity, 0);

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
                    className="flex-grow relative overflow-y-auto scrollbar-hide p-4"
                    style={{
                        height: "calc(100vh - 180px)",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <Suspense
                        fallback={<p>Loading cart...</p>}
                    >
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                        >
                            Your Cart ({totalItems})
                        </h2>
                        <hr />
                        {cartItems.length === 0 ? (
                            <div
                                className="text-center mt-10"
                            >
                                <p
                                    className="text-xl text-gray-500"
                                >
                                    Your cart is currently empty.
                                </p>
                                <Link
                                    href={'/userLogin/menu'}
                                    className="mt-4 inline-block bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                                >
                                    Browse Menu
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <div
                                    className="flex flex-col gap-4 mt-4"
                                >
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.cart_item_id}
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden bg-gray-900"
                                        >
                                            <div
                                                className="flex flex-col p-4 flex-grow"
                                            >
                                                <h3
                                                    className="text-lg font-semibold text-yellow-400"
                                                >
                                                    {item.item_name}
                                                </h3>
                                                <p
                                                    className="text-sm text-gray-500"
                                                >
                                                    {item.description}
                                                </p>
                                                <p
                                                    className="text-base font-bold mt-2"
                                                >
                                                    {rupeeSymbol}{item.added_price} x {item.quantity} = {rupeeSymbol}{(item.added_price * item.quantity).toFixed(2)}
                                                </p>
                                                <div
                                                    className="flex items-center gap-4 mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.added_price)}
                                                        initialQuantity={item.quantity}
                                                        cartItemId={item.cart_item_id}
                                                    />
                                                    <form
                                                        action={async () => {
                                                            'use server';
                                                            try {
                                                                await removeFromCart({ cartItemId: item.cart_item_id });
                                                            } catch (err) {
                                                                console.error('Remove item failed:', err);
                                                                throw err;
                                                            }
                                                        }}
                                                    >
                                                        <button
                                                            type="submit"
                                                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                                        >
                                                            Remove from Cart
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className="mt-6 text-right"
                                >
                                    <h3
                                        className={`text-2xl font-semibold`}
                                    >
                                        Total: {rupeeSymbol}{totalPrice.toFixed(2)}
                                    </h3>
                                    <Link
                                        href={'/userLogin/checkout'}
                                        className="mt-4 inline-block bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Place Your Order
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Suspense>
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

export default CartPage;