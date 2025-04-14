"use client";

import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import CardComponent from "../../utils/card";
import { useState } from "react";
import { Button } from "flowbite-react";
import {
    HiChevronLeft,
    HiChevronRight
} from "react-icons/hi";

function UserDashboard() {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div
            className="flex flex-col min-h-screen"
        >
            <div className="mb-2"
            >
                <NavBar />
            </div>
            <div
                className="flex flex-grow flex-row px-2 relative"
            >
                <Button
                    size="xs"
                    color='dark'
                    className={`fixed z-30 p-2 shadow-md border border-gray-300 bg-gray-200 rounded-full transition-all duration-300
                        ${showSidebar
                            ? 'top-1/2 left-[15rem] -translate-y-1/2 md:left-[14.5rem]'
                            : 'top-1/2 left-0 -translate-y-1/2 rounded-r-full'}
                        `} //"md:hidden fixed top-1/2 -translate-y-1/2 left-0 z-30 rounded-r-full p-2 shadow-md border border-gray-600"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? (
                        <HiChevronLeft
                            className="h-5 w-5 text-gray-100"
                        />
                    ): (
                        <HiChevronRight
                            className="h-5 w-5 text-gray-100"
                        />
                    )}
                </Button>
                <div
                    className={`bg-white z-20 transition-all duration-300 ease-in-out ${
                        showSidebar ? "absolute top-0 left-0 w-48 h-full md:static md:flex"
                            : "hidden md:flex"
                    } md:w-60 md:mr-2`} //flex md:items-start md:mr-2 mb-4 md:mb-0
                >
                    <SideBar />
                </div>
                <div
                    className="flex-1 relative rounded-xl p-4 mt-4 md:mt-0"
                    style={{
                        backgroundImage: "url('/home_bg.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: "10px"
                    }}
                >
                    <div
                        className="flex flex-wrap justify-center gap-6" //flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6
                    >
                        <div
                            className="w-[300px] h-[400px] flex justify-center items-center"
                        >
                            <CardComponent
                                imgSrc={'/menu_card.png'}
                                imgAlt={'View Our Menu'}
                                imgWidth={350}
                                imgHeight={400}
                                cardText={'Menu'}
                                buttonPath={'/userLogin/menu'}
                            />
                        </div>
                        <div
                            className="w-[300px] h-[400px] flex justify-center items-center"
                        >
                            <CardComponent
                                imgSrc={'/my_orders.png'}
                                imgAlt={'View Oders'}
                                imgWidth={350}
                                imgHeight={450}
                                cardText={'Orders'}
                                buttonPath={'/userLogin/orders'}
                            />
                        </div>
                        <div
                            className="w-[300px] h-[400px] flex justify-center items-center"
                        >
                            <CardComponent
                                imgSrc={'/reservation.png'}
                                imgAlt={'Table Reservation'}
                                imgWidth={350}
                                imgHeight={400}
                                cardText={'Reserve Table'}
                                buttonPath={'/userLogin/reservation'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="mt-2"
            >
                <FooterComponent />
            </div>
        </div>
    )
}

export default UserDashboard;