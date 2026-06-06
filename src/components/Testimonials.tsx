import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner",
      review:
        "The easiest way I've ever found a plumber. Highly recommended!",
    },
    {
      name: "David Lopez",
      role: "Certified Electrician",
      review:
        "SkillVerse has helped me find steady work in my area.",
    },
  ];

  return (
    <section className="bg-blue-50 py-20 mt-20">

      <div className="max-w-7xl mx-auto px-10">

        <div className="grid lg:grid-cols-3 gap-8">

          <div>

            <h2 className="text-4xl font-bold text-blue-900">
              What our community says
            </h2>

            <p className="text-gray-600 mt-4">
              Thousands of homeowners trust SkillVerse
              for their daily repair and renovation needs.
            </p>

            <p className="mt-6 font-medium text-blue-900">
              ⭐ 4.9/5 from 2k+ reviews
            </p>

          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">

            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                role={testimonial.role}
                review={testimonial.review}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}