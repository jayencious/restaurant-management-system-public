"use client";

import { useState, useEffect } from "react";
import CartItem from "./cartItem";
import { useRouter } from "next/navigation";

function CartClientWrapper({ initialCartItems }) {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleUpdate = async (itemId, newQuantity) => {
        setLoading(true);
        try {
            const res = await fetch('/api/cart', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ itemId, newQuantity })
            });

            if (!res?.ok) throw new Error('Failed to update cart item');

            const updatedItem = await res.json();
            setCartItems(prev => prev.map(item =>
                item.cart_item_id === itemId ? updatedItem : item
            ));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleRemove = async (itemId) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/cart?itemId=${itemId}`, {
                method: 'DELETE'
            });
            if (!res?.ok) throw new Error('Failed to remove cart item');
            setCartItems(prev => prev.filter(item => item.cart_item_id !== itemId));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {error && (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded md-4"
                >
                    {error}
                </div>
            )}

            {cartItems.length === 0 ? (
                <div
                    className="text-center py-8"
                >
                    <p
                        className="text-lg mb-4"
                    >
                        Your cart is empty.
                    </p>
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                        disabled={loading}
                        onClick={() => router.push('/userLogin/menu')}
                    >
                        Browse Menu
                    </button>
                </div>
            ) : (
                <>
                    <div
                        className="divide-y divide-gray-200"
                    >
                        {cartItems.map((item) => {
                            <CartItem
                                key={item.cart_item_id}
                                item={item}
                                onRemove={() => handleRemove(item.cart_item_id)}
                                onUpdateQuantity={(newQty) => handleUpdate(item.cart_item_id, newQty)}
                                disabled={loading}
                            />
                        })}
                    </div>
                    <div
                        className="mt-6 border-t border-gray-200 pt-4"
                    >
                        <div
                            className="mt-6 flex justify-end"
                        >
                            <button
                                className="bg-green-600 text-white px-6 py-2 rounded"
                                disabled={loading}
                                onClick={() => router.push('/userLogin/checkout')}
                            >
                                {loading ? 'Processing...' : 'Proceed to Checkout'}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default CartClientWrapper;