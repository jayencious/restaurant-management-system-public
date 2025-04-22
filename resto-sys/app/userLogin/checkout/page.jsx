import { auth } from "../../auth";
import { getCartItems } from "../../actions/cart";
import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import SidebarToggle from "../../utils/sidebarToggle";
import { rupeeSymbol } from "../../data/menuData/menu";
import { Playfair } from "next/font/google";
import DeliveryForm from '../../utils/deliveryForm';
import Link from "next/link";

const playfair = Playfair({
    subsets: ['latin'],
    weight: ['400', '600'],
    display: 'swap'
});

async function CheckoutPage() {
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
                        userName={userName}
                        userEmail={userEmail}
                    />
                </div>
                <div
                    className="flex flex-grow flex-row px-2 relative"
                >
                    <SidebarToggle />
                    <div
                        className="hidden md:flex md:-60 md:mr-2 bg-white z-20"
                    >
                        <SideBar />
                    </div>
                    <div
                        className="flex-grow p-4 text-center"
                    >
                        <h1
                            className={`text-4xl font-semibold ${playfair.className}`}
                        >
                            Checkout
                        </h1>
                        <p
                            className="mt-4 text-xl text-gray-500"
                        >
                            You need to be logged in to checkout.
                        </p>
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

    const cartItems = await getCartItems();
    const totalPrice = cartItems.reduce((sum, item) => sum + item.added_price * item.quantity, 0);

    // const handleFormSubmit = async (formData) => {
    //     "use client";

    //     try {
    //         const res = await fetch('/api/phonepe/create', {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ formData }),
    //         });
    //         const data = await res.json();

    //         if (data.error) {
    //             throw new Error(data.error);
    //         }

    //         window.location.href = data.redirectUrl;
    //     } catch (err) {
    //         console.error('Payment initiation failed:', err);
    //         throw err;
    //     }
    // };

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
                        Checkout
                    </h1>
                    <hr
                        className="my-4"
                    />
                    {cartItems.length === 0 ? (
                        <div
                            className="text-center mt-10"
                        >
                            <p
                                className="text-xl text-gray-500"
                            >
                                Your cart is empty.
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
                                className="grid md:grid-cols-2 gap-8"
                            >
                                <div>
                                    <h2
                                        className={`text-2xl font-semibold mb-4 ${playfair.className}`}
                                    >
                                        Order Summary
                                    </h2>
                                    <div
                                        className="divide-y divide-gray-200"
                                    >
                                        {cartItems.map((item) => (
                                            <div
                                                key={item.cart_item_id}
                                                className="py-3 flex justify-between"
                                            >
                                                <div>
                                                    <p
                                                        className="font-medium"
                                                    >
                                                        {item.item_name} x {item.quantity}
                                                    </p>
                                                    <p
                                                        className="text-sm text-gray-500"
                                                    >
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <p
                                                    className="font-bold"
                                                >
                                                    {rupeeSymbol}{(item.added_price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="mt-4 border-t border-gray-200 pt-4"
                                    >
                                        <div
                                            className="flex justify-betweeen"
                                        >
                                            <span
                                                className={`text-3xl font-bold ${playfair.className}`}
                                            >
                                                Total:
                                            </span>
                                            <span
                                                className={`text-3xl font-bold ${playfair.className}`}
                                            >
                                                {rupeeSymbol}{totalPrice.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2
                                        className={`text-2xl font-semibold mb-4 ${playfair.className}`}
                                    >
                                        Delivery Information
                                    </h2>
                                    <div
                                        className="bg-gray-700 p-4 rounded-lg"
                                    >
                                        <DeliveryForm
                                            userName={userName}
                                            totalPrice={totalPrice}
                                        />
                                    </div>
                                </div>
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

export default CheckoutPage;