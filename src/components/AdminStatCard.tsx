type AdminStatCardProps = {
    title: string;
    value: number;
    icon: string;
    subtitle: string;
};

export default function AdminStatCard({
    title,
    value,
    icon,
    subtitle,
}: AdminStatCardProps) {

    return (

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition duration-300">

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-gray-500 text-sm">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-2 text-gray-900">
                        {value}
                    </h2>

                    <p className="text-gray-400 text-sm mt-3">
                        {subtitle}
                    </p>

                </div>

                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-3xl">

                    {icon}

                </div>

            </div>

        </div>

    );

}