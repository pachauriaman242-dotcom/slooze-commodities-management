import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-5 bg-white shadow-sm">

        <h1 className="text-2xl font-bold text-indigo-600">
          Slooze
        </h1>

        <Link href="/login">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>
        </Link>

      </nav>


      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-32 px-6">

        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Slooze Commodities Management
        </h1>

        <p className="text-gray-500 max-w-xl mb-8">
          Manage your commodities, track inventory and control product
          access with a modern role-based management system.
        </p>

        <Link href="/login">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-indigo-700 shadow-lg transition">
            Get Started
          </button>
        </Link>

      </section>


      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-16 mt-24">

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">
            Inventory Tracking
          </h3>
          <p className="text-gray-500">
            Monitor all commodities and product stock in real time.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">
            Role Based Access
          </h3>
          <p className="text-gray-500">
            Secure admin and user access with permission control.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3">
            Analytics Dashboard
          </h3>
          <p className="text-gray-500">
            Track product performance and inventory insights.
          </p>
        </div>

      </section>

    </main>
  );
}