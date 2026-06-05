type ServiceCardProps = {
    title: string;
    description: string;
    icon: string;
};
export default function ServiceCard({
    title,
    description,
    icon,
}: ServiceCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-5">

                <span className="text-2xl">
                    {icon}
                </span>

            </div>

            <h3 className="text-xl font-semibold text-gray-900">
                {title}
            </h3>

            <p className="text-gray-500 mt-3">
                {description}
            </p>

            <button className="mt-5 text-blue-600 font-medium hover:text-blue-700">
                Learn More →
            </button>

        </div>
    );
}