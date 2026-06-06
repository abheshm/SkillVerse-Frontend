export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">

      <div className="max-w-7xl mx-auto px-10 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h3 className="text-2xl font-bold text-blue-600">
              SkillVerse
            </h3>

            <p className="mt-4 text-gray-500">
              The professional bridge between skilled
              technicians and customers.
            </p>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2 text-gray-500">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Support
            </h4>

            <ul className="space-y-2 text-gray-500">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">
              Connect
            </h4>

            <div className="flex gap-4 text-2xl">
              <span>📘</span>
              <span>📷</span>
              <span>🐦</span>
            </div>

          </div>

        </div>

        <div className="border-t mt-10 pt-6 text-gray-500 text-sm">

          © 2026 SkillVerse. All rights reserved.

        </div>

      </div>

    </footer>
  );
}