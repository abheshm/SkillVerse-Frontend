"use client";

type AdminHeaderProps = {
    adminName: string;
};

export default function AdminHeader({
    adminName,
}: AdminHeaderProps) {

    return (

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-3xl font-bold text-gray-900">
                        Good Morning 👋
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Welcome back, <span className="font-semibold">{adminName}</span>
                    </p>

                </div>

                <div className="flex items-center gap-5">

                    <button className="text-2xl hover:scale-110 transition">
                        🔔
                    </button>

                    <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">

                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                            {adminName.charAt(0).toUpperCase()}
                        </div>

                        <div>

                            <p className="font-semibold text-gray-800">
                                {adminName}
                            </p>

                            <p className="text-sm text-gray-500">
                                Administrator
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}