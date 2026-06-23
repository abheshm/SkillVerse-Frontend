// export default function Listing(props) {
//     (
//         <div className="mt-10 bg-white rounded-2xl shadow p-6">


//             <h2 className="text-2xl font-bold mb-6">
//                 Technician Applications
//             </h2>


//             <div className="overflow-x-auto">


//                 <table className="w-full">


//                     <thead>

//                         <tr className="border-b">

//                             <th className="text-left p-3">
//                                 Applicant
//                             </th>

//                             <th className="text-left p-3">
//                                 Skill
//                             </th>

//                             <th className="text-left p-3">
//                                 Experience
//                             </th>

//                             <th className="text-left p-3">
//                                 Status
//                             </th>

//                             <th className="text-left p-3">
//                                 Action
//                             </th>


//                         </tr>

//                     </thead>



//                     <tbody>


//                         {applications.map(
//                             (application: any) => (


//                                 <tr
//                                     key={application.id}
//                                     className="border-b"
//                                 >


//                                     <td className="p-3">

//                                         {application.full_name}

//                                     </td>


//                                     <td className="p-3">

//                                         {application.skill}

//                                     </td>


//                                     <td className="p-3">

//                                         {application.experience}

//                                     </td>


//                                     <td className="p-3">

//                                         <span
//                                             className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
//                                         >

//                                             {application.status}

//                                         </span>

//                                     </td>


//                                     <td className="p-3 flex gap-3">


//                                         <button
//                                             onClick={() =>
//                                                 handleApprove(application.id)
//                                             }
//                                             className="bg-green-600 text-white px-4 py-2 rounded-lg"
//                                         >
//                                             Approve
//                                         </button>


//                                         <button
//                                             className="bg-red-600 text-white px-4 py-2 rounded-lg"
//                                         >
//                                             Reject
//                                         </button>


//                                     </td>


//                                 </tr>


//                             ))}


//                     </tbody>


//                 </table>


//             </div>


//         </div>)
// }