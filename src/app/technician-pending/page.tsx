export default function TechnicianPendingPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">

            <div className="bg-white p-10 rounded-3xl shadow-lg max-w-lg text-center">

                <h1 className="text-3xl font-bold text-yellow-600 mb-4">
                    Application Under Review
                </h1>

                <p className="text-gray-600">
                    Your technician application has been submitted successfully.
                    Our admin team is reviewing your application.
                </p>

                <p className="text-gray-500 mt-4">
                    Please check back later.
                </p>

            </div>

        </div>
    );
}