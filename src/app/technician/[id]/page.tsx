"use client";

import { useEffect, useState } from "react";
import { getTechnicianById } from "@/services/technicianService";

export default function TechnicianProfile({
  params,
}: {
  params: { id: string };
}) {

  const [technician, setTechnician] =
    useState<any>(null);

  useEffect(() => {

    const fetchTechnician =
      async () => {

        try {

          const data =
            await getTechnicianById(
              params.id
            );

          console.log(data);

          setTechnician(data);

        } catch (error) {

          console.error(error);

        }

      };

    fetchTechnician();

  }, [params.id]);

  if (!technician) {

    return (
      <div className="p-10">
        Loading...
      </div>
    );

  }

  return (

    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow p-8">

        <h1 className="text-4xl font-bold mb-6">
          Technician Profile
        </h1>

        <p className="text-lg mb-4">
          <strong>Skill:</strong>{" "}
          {technician.skill}
        </p>

        <p className="text-lg mb-6">
          <strong>Available:</strong>{" "}
          {technician.availability
            ? "Yes"
            : "No"}
        </p>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Hire Technician
        </button>

      </div>

    </div>

  );
}