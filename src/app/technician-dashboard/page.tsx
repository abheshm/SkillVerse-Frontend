"use client";

import { useEffect, useState } from "react";
import { getAssignedJobs } from "@/services/technicianService";

export default function TechnicianDashboard() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    const fetchJobs = async () => {

      try {

        const data =
          await getAssignedJobs();

        setJobs(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchJobs();

  }, []);

  return (

    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Technician Dashboard
      </h1>

      <div className="grid gap-6">

        {jobs.map((job: any) => (

          <div
            key={job.id}
            className="bg-white rounded-2xl shadow p-6"
          >

            <h2 className="text-xl font-semibold">
              Service Request #{job.id}
            </h2>

            <p className="mt-2">
              {job.description}
            </p>

            <p className="mt-3 text-blue-600 font-medium">
              Status: {job.status}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}