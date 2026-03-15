"use client"

import Navbar from "@/components/Navbar"
import { useState } from "react"

export default function Products(){

const [products,setProducts] = useState([
{id:1,name:"Rice",price:50},
{id:2,name:"Wheat",price:40},
{id:3,name:"Corn",price:30}
])

const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [search,setSearch] = useState("")
const [editId,setEditId] = useState<number | null>(null)

const addProduct = ()=>{

if(!name || !price) return

if(editId){

setProducts(products.map(p=>
p.id === editId ? {...p,name,price:Number(price)} : p
))

setEditId(null)

}else{

setProducts([
...products,
{
id:Date.now(),
name,
price:Number(price)
}
])

}

setName("")
setPrice("")
}

const deleteProduct = (id:number)=>{
setProducts(products.filter(p=>p.id !== id))
}

const editProduct = (product:any)=>{
setName(product.name)
setPrice(product.price)
setEditId(product.id)
}

const filtered = products.filter(p =>
p.name.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="max-w-4xl mx-auto p-8">

<h1 className="text-4xl font-bold mb-6 text-gray-800">
Products
</h1>

<input
placeholder="Search product..."
className="w-full border p-3 rounded-lg mb-6"
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="flex gap-3 mb-6">

<input
placeholder="Product name"
className="border p-3 rounded-lg flex-1"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Price"
className="border p-3 rounded-lg w-32"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<button
onClick={addProduct}
className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg"
>
{editId ? "Update" : "Add"}
</button>

</div>

<div className="grid gap-4">

{filtered.map(p=>(
<div
key={p.id}
className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center"
>

<div>

<h2 className="text-xl font-semibold text-gray-800">
{p.name}
</h2>

<p className="text-gray-500">
₹ {p.price}
</p>

</div>

<div className="flex gap-2">

<button
onClick={()=>editProduct(p)}
className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
>
Edit
</button>

<button
onClick={()=>deleteProduct(p.id)}
className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
Delete
</button>

</div>

</div>
))}

</div>

</div>

</div>

)

}