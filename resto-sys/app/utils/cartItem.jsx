"use client";

import { useState } from "react";
import { rupeeSymbol } from "../data/menuData/menu";

function CartItem({
    item,
    onUpdate,
    onRemove,
    disabled
}) {
    const [quantity, setQuantity] = useState(item.quantity);

    const updateQuantity = async (newQuantity) => {
        try {
            const res = await fetch('/api/cart', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    itemId: item.cart_item_id,
                    newQuantity
                })
            });
            if (!res?.ok) throw new Error('Failed to update quantity');
        } catch (err) {
            console.error('Update error:', err);
            setQuantity(item.quantity);
        }
    };

    return (
        <div
            className="py-4 flex justify-between items-center"
        >
            <div>
                <h3
                    className="font-semibold"
                >
                    {item.item_name}
                </h3>
                <p
                    className="text-gray-600 text-sm"
                >
                    {rupeeSymbol}{item.added_price.toFixed(2)} each
                </p>
            </div>
                <div
                    className="flex items-center gap-4"
                >
                    <div
                        className="flex items-center gap-2"
                    >
                        <button
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                            disabled={quantity <= 1}
                            onClick={() => {
                                const newQty = quantity - 1;
                                setQuantity(newQty);
                                updateQuantity(newQty);
                            }}
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>
                        <span
                            className="w-8 text-center"
                        >
                            {quantity}
                        </span>
                        <button
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded disable:opacity-50"
                            onClick={() => {
                                const newQty = quantity + 1;
                                setQuantity(newQty);
                                updateQuantity(newQty);
                            }}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>
                    <p
                        className="w-24 text-right font-semibold"
                    >
                        {rupeeSymbol}{(item.added_price * quantity).toFixed(2)}
                    </p>
            </div>
        </div>
    );
}

export default CartItem;