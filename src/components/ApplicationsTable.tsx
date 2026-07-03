type Application = {
    id: number;
    full_name: string;
    skill: string;
    experience: string;
    status: string;
};

type ApplicationsTableProps = {
    applications: Application[];
    onApprove: (id: number) => void;
};

export default function ApplicationsTable({
    applications,
    onApprove,
}: ApplicationsTableProps) {

    const getStatusColor = (status: string) => {

        switch (status) {

            case "approved":
                return "bg-green-100 text-green-700";

            case "rejected":
                return "bg-red-100 text-red-700";

            default:
                return "bg-yellow-100 text-yellow-700";
        }

    };

    return (

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-8">

            <h2 className="text-2xl font-bold mb-6">
                Technician Applications
            </h2>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b text-gray-600">

                            <th className="text-left py-4">
                                Applicant
                            </th>

                            <th className="text-left py-4">
                                Skill
                            </th>

                            <th className="text-left py-4">
                                Experience
                            </th>

                            <th className="text-left py-4">
                                Status
                            </th>

                            <th className="text-left py-4">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {applications.map((application) => (

                            <tr
                                key={application.id}
                                className="border-b hover:bg-gray-50 transition"
                            >

                                <td className="py-5 font-medium">
                                    {application.full_name}
                                </td>

                                <td>
                                    {application.skill}
                                </td>

                                <td>
                                    {application.experience}
                                </td>

                                <td>

                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}
                                    >
                                        {application.status}
                                    </span>

                                </td>

                                <td>

                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => onApprove(application.id)}
                                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
                                        >
                                            Approve
                                        </button>

                                        <button
                                            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
                                        >
                                            Reject
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}