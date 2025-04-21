"use client";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
} from "flowbite-react";
import { signOut } from "next-auth/react";
import Image from "next/image";

function NavBar({
    userName,
    userEmail,
}) {

    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
               <Image
                   src='/taste_of_the_world_logo.jpg'
                   className="mr-3 h-6 sm:h-9"
                   alt="Taste of the World Logo"
                   width={45} height={350}
                />
               <span
                   className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
                >
                    Taste of the World
               </span>
            </NavbarBrand>
            <div
                className="flex md:order-2"
            >
                <Dropdown
                    arrowIcon={true} 
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E"
                        />
                    }
                >
                    <DropdownHeader>
                        <span
                            className="block text-sm"
                        >
                            {userName}
                        </span>
                        <span
                            className="block truncate text-sm font-medium"
                        >
                            {userEmail}
                        </span>
                    </DropdownHeader>
                    <DropdownDivider />
                    <DropdownItem
                        onClick={() => signOut('credentials').then(() => window.location.href = '/userLogin')}
                    >
                        Log out
                    </DropdownItem>
                </Dropdown>
            </div>
        </Navbar>
    )
}

export default NavBar;