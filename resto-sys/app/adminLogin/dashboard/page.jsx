import NavBar from "../../utils/navbar";
import AdminSideBar from "../../utils/adminSidebar";
import AdminSidebarToggle from "../../utils/adminSidebarToggle";
import FooterComponent from "../../utils/footer";
import CardComponent from "../../utils/card";
import { auth } from "../../auth";

async function AdminDashboard() {
    const session = await auth();

    const userName = session?.user?.name;
    const userEmail = session?.user?.email;

    return (
        <div
            className="flex flex-col min-h-screen"
        >
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
                    className="flex-1 relative rounded-xl p-4 mt-4 md:mt-0"
                    style={{
                        backgroundImage: "url('/home_bg.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: "10px",
                    }}
                >
                    <div
                        className="flex flex-wrap justify-center gap-6"
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
                                buttonPath={'/adminLogin/menu'}
                            />
                        </div>
                        <div
                            className="w-[300px] h-[400px] flex justify-center items-center"
                        >
                            <CardComponent
                                imgSrc={'/my_orders.png'}
                                imgAlt={'View Orders'}
                                imgWidth={350}
                                imgHeight={450}
                                cardText={'Orders'}
                                buttonPath={'/adminLogin/orders'}
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
    );
}

export default AdminDashboard;