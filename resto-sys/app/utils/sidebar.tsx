"use client";

import {
    Sidebar,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
    SidebarLogo
} from "flowbite-react";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoBagCheckOutline, IoFastFoodOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { BsTelephone } from "react-icons/bs";
import { usePathname } from "next/navigation";

export function SideBar() {
    const pathname = usePathname();
    
    return (
        <Sidebar>
            <SidebarLogo
                href="/"
                img="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none' viewBox='0 0 24 24' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'%3E%3Cpath d='M18.011 13H20c-.367 2.5551-2.32 4.6825-4.9766 5.6162V20H8.97661v-1.3838C6.31996 17.6825 4.36697 15.5551 4 13h14.011Zm0 0c1.0995-.0059 1.989-.8991 1.989-2 0-.8637-.5475-1.59948-1.3143-1.87934M18.011 13H18m0-3.99997c.2409 0 .4718.04258.6857.12063m0 0c.8367-1.0335.7533-2.67022-.2802-3.50694-1.0335-.83672-2.5496-.6772-3.3864.35631-.293-1.50236-1.7485-2.15377-3.2509-1.8607-1.5023.29308-2.48263 1.74856-2.18956 3.25092C8.9805 6.17263 7.6182 5.26418 6.15462 6.00131 4.967 6.59945 4.45094 8.19239 5.04909 9.38002m0 0C4.37083 9.66467 4 10.3357 4 11.1174 4 12.1571 4.84288 13 5.88263 13m-.83354-3.61998c.2866-.12029 1.09613-.40074 2.04494.3418m5.27497-.89091c1.0047-.4589 2.1913-.01641 2.6502.98832'/%3E%3C/svg%3E"
                imgAlt="Cutlery Icon"
                className="bg-red-800 p-2 rounded-lg"
            >
                Welcome!
            </SidebarLogo>
            <SidebarItems>
                <SidebarItemGroup>
                    <SidebarItem
                        href="/"
                        icon={LuLayoutDashboard}
                        active={(pathname === '/')}
                    >
                        Dashboard
                    </SidebarItem>
                    <SidebarItem
                        href="orders"
                        icon={IoFastFoodOutline}
                        active={(pathname === '/orders')}
                    >
                        Orders
                    </SidebarItem>
                    <SidebarCollapse
                        icon={BiFoodMenu}
                        label="Menu"
                        renderChevronIcon={(theme, open) => {
                            const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                            return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? "on" : "off"])} />
                        }}
                    >
                        <SidebarItem
                            href="#"
                        >
                            Veg Starters
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Non Veg Starters
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Veg Platters
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Non Veg Platters
                        </SidebarItem>
                        <SidebarItem 
                            href="#"
                        >
                            Veg Main Course
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Non Veg Main Course
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Biryani and Rice
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Rotis and Breads
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Chaats, Salad and Raita
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Sweet Dishes
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Desserts
                        </SidebarItem>
                        <SidebarItem
                            href="#"
                        >
                            Beverages
                        </SidebarItem>
                    </SidebarCollapse>
                    {/*<SidebarItem href="menu" icon={BiFoodMenu}>Menu</SidebarItem>*/}
                </SidebarItemGroup>
                <SidebarItemGroup>
                    <SidebarItem
                        href="#"
                        icon={BsTelephone}
                    >
                        121-006-548
                    </SidebarItem>
                    <SidebarItem
                        href="#"
                        icon={IoBagCheckOutline}
                    >
                        Place Order
                    </SidebarItem>
                </SidebarItemGroup>
            </SidebarItems>
        </Sidebar>
    )
}