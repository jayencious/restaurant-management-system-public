"use client";

import { useState, useEffect } from "react";
import createOrder from "../actions/order";

function DeliveryForm({
    userName,
    userEmail,
    totalPrice,
    cartItems,
}) {
    const [formData, setFormData] = useState({
        name: userName || "",
        phone: "",
        address: "",
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        const { name, phone, address } = formData;
        const trimmedName = name.trim();
        const trimmedAddress = address.trim();
        const sanitizedPhone = phone.replace(/\D/g, "");
        const isPhoneValid = sanitizedPhone.length === 10;

        const newErrors = {
            name: trimmedName ? "" : "Name is required",
            phone: isPhoneValid ? "" : "Phone must be exactly 10 digits",
            address: trimmedAddress ? "" : "Address is required",
        };
        setErrors(newErrors);

        const isValid = trimmedName !== "" && isPhoneValid && trimmedAddress !== "";
        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const sanitizedValue = name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
        setFormData((prev) => {
            const newFormData = { ...prev, [name]: sanitizedValue };
            return newFormData;
        });
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid) {
            return console.log('Form submission blocked: Form is invalid');
        }
        
        setIsLoading(true);
        
        try { // Initializeing the Razorpay SDK 
            const scriptLoaded = await loadRazorpayScript();
            if (!scriptLoaded) {
                throw new Error('Failed to load Razorpay SDK');
            }

            // Creating Razorpay Order
            const res = await fetch('/api/razorpay/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: totalPrice * 100 }), // Razorpay excepts the amount to be in paise
            });
            
            const data = await res.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            // Razorpay options for checkout

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: data.order.amount,
                currency: "INR",
                name: "Taste Of The World",
                description: "Order Payment",
                order_id: data.order.id,
                handler: async function (response) {
                    try {
                        const orderResult = await createOrder({
                            formData,
                            cartItems,
                            paymentId: response.razorpay_payment_id,
                        });
                        if (orderResult.success) {
                            window.location.href = `/userLogin/order-confirmation?orderId=${orderResult.orderId}`;
                        } else {
                            throw new Error('Failed to create order');
                        }
                    } catch (err) {
                        console.error('Order creation failed:', err);
                        alert('Failed to create order: ' + err.message);
                    }
                },
                prefill: {
                    name: formData.name,
                    email: userEmail,
                    contact: formData.phone,
                },
                theme: {
                    color: '#F97316'
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response) {
                alert('Payment failed: ' + response.error.description);
            });
            paymentObject.open();
            } catch (err) {
                console.error('Payment initiation failed:', err);
                alert('Failed to initiate payment' + err.message);
            } finally {
                setIsLoading(false);
            }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <div>
                <label
                    htmlFor="name"
                    className="block text-lg font-medium text-white"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full text-black rounded-md bg-white border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${
                        errors.name ? 'border-red-500' : ""
                    }`}
                    required
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
                <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-white"
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md text-black bg-white border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${
                        errors.phone ? 'border-red-500' : ""
                    }`}
                    required
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>
            <div>
                <label
                    htmlFor="address"
                    className="block text-lg font-medium text-white"
                >
                    Delivery Address
                </label>
                <textarea
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md text-black bg-white border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm ${
                        errors.address ? 'border-red-500' : ""
                    }`}
                    rows={4}
                    required
                ></textarea>
                {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
            </div>
            <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`w-full bg-orange-800 text-white font-bold py-3 px-4 rounded ${
                    isFormValid && !isLoading ? 'hover:bg-orange-500' : 'opacity-50 cursor-not-allowed'
                    }`}
                >
                    {isLoading ? 'Processing...' : 'Place Order'}
                </button>
        </form>
    );
}

export default DeliveryForm;