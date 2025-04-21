import { auth } from "../../auth";
import { getCartItems } from "../../actions/cart";
import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import SidebarToggle from "../../utils/sidebarToggle";
import { rupeeSymbol } from "../../data/menuData/menu";

async function CheckoutPage() {
    const session = await auth();
    if (!session?.user?.id)
        return (
            <div
                className="max-w-4xl mx-auto p-4"
            >
                <h1
                    className="text-2xl font-bold mb-4"
                >
                    Checkout
                </h1>
                <p>
                    You need to be logged in to checkout.
                </p>
            </div>
        );

    const cartItems = await getCartItems();
    const totalPrice = cartItems.reduce((sum, item) => sum + item.added_price * item.quantity, 0);

    return (
        <div
            className="max-w-4xl mx-auto p-4"
        >
            <h1
                className="text-2xl font-bold mb-6"
            >
                Checkout
            </h1>
            <div
                className="grid md:grid-cols-2 gap-8"
            >
                <div>
                    <h2
                        className="text-xl font-semibold mb-4"
                    >
                        Order Summary
                    </h2>
                    <div
                        className="divide-y divide-ray-200"
                    >
                        {cartItems.map((item) => (
                            <div
                                key={item.cart_item_id}
                                className="py-3 flex justify-between"
                            >
                                <div>
                                    <p>
                                        {item.item_name} x {item.quantity}
                                    </p>
                                </div>
                                <p>
                                    {rupeeSymbol}{(item.added_price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div
                        className="mt-4 border-t border-gray-200 pt-4"
                    >
                        <div
                            className="flex justify-between"
                        >
                            <span
                                className="text-3xl font-bold"
                            >
                                Total:
                            </span>
                            <span
                                className="text-3xl font-bold"
                            >
                                {rupeeSymbol}{totalPrice.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2
                        className="text-xl font-semibold mb-4"
                    >
                        Delivery Information
                    </h2>
                    {/* Delivery Form Add karna hai idhar */}
                    <div
                        className="bg-gray-100 p-4 rounded-lg"
                    >
                        <p>
                            Delivery Information Here:
                        </p>
                    </div>
                    <button
                        className="mt-6 w-full bg-orange-800 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;