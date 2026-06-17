
"use client";

import { useEffect, useState } from "react";
import { getTechnicianById } from "@/services/technicianService";
import { useParams } from "next/navigation";
import { createServiceRequest } from "@/services/serviceRequestService";

export default function TechnicianProfile() {

    const [technician, setTechnician] =
        useState<any>(null);

    const [description, setDescription] =
        useState("");

    const params = useParams();

    const id = params.id as string;

    useEffect(() => {

        const fetchTechnician =
            async () => {

                try {

                    const data =
                        await getTechnicianById(id);

                    console.log(data);

                    setTechnician(data);

                } catch (error) {

                    console.error(error);

                }

            };

        fetchTechnician();

    }, [id]);

    const handleBookService =
        async () => {

            try {

                await createServiceRequest(
                    description,
                    technician.id
                );

                alert(
                    "Service Request Created"
                );

                setDescription("");

            } catch (error) {

                console.error(error);

                alert(
                    "Failed to create request"
                );

            }

        };

    if (!technician) {

        return (
            <div className="p-10">
                Loading...
            </div>
        );



    }

    return (

        <div className="min-h-screen bg-gray-50 p-10">

            <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">

                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-4xl">

                    {technician.user.username
                        .charAt(0)
                        .toUpperCase()}

                </div>

                <h1 className="mt-6 text-4xl font-bold text-gray-900">

                    {technician.user.username}

                </h1>

                <p className="mt-2 text-xl text-blue-600">

                    {technician.skill}

                </p>

                <p className="mt-4">

                    Status:
                    {" "}

                    <span
                        className={
                            technician.availability
                                ? "text-green-600 font-medium"
                                : "text-red-600 font-medium"
                        }
                    >
                        {technician.availability
                            ? "Available"
                            : "Unavailable"}
                    </span>

                </p>

                <div className="mt-8">

                    <label className="block text-gray-700 font-medium mb-2">
                        Describe Your Issue
                    </label>

                    <textarea
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        placeholder="Describe the service you need..."
                        rows={4}
                        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>

                <button
                    onClick={handleBookService}
                    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                >
                    Book Service
                </button>

            </div>

        </div>

    );
}