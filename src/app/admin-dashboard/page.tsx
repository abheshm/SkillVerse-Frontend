"use client";


import { useEffect, useState } from "react";
import { getAdminStats, getTechnicianApplications, approveTechnician } from "@/services/adminService";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import AdminStatCard from "@/components/AdminStatCard";
import ApplicationsTable from "@/components/ApplicationsTable";
import AdminStats from "@/components/AdminStats";

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



                <AdminStats stats={stats} />

                <ApplicationsTable
                    applications={applications}
                    onApprove={handleApprove}
                />


            </main>

        </div>

    );


}