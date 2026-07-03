"use client";


import { useEffect, useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import { getAdminStats, getTechnicianApplications, approveTechnician } from "@/services/adminService";
// import  Listing  from '../../components/Listing';

export default function AdminDashboard() {


    const [stats, setStats] =
        useState<any>(null);

    const [applications, setApplications] =
        useState<any[]>([]);



    useEffect(() => {


        const loadStats = async () => {

            try {

                const data =
                    await getAdminStats();

                setStats(data);
                const applications =
                    await getTechnicianApplications();

                setApplications(applications);
                console.log(applications);


            }
            catch (error) {

                console.error(error);

            }


        };


        loadStats();


    }, []);


    const handleApprove =
        async (id: number) => {


            try {


                await approveTechnician(id);


                const updated =
                    await getTechnicianApplications();


                setApplications(updated);


            }
            catch (error) {

                console.error(error);

            }


        };





    return (

        <div className="flex bg-gray-100">

            <AdminSidebar />

            <main className="flex-1 p-10">


                <h1 className="text-4xl font-bold mb-8">
                    Admin Dashboard
                </h1>



                <div className="grid grid-cols-4 gap-6">


                    <div className="bg-white p-6 rounded-2xl shadow">

                        <h2 className="text-gray-500">
                            Customers
                        </h2>

                        <p className="text-3xl font-bold">
                            {stats?.customers ?? 0}
                        </p>

                    </div>



                    <div className="bg-white p-6 rounded-2xl shadow">

                        <h2 className="text-gray-500">
                            Technicians
                        </h2>

                        <p className="text-3xl font-bold">
                            {stats?.technicians ?? 0}
                        </p>

                    </div>



                    <div className="bg-white p-6 rounded-2xl shadow">

                        <h2 className="text-gray-500">
                            Pending Applications
                        </h2>

                        <p className="text-3xl font-bold">
                            {stats?.pending_applications ?? 0}
                        </p>

                    </div>




                    <div className="bg-white p-6 rounded-2xl shadow">

                        <h2 className="text-gray-500">
                            Service Requests
                        </h2>

                        <p className="text-3xl font-bold">
                            {stats?.service_requests ?? 0}
                        </p>

                    </div>


                </div>

                <div className="mt-10 bg-white rounded-2xl shadow p-6">


                    <h2 className="text-2xl font-bold mb-6">
                        Technician Applications
                    </h2>


                    <div className="overflow-x-auto">


                        <table className="w-full">


                            <thead>

                                <tr className="border-b">

                                    <th className="text-left p-3">
                                        Applicant
                                    </th>

                                    <th className="text-left p-3">
                                        Skill
                                    </th>

                                    <th className="text-left p-3">
                                        Experience
                                    </th>

                                    <th className="text-left p-3">
                                        Status
                                    </th>

                                    <th className="text-left p-3">
                                        Action
                                    </th>


                                </tr>

                            </thead>



                            <tbody>


                                {applications.map(
                                    (application: any) => (


                                        <tr
                                            key={application.id}
                                            className="border-b"
                                        >


                                            <td className="p-3">

                                                {application.full_name}

                                            </td>


                                            <td className="p-3">

                                                {application.skill}

                                            </td>


                                            <td className="p-3">

                                                {application.experience}

                                            </td>


                                            <td className="p-3">

                                                <span
                                                    className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                                                >

                                                    {application.status}

                                                </span>

                                            </td>


                                            <td className="p-3 flex gap-3">


                                                <button
                                                    onClick={() =>
                                                        handleApprove(application.id)
                                                    }
                                                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                                                >
                                                    Approve
                                                </button>


                                                <button
                                                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                                                >
                                                    Reject
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