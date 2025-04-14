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

const playfair = Playfair({
    subsets: ["latin"],
    weight: ["400", "600"],
    display: "swap",
});

async function UserMenu() {
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
                    <MenuItems
                        category_name={'veg_starters'}
                        title={'Veg Starters'}
                        getFunctionName={(await getVegStarters())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'non_veg_starters'}
                        title={'Non Veg Starters'}
                        getFunctionName={(await getNonVegStarters())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'veg_platters'}
                        title={'Veg Platters'}
                        getFunctionName={(await getVegPlatters())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'non_veg_platters'}
                        title={'Non Veg Platters'}
                        getFunctionName={(await getNonVegPlatters())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'veg_main_course'}
                        title={'Veg Main Course'}
                        getFunctionName={(await getVegMainCourse())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'non_veg_main_course'}
                        title={'Non Veg Main Course'}
                        getFunctionName={(await getNonVegMainCourse())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'veg_biryani'}
                        title={'Veg Biryani'}
                        getFunctionName={(await getVegBiryani())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'non_veg_biryani'}
                        title={'Non Veg Biryani'}
                        getFunctionName={(await getNonVegBiryani())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'veg_rice'}
                        title={'Veg Rice'}
                        getFunctionName={(await getVegRice())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'non_veg_rice'}
                        title={'Non Veg Rice'}
                        getFunctionName={(await getNonVegRice())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'rotis_and_breads'}
                        title={'Rotis And Breads'}
                        getFunctionName={(await getRotisAndBreads())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'chaats'}
                        title={'Chaats'}
                        getFunctionName={(await getChaats())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'salads'}
                        title={'Salads'}
                        getFunctionName={(await getSalads())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'raitas'}
                        title={'Raitas'}
                        getFunctionName={(await getRaitas())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'sweet_dishes'}
                        title={'Sweet Dishes'}
                        getFunctionName={(await getSweetDishes())}
                        rupeeSymbol={rupeeSymbol}
                    />
                    <MenuItems
                        category_name={'beverages'}
                        title={'Beverages'}
                        getFunctionName={(await getBeverages())}
                        rupeeSymbol={rupeeSymbol}
                    />
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