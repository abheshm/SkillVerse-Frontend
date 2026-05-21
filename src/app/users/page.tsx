"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/services/userService";

export default function UsersPage() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers() {

      try {

        const data = await getUsers();

        console.log(data);

        setUsers(data);

      } catch (error) {

        console.log(error);

      }
    }

    fetchUsers();

  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Users
      </h1>

      {
        users.map((user: any) => (
          <div
            key={user.id}
            className="bg-slate-800 p-5 rounded-xl mb-4"
          >
            <h2>{user.username}</h2>
          </div>
        ))
      }

    </div>
  );
}