"use client"

import { useRouter } from "next/navigation"

export default function Home() {

const router = useRouter()

return (

<div className="flex min-h-screen items-center justify-center bg-gray-100">

<div className="bg-white p-10 rounded-lg shadow-lg text-center">

<h1 className="text-3xl font-bold mb-4">
Slooze Commodities Management
</h1>

<p className="mb-6 text-gray-600">
Role Based Product Management System
</p>

<button
onClick={()=>router.push("/login")}
className="bg-blue-500 text-white px-6 py-3 rounded"
>

Go To Login

</button>

</div>

</div>

)

}