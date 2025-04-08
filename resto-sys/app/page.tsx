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
        <LoginComponent />
    </div>
  );
}
