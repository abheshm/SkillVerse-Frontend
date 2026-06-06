type TestimonialCardProps = {
  name: string;
  role: string;
  review: string;
};

export default function TestimonialCard({
  name,
  role,
  review,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

      <div className="text-yellow-500 text-xl mb-4">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 italic">
        "{review}"
      </p>

      <div className="mt-6">
        <h4 className="font-semibold text-gray-900">
          {name}
        </h4>

        <p className="text-sm text-gray-500">
          {role}
        </p>
      </div>

    </div>
  );
}