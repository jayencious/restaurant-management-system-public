"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import SideBar from "./sidebar";

function SidebarToggle() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Button
                size="xs"
                color='dark'
                className={`fixed z-30 p-2 shadow-md border border-gray-300 bg-gray-200 rounded-full transition-all duration-300
                        ${showSidebar
                        ? 'top-1/2 left-[15rem] -translate-y-1/2 md:left-[14.5rem]'
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
            <div
                className={`bg-white z-20 transition-all duration-300 ease-in-out ${showSidebar ? "absolute top-0 left-0 w-48 h-full md:static md:flex"
                        : "hidden md:flex"
                    } md:w-60 md:mr-2`} // "flex items-center mr-2"
            >
                <SideBar />
            </div>
        </>
    );
}

export default SidebarToggle;