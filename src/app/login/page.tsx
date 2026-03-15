"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login(){

const router = useRouter()

const [role,setRole] = useState("manager")

const handleLogin = ()=>{

localStorage.setItem("role",role)

if(role === "manager"){
router.push("/dashboard")
}else{
router.push("/products")
}

}

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">

<div className="bg-white p-10 rounded-xl shadow-xl w-96 text-center">

<h1 className="text-3xl font-bold mb-6 text-gray-800">
Login
</h1>

<select
className="w-full border p-3 rounded-lg mb-4"
value={role}
onChange={(e)=>setRole(e.target.value)}
>

<option value="manager">Manager</option>
<option value="storekeeper">Store Keeper</option>

</select>

<button
onClick={handleLogin}
className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg"
>

Login

</button>

</div>

</div>

)

}