"use client";


import { useEffect, useState } from "react";
import { getAdminStats } from "@/services/adminService";


export default function AdminDashboard(){


const [stats,setStats] =
useState<any>(null);



useEffect(()=>{


const loadStats = async()=>{

try{

const data =
await getAdminStats();

setStats(data);


}
catch(error){

console.error(error);

}


};


loadStats();


},[]);



return(

<div className="min-h-screen bg-gray-50 p-10">


<h1 className="text-4xl font-bold mb-8">
Admin Dashboard
</h1>



<div className="grid grid-cols-4 gap-6">


<div className="bg-white p-6 rounded-2xl shadow">

<h2 className="text-gray-500">
Customers
</h2>

<p className="text-3xl font-bold">
{stats?.customers ?? 0}
</p>

</div>



<div className="bg-white p-6 rounded-2xl shadow">

<h2 className="text-gray-500">
Technicians
</h2>

<p className="text-3xl font-bold">
{stats?.technicians ?? 0}
</p>

</div>



<div className="bg-white p-6 rounded-2xl shadow">

<h2 className="text-gray-500">
Pending Applications
</h2>

<p className="text-3xl font-bold">
{stats?.pending_applications ?? 0}
</p>

</div>




<div className="bg-white p-6 rounded-2xl shadow">

<h2 className="text-gray-500">
Service Requests
</h2>

<p className="text-3xl font-bold">
{stats?.service_requests ?? 0}
</p>

</div>


</div>



</div>


);


}