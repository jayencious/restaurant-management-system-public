"use client";

import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import CardComponent from "../../utils/card";
import { useState } from "react";
import SidebarToggle from "../../utils/sidebarToggle";

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
                <SidebarToggle />
                <div
                    className="hidden md:flex md:w-60 md:mr-2 bg-white z-20"
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