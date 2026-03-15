"use client"

import Navbar from "@/components/Navbar"

export default function Dashboard(){

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="p-10">

<h1 className="text-3xl font-bold mb-6">
Dashboard
</h1>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-lg font-semibold">Total Products</h2>
<p className="text-2xl font-bold mt-2">3</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-lg font-semibold">Inventory Value</h2>
<p className="text-2xl font-bold mt-2">₹120</p>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<h2 className="text-lg font-semibold">Active Users</h2>
<p className="text-2xl font-bold mt-2">2</p>
</div>

</div>

</div>

</div>

)

}