"use client";

import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import Link from "next/link";

function UserLoginComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmission(ev) {
        ev.preventDefault();

        setLoginInProgress(true);
        
        const res = await signIn('credentials', {
            email: email,
            password: password,
            role: 'user',
            redirect: true,
            callbackUrl: '/userLogin/dashboard',
        });

        setLoginInProgress(false);
    }

    return (
        <div className="flex flex-col justify-center px-6 py-12 sm:mx-auto sm:w-full sm:max-w-md bg-green-900 rounded-2xl shadow-lg relative">
            <div
                className="absolute top-2 left-2 text-transparent hover:text-gray-400 transition-colors duration-300 text-sm"
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
                    alt='Taste Of The World'
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
                    onSubmit={handleFormSubmission}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-100"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email'
                                required
                                autoComplete="email"
                                disabled={loginInProgress}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={ev => setEmail(ev.target.value)}
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
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Password'
                                required
                                autoComplete="current-password"
                                disabled={loginInProgress}
                                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                                onChange={ev => setPassword(ev.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={loginInProgress}
                            className="w-full px-4 py-2 font-semibold bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all ease-in-out duration-300 mb-3"
                        >
                            {loginInProgress ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserLoginComponent;