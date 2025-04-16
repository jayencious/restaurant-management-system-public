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
import MenuItems from "../../utils/menuItems";
import SidebarToggle from "../../utils/sidebarToggle";
import { Suspense } from "react";

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
                        <MenuItems
                            category_name={'veg_starters'}
                            title={'Veg Starters'}
                            getFunctionName={vegStarters}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'non_veg_starters'}
                            title={'Non Veg Starters'}
                            getFunctionName={nonVegStarters}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'veg_platters'}
                            title={'Veg Platters'}
                            getFunctionName={vegPlatters}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'non_veg_platters'}
                            title={'Non Veg Platters'}
                            getFunctionName={nonVegPlatters}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'veg_main_course'}
                            title={'Veg Main Course'}
                            getFunctionName={vegMainCourse}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'non_veg_main_course'}
                            title={'Non Veg Main Course'}
                            getFunctionName={nonVegMainCourse}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'veg_biryani'}
                            title={'Veg Biryani'}
                            getFunctionName={vegBiryani}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'non_veg_biryani'}
                            title={'Non Veg Biryani'}
                            getFunctionName={nonVegBiryani}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'veg_rice'}
                            title={'Veg Rice'}
                            getFunctionName={vegRice}
                         rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'non_veg_rice'}
                            title={'Non Veg Rice'}
                            getFunctionName={nonVegRice}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'rotis_and_breads'}
                            title={'Rotis And Breads'}
                            getFunctionName={rotisAndBreads}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'chaats'}
                            title={'Chaats'}
                            getFunctionName={chaats}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'salads'}
                            title={'Salads'}
                            getFunctionName={salads}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'raitas'}
                            title={'Raitas'}
                            getFunctionName={raitas}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'sweet_dishes'}
                            title={'Sweet Dishes'}
                            getFunctionName={sweetDishes}
                            rupeeSymbol={rupeeSymbol}
                        />
                        <MenuItems
                            category_name={'beverages'}
                            title={'Beverages'}
                            getFunctionName={beverages}
                         rupeeSymbol={rupeeSymbol}
                        />
                    </Suspense>
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

export default UserMenu;