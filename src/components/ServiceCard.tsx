type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">

      <div className="w-12 h-12 bg-blue-100 rounded-full mb-4"></div>

      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {description}
      </p>

    </div>
  );
}