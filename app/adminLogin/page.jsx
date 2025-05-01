import AdminLoginComponent from '../utils/adminLoginPage';
import Link from "next/link";

export default function AdminLoginPage() {
    return (
        <div
            className="home-div relative"
        >
            <Link
                href="https://github.com/jayencious"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 z-50 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
                jayencious
            </Link>
            <AdminLoginComponent />
        </div>
    );
}