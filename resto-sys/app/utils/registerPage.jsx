"use client";

import Image from "next/image";
import Link from "next/link";
// import { signIn } from "next-auth/react";
import { useState } from "react";

function RegisterPageComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    // const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    async function handleFormSubmission(e) {
        e.preventDefault();
        setUserCreated(false);
        setError(false);
        setCreatingUser(true);
        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                // mobileNumber,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) {
            setError(true);
        }
        if (res.ok) {
            setUserCreated(true);
        }
        setCreatingUser(false);
    }
    
    return (
        <div
            className="flex flex-col justify-center px-6 py-12 sm:mx-auto sm:w-full sm:max-w-md bg-gray-900 rounded-2xl shadow-lg"
        >
            <div
                className="sm:mx-auto sm:w-full sm:max-w-sm"
            >
                <Image
                    src='/taste_of_the_world_logo.jpg'
                    alt='Taste Of The Worl'
                    width={85}
                    height={100}
                    className='mx-auto'
                />
                <h2
                    className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-100"
                >
                    Taste of the World!
                </h2>
                <h3 className="text-center text-1xl font-semibold tracking-tight text-red-400">
                    Register Now!
                </h3>
            </div>
            <div
                className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
            >
                {userCreated && (
                    <div className="my-4">
                        <p className="text-center text-lg font-bold text-green-400">
                            User created successfully!<br/>
                            Now you can {' '}
                            <Link
                                href='/userLogin'
                                className="underline"
                            >
                                Login &raquo;
                            </Link></p>
                    </div>
                )}
                {error && (
                    <div className="my-4">
                        <p className="text-center text-lg font-bold text-red-400">
                            An error occurred while creating user!<br/>
                            Please try again later.
                        </p>
                    </div>
                )}
                <form
                    className="space-y-3"
                    onSubmit={handleFormSubmission}
                >
                    <div
                        className="flex gap-4"
                    >
                        <div className="w-1/2">
                            <label
                                htmlFor="first_name"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                placeholder="John"
                                required
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                value={firstName}
                                disabled={creatingUser}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="w-1/2">
                            <label
                                htmlFor="last_name"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Doe"
                                autoComplete="family-name"
                                className="block rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                value={lastName}
                                disabled={creatingUser}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-100"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email'
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            value={email}
                            disabled={creatingUser}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    {/* <div>
                        <label
                            htmlFor="mobile_no"
                            className="block text-sm/6 font-medium text-gray-100"
                        >
                            Mobile No.
                        </label>
                        <input
                            type="tel"
                            id="mobile_no"
                            name="mobile_no"
                            placeholder="Mobile No."
                            required
                            autoComplete="tel"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            value={mobileNumber}
                            disabled={creatingUser}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div> */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm/6 font-medium text-gray-100"
                        >
                        Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Password'
                            required
                            autoComplete="new-password"
                            className="block w-full rounded-md bg-white px-3 py-2 text-base text-black border border-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                            value={password}
                            disabled={creatingUser}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-semibold bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all ease-in-out duration-300 mb-3"
                            disabled={creatingUser}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p
                    className="mt-10 text-center text-sm text-gray-100"
                >
                    Already have an account?{" "}
                    <Link
                        href='/userLogin'
                        className="font-semibold text-red-700 hover:text-gray-400"
                    >
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPageComponent;