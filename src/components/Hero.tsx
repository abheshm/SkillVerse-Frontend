export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-10 py-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>

                    <h1 className="text-5xl font-bold leading-tight text-gray-900 max-w-xl">
                        Find Trusted Skilled Workers Near You
                    </h1>

                    <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
                        Connect with verified electricians,
                        plumbers and service professionals
                        in your local community.
                    </p>
                    <div className="mt-8 bg-white rounded-full shadow-md p-2 flex items-center max-w-[650px]">
                        <input
                            type="text"
                            placeholder="What service do you need?"
                            className="flex-1 px-4 py-3 outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Location"
                            className="flex-1 px-4 py-3 outline-none border-l"
                        />

                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                            Search
                        </button>

                    </div>

                    <div className="flex gap-4 mt-10">

                        <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition">
                            Hire Now
                        </button>

                        <button className="bg-gray-200 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-gray-300 transition">
                            Join as Technician
                        </button>

                    </div>

                </div>

                <div className="relative flex justify-end">

                    <img
                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                        alt="technician"
                        className="rounded-[32px] shadow-xl w-full max-w-[700px]" />

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-2xl px-6 py-4 min-w-[240px]">
                        <h3 className="font-semibold">
                            Verified Pros
                        </h3>

                        <p className="text-gray-500 text-sm">
                            100% Quality Checked
                        </p>

                    </div>


                </div>


            </div>

        </section>
    );
}