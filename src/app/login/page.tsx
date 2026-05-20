"use client";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl w-[400px]">
        
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-8">
          Login
        </h1>

        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Enter username"
            className="p-3 rounded-lg bg-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="p-3 rounded-lg bg-slate-700 outline-none"
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>
      </div>
    </main>
  );
}