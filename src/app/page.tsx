import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-800 p-10 rounded-2xl shadow-2xl">
          <h1 className="text-5xl font-bold mb-4 text-blue-400">
            SkillVerse
          </h1>

          <p className="text-slate-300 text-lg">
            Service Marketplace Platform
          </p>
        </div>
      </main>
    </div>
  );
}