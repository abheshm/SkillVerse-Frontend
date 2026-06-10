
"use client";

import { useEffect, useState } from "react";
import { getTechnicianById } from "@/services/technicianService";
import { useParams } from "next/navigation";

export default function TechnicianProfile() {

    const [technician, setTechnician] =
        useState<any>(null);

    const params = useParams();

    const id = params.id as string;

    console.log(id);

    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold">
                Technician Profile
            </h1>

        </div>
    );
}