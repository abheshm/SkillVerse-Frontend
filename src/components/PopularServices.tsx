import ServiceCard from "./ServiceCard";

export default function PopularServices() {

    const services = [
        {
            title: "Electrician",
            description: "Professional electrical repairs and installations",
            icon: "⚡",
        },
        {
            title: "Plumber",
            description: "Pipe repairs and plumbing maintenance",
            icon: "🔧",
        },
        {
            title: "AC Repair",
            description: "Air conditioner service and repair",
            icon: "❄️",
        },
        {
            title: "Carpenter",
            description: "Furniture and woodwork services",
            icon: "🪚",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-10 py-20">

            <div className="flex justify-between items-center mb-10">

                <div>

                    <h2 className="text-4xl font-bold text-gray-900">
                        Popular Services
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Top-rated professionals ready to help you today
                    </p>

                </div>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}

            </div>

        </section>
    );
}