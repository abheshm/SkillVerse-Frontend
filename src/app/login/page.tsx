"use client";

import { useState } from "react";
import { loginUser } from "@/services/loginServices";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/services/userService";

export default function LoginPage() {

    const [username, setUsername] =
        useState("");

    const [password, setPassword] =
        useState("");

    const router = useRouter();

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            const data = await loginUser(
                username,
                password
            );

            console.log(data);

            localStorage.setItem(
                "accessToken",
                data.access
            );

            localStorage.setItem(
                "refreshToken",
                data.refresh
            );

            const user =
                await getCurrentUser();

            console.log(user);

            localStorage.setItem(
                "user_id",
                user.id.toString()
            );

            if (
                user.role === "customer"
            ) {
                router.push(
                    "/customer-dashboard"
                );
            }
            else if (
                user.role === "technician"
            ) {
                router.push(
                    "/technician-dashboard"
                );
            }

        } catch (error) {

            console.error(error);

            alert("Invalid Username or Password");

        }
    };


    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">

            <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-8">
                    Login
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                        className="w-full border rounded-xl p-3"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="w-full border rounded-xl p-3"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}