"use client";

import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";

export default function ServiceRequestsPage() {
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

                </div>

            </main>

        </div>
    );
}