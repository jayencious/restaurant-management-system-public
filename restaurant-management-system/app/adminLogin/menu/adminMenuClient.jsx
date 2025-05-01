"use client";

import NavBar from "../../utils/navbar";
import AdminSideBar from "../../utils/adminSidebar";
import AdminSidebarToggle from "../../utils/adminSidebarToggle";
import FooterComponent from "../../utils/footer";
import { Playfair } from "next/font/google";
import { rupeeSymbol } from "../../data/menuData/constant";
import { useState, useTransition } from "react";
import Link from "next/link";

const playfair = Playfair({
    subsets: ['latin'],
    weight: ['400', '600'],
    display: 'swap'
});

function AdminMenuClient({
    vegStarters,
    nonVegStarters,
    vegPlatters,
    nonVegPlatters,
    vegMainCourse,
    nonVegMainCourse,
    vegBiryani,
    nonVegBiryani,
    vegRice,
    nonVegRice,
    rotisAndBreads,
    chaats,
    salads,
    raitas,
    sweetDishes,
    beverages,
    userName,
    userEmail,
}) {
    const [isPending, startTransition] = useTransition();
    const [selectedItem, setSelectedItem] = useState(null);
    const [formData, setFormData] = useState({
        item_name: "",
        description: "",
        price: "",
        category_id: 1,
    });

    const categories = [
        { id: 1, name: "Veg Starters" },
        { id: 2, name: "Non Veg Starters" },
        { id: 3, name: "Veg Platters" },
        { id: 4, name: "Non Veg Platters" },
        { id: 5, name: "Veg Main Course" },
        { id: 6, name: "Non Veg Main Course" },
        { id: 7, name: "Veg Biryani" },
        { id: 8, name: "Non Veg Biryani" },
        { id: 9, name: "Veg Rice" },
        { id: 10, name: "Non Veg Rice" },
        { id: 11, name: "Rotis And Breads" },
        { id: 12, name: "Chaats" },
        { id: 13, name: "Salads" },
        { id: 14, name: "Raitas" },
        { id: 15, name: "Sweet Dishes" },
        { id: 16, name: "Beverages" },
    ];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        startTransition(async () => {
            const res = await fetch('/api/menu/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res?.ok) {
                setFormData({ item_name: "", description: "", price: "", category_id: 1 });
                window.location.reload();
            }
        });
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setFormData({
            item_name: item.item_name,
            description: item.description,
            price: item.price,
            category_id: item.category_id,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        startTransition(async () => {
            const res = await fetch('/api/menu/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, item_id: selectedItem.item_id }),
            });
            if (res?.ok) {
                setSelectedItem(null);
                setFormData({ item_name: "", description: "", price: "", category_id: 1 });
                window.location.reload();
            }
        });
    };

    const handleDelete = async (itemId) => {
        startTransition(async () => {
            const res = await fetch('/api/menu/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_id: itemId }),
            });
            if (res?.ok) {
                window.location.reload();
            }
        });
    };

    const renderItems = (items, categoryId) => (
        <div>
            <h2
                className={`text-4xl font-semibold text-center ${playfair.className}`}
                id={categories.find(c => c.id === categoryId).name.toLowerCase().replace(" ", "_")}
            >
                {categories.find(c => c.id === categoryId).name}
            </h2>
            <hr />
            <div
                className="flex flex-wrap"
            >
                {items.length > 0 ? (
                    items.map((item) => (
                        <div
                            className="w-1/4 p-2"
                            key={item.item_id}
                        >
                            <div
                                className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                            >
                                <div
                                    className="flex flex-col p-4 justify-between w-full"
                                >
                                    <h3
                                        className="text-lg font-semibold"
                                    >
                                        {item.item_name}
                                    </h3>
                                    <p
                                        className="text-sm text-gray-500"
                                    >
                                        {item.description}
                                    </p>
                                    <p
                                        className="text-base font-bold mt-2"
                                    >
                                        {rupeeSymbol}{item.price}
                                    </p>
                                    <div
                                        className="flex space-x-2 mt-2"
                                    >
                                        <button
                                            className="bg-blue-500 text-white px-2 py-1 rounded"
                                            onClick={() => handleEdit(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-2 py-1 rounded"
                                            onClick={() => handleDelete(item.item_id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No items available.</p>
                )}
            </div>
            <hr />
            <hr />
            <br />
        </div>
    );

    return (
        <div
            className="flex flex-col min-h-screen relative"
        >
            <Link
                href="https://github.com/jayencious"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 z-50 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
                jayencious
            </Link>
            <div
                className="mb-2"
            >
                <NavBar
                    userName={userName}
                    userEmail={userEmail}
                />
            </div>
            <div
                className="flex flex-grow flex-row px-2 relative"
            >
                <AdminSidebarToggle />
                <div
                    className="hidden md:flex md:w-60 md:mr-2 bg-white z-20"
                >
                    <AdminSideBar />
                </div>
                <div
                    className="flex-grow relative overflow-y-auto scrollbar-hide"
                    style={{
                        height: "calc(100vh - 180px)",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    {/* Add Item Form */}
                    <form
                        onSubmit={selectedItem ? handleUpdate : handleSubmit}
                        className="mb-4 p-4 bg-gray-900 rounded-lg"
                    >
                        <h3
                            className={`text-2xl font-semibold ${playfair.className}`}
                        >
                            {selectedItem ? 'Edit Item' : 'Add New Item'}
                        </h3>
                        <div
                            className="grid grid-cols-2 gap-4 mt-2"
                        >
                            <input
                                type="text"
                                name="item_name"
                                value={formData.item_name}
                                onChange={handleInputChange}
                                placeholder="Item Name"
                                className="p-2 border rounded"
                                required
                            />
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Description"
                                className="p-2 border rounded col-span-2"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                placeholder="Price"
                                className="p-2 border rounded"
                                step={'0.01'}
                                required
                            />
                            <select
                                name="category_id"
                                value={formData.category_id}
                                onChange={handleInputChange}
                                className="p-2 border rounded"
                                required
                            >
                                {categories.map((cat) => (
                                    <option
                                        key={cat.id}
                                        value={cat.id}
                                        className="text-black"
                                    >
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 bg-gree-500 text-white px-4 py-2 rounded"
                            disabled={isPending}
                        >
                            {isPending ? 'Saving...' : selectedItem ? 'Update Item' : 'Add Item'}
                        </button>
                        {selectedItem && (
                            <button
                                type="button"
                                className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                                onClick={() => setSelectedItem(null)}
                            >
                                Cancel
                            </button>
                        )}
                    </form>
                    {/* Menu Items */}
                    {renderItems(vegStarters, 1)}
                    {renderItems(nonVegStarters, 2)}
                    {renderItems(vegPlatters, 3)}
                    {renderItems(nonVegPlatters, 4)}
                    {renderItems(vegMainCourse, 5)}
                    {renderItems(nonVegMainCourse, 6)}
                    {renderItems(vegBiryani, 7)}
                    {renderItems(nonVegBiryani, 8)}
                    {renderItems(vegRice, 9)}
                    {renderItems(nonVegRice, 10)}
                    {renderItems(rotisAndBreads, 11)}
                    {renderItems(chaats, 12)}
                    {renderItems(salads, 13)}
                    {renderItems(raitas, 14)}
                    {renderItems(sweetDishes, 15)}
                    {renderItems(beverages, 16)}
                </div>
            </div>
            <div
                className="mt-2"
            >
                <FooterComponent />
            </div>
        </div>
    );
}

export default AdminMenuClient