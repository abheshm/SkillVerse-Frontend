"use client";

import { useState } from "react";
import { createRequest } from "@/services/requestService";

export default function CreateRequestPage() {

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [customer, setCustomer] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const data = await createRequest({
        description,
        status,
        customer,
      });

      console.log(data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="bg-slate-800 p-10 rounded-2xl w-[500px]">

        <h1 className="text-3xl font-bold text-blue-400 mb-8">
          Create Request
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="number"
            placeholder="Enter customer ID"
            value={customer}
            onChange={(e) =>
              setCustomer(e.target.value)
            }
            className="p-3 rounded-lg bg-slate-700 outline-none"
          />

          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="p-3 rounded-lg bg-slate-700 outline-none h-[150px]"
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="p-3 rounded-lg bg-slate-700 outline-none"
          >

            <option value="Pending">
              Pending
            </option>

            <option value="Assigned">
              Assigned
            </option>

            <option value="Completed">
              Completed
            </option>

          </select>

          <button
            className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg"
          >
            Create Request
          </button>

        </form>

      </div>

    </main>
  );
}