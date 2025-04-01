"use client";

import {
    Button,
    Checkbox,
    Label,
    TextInput
} from 'flowbite-react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from "next/link";
// import { useState } from 'react';
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

export default function LoginComponent() {
    // const { data: session } = useSession();
    // const router = useRouter();

    // useEffect(() => {
    //     if (session) {
    //         router.push('/dashboard');
    //     }
    // }, [session]);

    return (
        <div className="flex flex-col justify-center px-6 py-12 sm:mx-auto sm:w-full sm:max-w-md bg-green-900 rounded-2xl shadow-lg">
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
                <form
                    className="space-y-6"
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-100"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='johndoe123@gmail.com'
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-00 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <Link
                                    href='#'
                                    className="font-semibold text-red-700 hover:text-gray-900"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Password'
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-semibold bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all ease-in-out duration-300 mb-3"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => signIn('google')}
                            className='w-full px-4 py-2 text-lg font-semibold text-black bg-gray-100 rounded-md shadow-md hover:bg-red-400 focus:ring-2 focus:ring-red-600 focus:outline-none transition-all ease-in-out duration-300 flex items-center justify-center gap-2'
                        >
                            <svg
                                className="w-5 h-5"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#4285F4"
                                    d="M24 9.5c3.4 0 6.4 1.2 8.8 3.5l6.5-6.5C34.6 2.3 29.6 0 24 0 14.6 0 6.9 5.9 3.4 14.4l7.6 5.9c1.9-5.6 7.1-9.6 13-9.6z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M46.2 24.5c0-1.4-.1-2.9-.4-4.2H24v8h12.7c-.8 3.9-3.5 7.3-7.4 9.4l7.6 5.9c4.5-4.1 7.3-10.2 7.3-17.1z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M10.9 28.7c-1.3-3.8-1.3-8.1 0-11.9L3.3 10.9c-3 5.8-3 12.7 0 18.5l7.6-5.9z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M24 48c6.5 0 12.1-2.1 16.2-5.7l-7.6-5.9c-2.2 1.5-4.9 2.3-8.1 2.3-5.9 0-11.1-3.9-13-9.6l-7.6 5.9C6.9 42.1 14.6 48 24 48z"
                                />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-100">
                    Don't have an account?{" "}
                    <Link
                        href='#'
                        className="font-semibold text-red-700 hover:text-gray-900"
                    >
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
}