"use client";

import { useState } from "react";
import { registerUser } from "@/services/authService";

export default function RegisterPage() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "customer",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        if (
            formData.password !==
            formData.confirmPassword
        ) {
            alert("Passwords do not match");
            return;
        }

        try {

            const payload = {
                username: formData.username,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            };

            const data =
                await registerUser(payload);

            console.log(data);

            alert("Registration Successful");

        } catch (error) {

            console.error(error);

            alert("Registration Failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">

            <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-8">
                    Create Account
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                    />

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-3"
                    >
                        <option value="customer">
                            Customer
                        </option>

                        <option value="technician">
                            Technician
                        </option>

                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
                    >
                        Register
                    </button>

                </form>

            </div>

        </div>
    );
}