"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const CartView = dynamic(() => import('./cartView'), { ssr: false });

function CardContainer() {
    const [sessionChecked, setSessionChecked] = useState(false);

    useEffect(() => {
        setSessionChecked(true);
    }, []);

    if (!sessionChecked) {
        return <div
            className="text-center py-8"
        >
            Loading...
        </div>;
    }

    return <CartView />;
}

export default CardContainer;