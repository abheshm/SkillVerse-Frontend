"use client";

import Link from "next/link";

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-white shadow-lg border-r min-h-screen flex flex-col">

            <div className="p-6 border-b">
                <h1 className="text-3xl font-bold text-blue-600">
                    SkillVerse
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                    Admin Panel
                </p>
            </div>

            <nav className="flex-1 p-5">

                <ul className="space-y-3">

                    <li>
                        <Link
                            href="/admin-dashboard"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-medium"
                        >
                            📊 Dashboard
                        </Link>
                    </li>

                    <li>
                        <button
                            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100"
                        >
                            👥 Customers
                        </button>
                    </li>

                    <li>
                        <button
                            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100"
                        >
                            🛠 Technicians
                        </button>
                    </li>

                    <li>
                        <button
                            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100"
                        >
                            📄 Applications
                        </button>
                    </li>

                    <li>
                        <button
                            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100"
                        >
                            📋 Service Requests
                        </button>
                    </li>

                </ul>

            </nav>

            <div className="p-5 border-t">

                <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
                >
                    Logout
                </button>

            </div>

        </aside>
    );
}