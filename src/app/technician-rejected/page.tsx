import Link from "next/link";

export default function TechnicianRejectedPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="bg-white p-10 rounded-3xl shadow-lg max-w-lg text-center">

                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    Application Rejected
                </h1>

                <p className="text-gray-600">
                    Unfortunately, your technician application was not approved.
                </p>

                <p className="text-gray-500 mt-4">
                    You may update your details and submit a new application.
                </p>

                <Link
                    href="/technician-application"
                    className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
                >
                    Apply Again
                </Link>

            </div>

        </div>
    );
}