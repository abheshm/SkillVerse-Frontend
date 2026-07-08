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

            <div className="bg-white rounded-2xl shadow p-6">

                <h2 className="text-2xl font-bold mb-6">
                    My Assigned Jobs
                </h2>

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="text-left p-3">
                                    Customer
                                </th>

                                <th className="text-left p-3">
                                    Description
                                </th>

                                <th className="text-left p-3">
                                    Status
                                </th>

                                <th className="text-left p-3">
                                    Created
                                </th>

                                <th className="text-left p-3">
                                    Action
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {jobs.map((job: any) => (

                                <tr
                                    key={job.id}
                                    className="border-b"
                                >

                                    <td className="p-3">
                                        {job.customer_name}
                                    </td>

                                    <td className="p-3">
                                        {job.description}
                                    </td>

                                    <td className="p-3">
                                        {job.status}
                                    </td>

                                    <td className="p-3">
                                        {new Date(
                                            job.created_at
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className="p-3">

                                        <button

                                            onClick={() =>
                                                handleMarkComplete(job.id)
                                            }

                                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"

                                        >

                                            Mark Complete

                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}