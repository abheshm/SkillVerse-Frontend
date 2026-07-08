"use client";

import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { useEffect, useState } from "react";
import { getServiceRequests } from "@/services/serviceRequestService";
import { getTechnicians, assignTechnician } from "@/services/adminService";
export default function ServiceRequestsPage() {

    const [requests, setRequests] = useState<any[]>([]);
    const [technicians, setTechnicians] =
        useState<any[]>([]);
    const [selectedTechnicians, setSelectedTechnicians] =
        useState<{ [key: number]: number }>({});
    useEffect(() => {

        const loadRequests = async () => {

            try {

                const data =
                    await getServiceRequests();

                setRequests(data);

                console.log(data);
                const technicians =
                    await getTechnicians();

                setTechnicians(
                    technicians
                );

                console.log(
                    "TECHNICIANS:",
                    technicians
                );

            } catch (error) {

                console.error(error);

            }

        };

        loadRequests();

    }, []);
    const handleAssign =
        async (requestId: number) => {

            const technicianId =
                selectedTechnicians[requestId];

            if (!technicianId) {

                alert(
                    "Please select a technician."
                );

                return;

            }

            try {

                await assignTechnician(
                    requestId,
                    technicianId
                );

                const updatedRequests =
                    await getServiceRequests();

                setRequests(
                    updatedRequests
                );

                alert(
                    "Technician assigned successfully!"
                );

            } catch (error) {

                console.error(error);

                alert(
                    "Assignment failed."
                );

            }

        };
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

                                            <select

                                                value={
                                                    selectedTechnicians[request.id] ?? ""
                                                }

                                                onChange={(e) =>
                                                    setSelectedTechnicians({
                                                        ...selectedTechnicians,
                                                        [request.id]: Number(e.target.value),
                                                    })
                                                }

                                                className="border rounded-lg px-3 py-2 w-full"

                                            >

                                                <option value="">
                                                    Select Technician
                                                </option>

                                                {technicians.map((technician: any) => (

                                                    <option
                                                        key={technician.id}
                                                        value={technician.id}
                                                    >

                                                        {technician.user.username}

                                                    </option>

                                                ))}

                                            </select>

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