"use client";

import { useEffect, useState } from "react";
import {
    getAssignedJobs,
    markJobCompleted
} from "@/services/technicianService";


export default function TechnicianDashboard() {

    const [jobs, setJobs] = useState([]);

    const handleMarkComplete =
        async (jobId: number) => {

            try {

                await markJobCompleted(jobId);

                setJobs((prevJobs: any) =>
                    prevJobs.map((job: any) =>
                        job.id === jobId
                            ? {
                                ...job,
                                status: "completed"
                            }
                            : job
                    )
                );

            } catch (error) {

                console.error(error);

            }

        };

    useEffect(() => {

        const fetchJobs = async () => {

            try {

                const data =
                    await getAssignedJobs();

                console.log(data);

                setJobs(data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchJobs();

    }, []);

    return (

        <div className="min-h-screen bg-gray-50 p-10">

            <h1 className="text-4xl font-bold mb-8">
                Technician Dashboard
            </h1>

            <div className="grid gap-6">

                {jobs.map((job: any) => (

                    <div
                        key={job.id}
                        className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
                    >

                        <div className="flex justify-between items-start">

                            <div>

                                <h2 className="text-xl font-semibold">
                                    Service Request #{job.id}
                                </h2>

                                <p className="mt-2 text-gray-600">
                                    {job.description}
                                </p>

                            </div>

                            <span
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                                {job.status}
                            </span>

                        </div>

                        <div className="mt-5 flex gap-3">

                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                View Details
                            </button>

                            <button
                                onClick={() =>
                                    handleMarkComplete(job.id)
                                }
                                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                            >
                                Mark Complete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}