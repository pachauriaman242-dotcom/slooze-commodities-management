"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar(){

const [role,setRole] = useState<string | null>(null)

useEffect(()=>{

const storedRole = localStorage.getItem("role")
setRole(storedRole)

},[])

const toggleTheme = ()=>{
document.documentElement.classList.toggle("dark")
}

return(

<div className="flex justify-between items-center p-4 bg-gray-800 text-white">

<h1 className="font-bold text-lg">
Slooze
</h1>

<div className="flex gap-4 items-center">

<Link href="/products">Products</Link>

{role === "manager" && (
<Link href="/dashboard">Dashboard</Link>
)}

<button
onClick={toggleTheme}
className="bg-gray-700 px-2 py-1 rounded"
>

🌙

</button>

</div>

</div>

)

}