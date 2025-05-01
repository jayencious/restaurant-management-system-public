"use client";

import Link from "next/link";
import Image from "next/image";

function HomePageComponent() {
    return (
        <div className="flex flex-col justify-center px-6 py-12 sm:mx-auto sm:w-full sm:max-w-md bg-gray-900 rounded-2xl shadow-lg relative">
            <div
                className="absolute top-2 right-2 text-xs text-gray-500 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
                <Link
                    href="https://github.com/jayencious"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    jayencious
                </Link>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    src='/taste_of_the_world_logo.jpg'
                    alt='Taste Of The Worl'
                    width={85}
                    height={100}
                    className='mx-auto'
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-100">
                    Welcome to Taste of the World!
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <Link
                    href='/userLogin'
                >
                    <button
                        type="submit"
                        className="w-full px-4 py-8 font-bold bg-blue-900 text-white text-lg rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all ease-in-out duration-300 mb-3"
                    >
                        User Login
                    </button>
                </Link>
                <Link
                    href='/adminLogin'
                >
                    <button
                        type="submit"
                        className="w-full px-4 py-8 font-bold bg-blue-900 text-white text-lg rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all ease-in-out duration-300 mb-3"
                    >
                        Admin Login
                    </button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default HomePageComponent;