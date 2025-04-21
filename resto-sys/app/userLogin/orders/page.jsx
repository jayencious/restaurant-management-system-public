import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import SidebarToggle from "../../utils/sidebarToggle";

async function OrderPage() {
    return (
        <div
            className="flex flex-col min-h-screen"
        >
            <div
                className="mb-2"
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
                    className="flex-grow relative overflow-y-auto scrollbar-hide"
                    style={{
                        height: "calc(100vh - 180px)",
                        padding: "10px",
                        margin: "10px",
                    }}
                ></div>
            </div>
            <div
                className="mt-2"
            >
                <FooterComponent />
            </div>
        </div>
    );
}

export default OrderPage;