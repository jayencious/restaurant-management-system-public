"use client";

import { addToCart, updateCartItemQuantity } from "../actions/cart";
import { useState, useEffect } from "react";

function CartButton({
    itemId,
    price,
    initialQuantity = 0,
    cartItemId,
}) {
    const numericItemId = Number(itemId);
    const numericPrice = Number(price);

    const [quantity, setQuantity] = useState(initialQuantity);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    if (isNaN(numericItemId))
        return (
            <button
                disabled
                className="bg-gray-400 cursor-not-allowed py-2 px-4 rounded"
            >
                Invalid Item
            </button>
        );

    const handleAddToCart = async () => {
        console.log('Adding to cart:', { numericItemId, numericPrice });
        if (isNaN(numericItemId) || isNaN(numericPrice)) {
            console.error('Invalid item data:', { itemId, price });
            alert('Invalid item information');
            return;
        }

        setIsLoading(true);
        try {
            await addToCart({
                itemId: numericItemId,
                price: numericPrice
            });
            setQuantity(prev => prev + 1);
        } catch (err) {
            console.error('Add to cart failed:', err);
            alert(err.message || 'Failed to add item to cart');
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuantityChange = async (newQuantity) => {
        if (!cartItemId || isNaN(Number(cartItemId))) {
            console.error('Invalid cart item ID:', cartItemId);
            return;
        }

        const numericQuantity = Number(newQuantity);
        if (isNaN(numericQuantity)) {
            console.error('Invalid quantity:', newQuantity);
            return;
        }

        setIsLoading(true);
        try {
            await updateCartItemQuantity({
                cartItemId: Number(cartItemId),
                newQuantity: numericQuantity
            });
            setQuantity(numericQuantity);
        } catch (err) {
            console.error('Update quantity failed:', err);
            alert(err.message || 'Failed to update quantity');
        } finally {
            setIsLoading(false);
        }
    };

    if (quantity > 0) {
        return (
            <div
                className="flex items-center gap-2"
            >
                <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={isLoading}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
                >
                    -
                </button>
                <span>
                    {quantity}
                </span>
                <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={isLoading}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded"
                >
                    +
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
        >
            {isLoading ? 'Adding...' : 'Add to Cart'}
        </button>
    );
}

export default CartButton;