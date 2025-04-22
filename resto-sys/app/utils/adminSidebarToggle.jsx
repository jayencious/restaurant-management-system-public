"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import AdminSideBar from "./adminSidebar";

function AdminSidebarToggle() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div
            className="md:hidden"
        >
            <Button
                size="xs"
                color='dark'
                className={`fixed z-30 p-2 shadow-md border border-gray-300 bg-gray-200 rounded-full transition-all duration-300
                    ${showSidebar
                        ? 'top-1/2 left-[15rem] -translate-y-1/2'
                        : 'top-1/2 left-0 -translate-y-1/2 rounded-r-full'}
                    `}
                onClick={() => setShowSidebar(!showSidebar)}
            >
                {showSidebar ? (
                    <HiChevronLeft
                        className="h-5 w-5 text-gray-100"
                    />
                ) : (
                    <HiChevronRight
                        className="h-5 w-5 text-gray-100"
                    />
                )}
            </Button>
            {showSidebar && (
                <div
                    className="fixed top-0 left-0 w-60 h-full bg-white shadow-lg z-20"
                >
                    <AdminSideBar />
                </div>
            )}
        </div>
    );
}

export default AdminSidebarToggle;