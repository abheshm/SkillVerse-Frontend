"use client";

import { useEffect, useState } from "react";
import { getTechnicians } from "@/services/technicianService";
import { useRouter } from "next/navigation";

export default function CustomerDashboard() {

    const [technicians, setTechnicians] =
        useState([]);

    const router = useRouter();

    useEffect(() => {

        const fetchTechnicians =
            async () => {

                try {

                    const data =
                        await getTechnicians();

                    console.log(data);

                    setTechnicians(data);

                } catch (error) {

                    console.error(error);

                }

            };

        fetchTechnicians();

    }, []);

    return (

        <div className="min-h-screen bg-gray-50 p-10">

            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 text-white mb-10">

                <h1 className="text-4xl font-bold">
                    Find Trusted Technicians
                </h1>

                <p className="mt-3 text-blue-100">
                    Browse verified professionals and book services quickly.
                </p>

            </div>

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-gray-800">
                    Available Technicians
                </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {technicians.map(
                    (tech: any) => (

                        <div
                            key={tech.id}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                        >

                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                                {tech.user.username.charAt(0).toUpperCase()}
                            </div>

                            <h2 className="mt-4 text-xl font-semibold text-gray-900">
                                {tech.user.username}
                            </h2>

                            <p className="text-blue-600 font-medium">
                                {tech.skill}
                            </p>

                            <p className="mt-3">
                                Status:
                                {" "}
                                <span
                                    className={
                                        tech.availability
                                            ? "text-green-600 font-medium"
                                            : "text-red-600 font-medium"
                                    }
                                >
                                    {tech.availability
                                        ? "Available"
                                        : "Unavailable"}
                                </span>
                            </p>

                            <div className="flex gap-3 mt-5">

                                {tech.availability && (
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                    >
                                        Book Now
                                    </button>
                                )}

                                <button
                                    onClick={() =>
                                        router.push(
                                            `/customer-dashboard/${tech.id}`
                                        )
                                    }
                                    className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
                                >
                                    View Profile
                                </button>

                            </div>

                        </div>
                    )
                )}

            </div>

        </div>
    );
}