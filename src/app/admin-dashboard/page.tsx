"use client";


import { useEffect, useState } from "react";
import { getAdminStats, getTechnicianApplications, approveTechnician } from "@/services/adminService";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminStatCard from "@/components/AdminStatCard";
import ApplicationsTable from "@/components/ApplicationsTable";

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


                <AdminHeader adminName="abm" />



                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                    <AdminStatCard
                        title="Customers"
                        value={stats?.customers ?? 0}
                        icon="👥"
                        subtitle="Registered Users"
                    />

                    <AdminStatCard
                        title="Technicians"
                        value={stats?.technicians ?? 0}
                        icon="🛠"
                        subtitle="Approved Workers"
                    />

                    <AdminStatCard
                        title="Pending Applications"
                        value={stats?.pending_applications ?? 0}
                        icon="📄"
                        subtitle="Waiting Review"
                    />

                    <AdminStatCard
                        title="Service Requests"
                        value={stats?.service_requests ?? 0}
                        icon="📋"
                        subtitle="Active Jobs"
                    />

                </div>

                <ApplicationsTable
                    applications={applications}
                    onApprove={handleApprove}
                />


            </main>

        </div>

    );


}