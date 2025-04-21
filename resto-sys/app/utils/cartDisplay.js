"use client";

import { getCartItems } from "../actions/cart";
import { useEffect, useState } from "react";
import Link from "next/link";
import { rupeeSymbol } from "../data/menuData/menu";

function CartDisplay() {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCart = async () => {
            setIsLoading(true);
            try {
                const items = await getCartItems();
                setCartItems(items);
            } finally {
                setIsLoading(false);
            }
        };
        fetchCart();
    }, []);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.added_price * item.quantity, 0);

    if (isLoading)
        return <div>Loading cart...</div>;

    return (
        <div
            className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200"
        >
            <h3
                className="font-bold mb-2"
            >
                Your Cart ({totalItems})
            </h3>
            {cartItems.length > 0 ? (
                <>
                    <ul
                        className="mb-2 max-h-60 overflow-y-auto"
                    >
                        {cartItems.map((item) => (
                            <li
                                key={item.cart_item_id}
                                className="py-1 border-b border-gray-100"
                            >
                                {item.item_name} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <div
                        className="font-bold"
                    >
                        Total: {rupeeSymbol}{totalPrice.toFixed(2)}
                    </div>
                    <Link
                        href={'/userLogin/checkout'}
                        className="mt-2 block text-center bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Checkout
                    </Link>
                </>
            ) : (
                <p>
                    Your cart is empty.
                </p>
            )}
        </div>
    )
}

export default CartDisplay;