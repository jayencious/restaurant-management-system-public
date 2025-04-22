"use client";

import { useState, useEffect } from "react";

function DeliveryForm({
    userName,
    totalPrice
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
        const isPhoneValid = phone.match(/^\d{10}$/);

        const newErrors = {
            name: trimmedName ? "" : "Name is required",
            phone: isPhoneValid ? "" : "Phone must be exactly 10 digits",
            address: trimmedAddress ? "" : "Address is required",
        };
        setErrors(newErrors);

        const isValid = trimmedName !== "" && isPhoneValid && trimmedAddress !== "";
        setIsFormValid(isValid);

        console.log("Form Data:", { name, phone, address });
        console.log("Validation:", { trimmedName, isPhoneValid, trimmedAddress, isValid });
        console.log("Errors:", newErrors);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            const newFormData = { ...prev, [name]: value };
            console.log('Updated Form Data:', newFormData);
            return newFormData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isFormValid) {
            setIsLoading(true);

            try {
                const res = await fetch('/api/phonepe/create', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ formData, totalPrice }),
                });

                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                window.location.href = data.url;
            } catch (err) {
                console.error('Payment initiation failed:', err);
                alert('Failed to initiate payment');
            } finally {
                setIsLoading(false);
            }
        } else {
            console.log("Form submission blocked: Form is invalid");
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