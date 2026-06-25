"use client";

import { useRouter } from "next/navigation"

export default function Navbar() {
  const router = useRouter();
  return (

    <nav className="bg-white border-b border-gray-200 flex justify-between items-center px-12 py-5 sticky top-0">
      <h1 className="text-3xl font-bold text-blue-600">
        SkillVerse
      </h1>

      <div className="flex gap-8 text-gray-700 font-medium">

        <a
          href="#"
          className="text-blue-600 border-b-2 border-blue-600 pb-1"
        >
          Home
        </a>

        <a
          href="#"
          className="hover:text-blue-600 transition"
        >
          Services
        </a>

        <a
          onClick={() => router.push("/register")}
          className="hover:text-blue-600 transition cursor-pointer"
        >
          Become a Technician
        </a>

      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => router.push("/login")}
          className="text-blue-600 font-medium hover:text-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/register")}
          className="bg-blue-600 text-white px-7 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>

      </div>

    </nav>
  );
}