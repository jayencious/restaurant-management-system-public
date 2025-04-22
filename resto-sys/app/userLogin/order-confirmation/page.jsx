import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import SidebarToggle from "../../utils/sidebarToggle";
import FooterComponent from "../../utils/footer";
import { Playfair } from "next/font/google";
import { auth } from "../../auth";
import Link from "next/link";

const playfair = Playfair({
    subsets: ["latin"],
    weight: ['400', '600'],
    display: 'swap'
});

async function OrderConfirmationPage() {
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
                >
                    <h1
                        className={`text-4xl font-semibold text-center ${playfair.className}`}
                    >
                        Order Confirmation
                    </h1>
                    <hr
                        className="my-4"
                    />
                    <div
                        className="text-center mt-10"
                    >
                        <p
                            className="text-xl text-gray-500"
                        >
                            Thank you for ordering!
                        </p>
                        <p
                            className="mt-2"
                        >
                            Your order has been placed successfully.
                        </p>
                        <Link
                            href={'/userLogin/menu'}
                            className="mt-4 inline-block bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                        >
                            Back to Menu
                        </Link>
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

export default OrderConfirmationPage;