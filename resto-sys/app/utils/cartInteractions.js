"use client";

import { useState } from "react";
import CartItem from "./cartItem";

function CartInteraction({ initialCartItems }) {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [isMutating, setIsMutating] = useState(false);
    
    const updateCart = async () => {
        const res = await fetch('/api/cart');
        const data = await res?.json();
        setCartItems(data);
    };

    const handleUpdate = async (itemId, newQuantity) => {
        setIsMutating(true);

        try {
            await fetch('/api/cart', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemId, newQuantity })
            });
            await updateCart();
        } finally {
            setIsMutating(false);
        }
    };

    const handleRemove = async (itemId) => {
        setIsMutating(true);

        try {
            await fetch(`/api/cart?itemId=${itemId}`, {
                method: 'DELETE' 
            });
            await updateCart();
        } finally {
            setIsMutating(false);
        }
    };

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
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.cart_item_id}
                            item={item}
                            onUpdateQuantity={(qty) => handleUpdate(item.cart_item_id, qty)}
                            onRemove={() => handleRemove(item.cart_item_id)}
                            disabled={isMutating}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default CartInteraction;