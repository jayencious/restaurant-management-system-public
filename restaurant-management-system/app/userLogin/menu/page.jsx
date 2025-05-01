import NavBar from "../../utils/navbar";
import SideBar from "../../utils/sidebar";
import FooterComponent from "../../utils/footer";
import { Playfair } from 'next/font/google';
import { rupeeSymbol } from "../../data/menuData/menu";
import {
    getVegStarters,
    getNonVegStarters,
    getVegPlatters,
    getNonVegPlatters,
    getVegMainCourse,
    getNonVegMainCourse,
    getVegBiryani,
    getNonVegBiryani,
    getVegRice,
    getNonVegRice,
    getRotisAndBreads,
    getChaats,
    getSalads,
    getRaitas,
    getSweetDishes,
    getBeverages
} from '../../data/menuData/menu';
import SidebarToggle from "../../utils/sidebarToggle";
import { Suspense } from "react";
import { auth } from '../../auth';
import { getCartItems } from '../../actions/cart';
import CartButton from '../../utils/cartButton';
import Link from "next/link";

const playfair = Playfair({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
});

async function UserMenu() {
    const [
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
        beverages
    ] = await Promise.all([
        getVegStarters(),
        getNonVegStarters(),
        getVegPlatters(),
        getNonVegPlatters(),
        getVegMainCourse(),
        getNonVegMainCourse(),
        getVegBiryani(),
        getNonVegBiryani(),
        getVegRice(),
        getNonVegRice(),
        getRotisAndBreads(),
        getChaats(),
        getSalads(),
        getRaitas(),
        getSweetDishes(),
        getBeverages(),
    ]);

    const session = await auth();
    const userId = session?.user?.id;
    const userName = session?.user?.name;
    const userEmail = session?.user?.email;

    const cartItems = userId ? await getCartItems() : [];

    return (
        <div
            className="flex flex-col min-h-screen"
        >
            <Link
                href="https://github.com/jayencious"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 z-50 text-xs text-gray-300 hover:text-gray-500 transition-colors"
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
                <SidebarToggle />
                <div
                    className="hidden md:flex md:w-60 md:mr-2 bg-white z-20"
                >
                    <SideBar />
                </div>
                <div
                    className="flex-grow relative overflow-y-auto scrollbar-hide"
                    style={{
                        // backgroundImage: "url('/home_bg.png')",
                        // backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "center",
                        // borderRadius: "10px",
                        height: "calc(100vh - 180px)",
                        padding: "10px",
                        margin: "10px",
                    }}
                >
                    <Suspense
                        fallback={<p>Loading data...</p>}
                    >
                        {/* Veg Starters */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='veg_starters'
                        >
                            Veg Starters
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {vegStarters.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Non Veg Starters */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='non_veg_starters'
                        >
                            Non Veg Starters
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {nonVegStarters.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Veg Platters */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='veg_platters'
                        >
                            Veg Platters
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {vegPlatters.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Non Veg Platters */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='non_veg_platters'
                        >
                            Non Veg Platters
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {nonVegPlatters.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Veg Main Course */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='veg_main_course'
                        >
                            Veg Main Course
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {vegMainCourse.map((item) => {
                                const cartItem = cartItems.find((c) => c.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Non Veg Main Course */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='non_veg_main_course'
                        >
                            Non Veg Main Course
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {nonVegMainCourse.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Veg Biryani */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='veg_biryani'
                        >
                            Veg Biryani
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {vegBiryani.map((item) => {
                                const cartItem = cartItems.find((ci)=> ci.item_id === item.item_id)
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Non Veg Biryani */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='non_veg_biryani'
                        >
                            Non Veg BIryani
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {nonVegBiryani.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Veg Rice */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='veg_rice'
                        >
                            Veg Rice
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {vegRice.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Non Veg Rice */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='non_veg_rice'
                        >
                            Non Veg Rice
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {nonVegRice.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Rotis and Breads */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='rotis_and_breads'
                        >
                            Rotis And Breads
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {rotisAndBreads.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Chaats */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='chaats'
                        >
                            Chaats
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {chaats.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Salads */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='salads'
                        >
                            Salads
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {salads.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Raitas */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='raitas'
                        >
                            Raitas
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {raitas.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Sweet Dishesh */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='sweet_dishes'
                        >
                            Sweet Dishes
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {sweetDishes.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                        {/* Beverages */}
                        <h2
                            className={`text-4xl font-semibold text-center ${playfair.className}`}
                            id='beverages'
                        >
                            Beverages
                        </h2>
                        <hr />
                        <div
                            className="flex flex-wrap"
                        >
                            {beverages.map((item) => {
                                const cartItem = cartItems.find((ci) => ci.item_id === item.item_id);
                                return (
                                    <div
                                        className="w-1/4 p-2"
                                        key={item.item_id}
                                    >
                                        <div
                                            className="flex flex-row rounded-2xl shadow-md overflow-hidden"
                                        >
                                            <div
                                                className="flex flex-col p-4 justify-between"
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
                                                    className="flex items-center mt-2"
                                                >
                                                    <CartButton
                                                        itemId={Number(item.item_id)}
                                                        price={Number(item.price)}
                                                        initialQuantity={cartItem?.quantity || 0}
                                                        cartItemId={cartItem?.cart_item_id}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <hr />
                        <br />
                    </Suspense>
                </div>
            </div>
            <div
                className="text-center py-2 text-xs text-gray-300"
            >
                <Link
                    href="https://github.com/jayencious"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500 transition-colors"
                >
                    jayencious
                </Link>
            </div>
            <div
                className="mt-2"
            >
                <FooterComponent />
            </div>
        </div>
    )
}

export default UserMenu;