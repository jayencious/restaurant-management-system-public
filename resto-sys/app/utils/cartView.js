'use client';

import { useState, useEffect } from "react";
import CartItem from "./cartItem";

function CartView() {
    const [cartItems, setCartItems] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        const loadCart = async () => {
            try {
                const res = await fetch('/api/cart');
                if (!res?.ok) throw new Error('Failed to load cart');
                const data = await res.json();
                setCartItems(data);
                setStatus('success');
            } catch (error) {
                console.error('Cart load error:', error);
                setStatus('error');
            }
        };
        loadCart();
    }, []);

    if (status === 'loading') {
        return <div className="text-center py-8">Loading cart...</div>;
    }

    if (status === 'error') {
        return <div className="text-center py-8">Failed to load cart. Please try again later.</div>;
    }

    return (
        <>
            {cartItems.length === 0 ? (
                <div
                    className="text-center py-8"
                >
                    <p
                        className="text-lg mb-4"
                    >
                        Your cart is empty.
                    </p>
                </div>
            ) : (
                <div
                    className="divide-y divide-gray-200"
                >
                    {cartItems.map(item => (
                        <CartItem
                            key={item.cart_item_id}
                            item={item}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default CartView;