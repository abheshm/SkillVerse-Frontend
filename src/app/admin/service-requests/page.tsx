"use client";

import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { useEffect, useState } from "react";
import { getServiceRequests } from "@/services/serviceRequestService";

export default function ServiceRequestsPage() {
    const [requests, setRequests] = useState<any[]>([]);
    useEffect(() => {

        const loadRequests = async () => {

            try {

                const data =
                    await getServiceRequests();

                setRequests(data);

                console.log(data);

            } catch (error) {

                console.error(error);

            }

        };

        loadRequests();

    }, []);
    return (
        <div className="flex bg-gray-100 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 p-10">

                <AdminHeader adminName="abm" />

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

                    <h2 className="text-3xl font-bold">
                        Service Requests
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Manage all customer service requests.
                    </p>
                    <div className="mt-8 overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b">

                                    <th className="text-left p-4">
                                        Customer
                                    </th>

                                    <th className="text-left p-4">
                                        Description
                                    </th>

                                    <th className="text-left p-4">
                                        Technician
                                    </th>

                                    <th className="text-left p-4">
                                        Status
                                    </th>

                                    <th className="text-left p-4">
                                        Created
                                    </th>

                                    <th className="text-left p-4">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {requests.map((request: any) => (

                                    <tr
                                        key={request.id}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        <td className="p-4">

                                            {request.customer_name}

                                        </td>

                                        <td className="p-4">

                                            {request.description}

                                        </td>

                                        <td className="p-4">

                                            {request.technician_name ?? "Not Assigned"}

                                        </td>

                                        <td className="p-4">

                                            <span
                                                className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                                            >

                                                {request.status}

                                            </span>

                                        </td>

                                        <td className="p-4">

                                            {new Date(
                                                request.created_at
                                            ).toLocaleDateString()}

                                        </td>

                                        <td className="p-4">

                                            <button
                                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                            >

                                                View

                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>

        </div>
    );
}