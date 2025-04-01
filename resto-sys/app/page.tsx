import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import LoginComponent from "./utils/loginPage";

export default function HomePage() {
  return (
    <div
        className="home-div"
    >
        {/* <Navbar fluid rounded
            style={{
                backgroundColor: 'inherit',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
            }}
        >
            <NavbarBrand
                href="/"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px'
                }}
            >
                <Image
                    src='/taste_of_the_world_logo.jpg'
                    alt="Taste of the World"
                    width={85}
                    height={100}
                    className="mr-5 h-12 sm:h-20"
                />
                <span className="self-center whitespace-nowrap text-2xl sm:text-4xl font-bold dark:text-white">
                    Taste of the World
                </span>
            </NavbarBrand>
        </Navbar> */}
        <LoginComponent />
    </div>
  );
}
