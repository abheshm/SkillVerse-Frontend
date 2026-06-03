export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-20">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h1 className="text-6xl font-bold leading-tight">
            Find Trusted Skilled Workers Near You
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Connect with verified electricians,
            plumbers and service professionals
            in your local community.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-full">
              Hire Now
            </button>

            <button className="bg-gray-200 px-6 py-3 rounded-full">
              Join as Technician
            </button>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="technician"
            className="rounded-3xl"
          />

        </div>

      </div>

    </section>
  );
}