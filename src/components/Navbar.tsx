export default function Navbar() {
  return (

    <nav className="bg-white border-b border-gray-200 flex justify-between items-center px-10 py-5">

      <h1 className="text-2xl font-bold text-blue-600">
        SkillVerse
      </h1>

      <div className="flex gap-8">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Become a Technician</a>
      </div>

      <div className="flex gap-4">

        <button className="font-medium">
          Login
        </button>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          Register
        </button>

      </div>

    </nav>
  );
}