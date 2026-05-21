"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/services/userService";
import UserCard from "@/components/UserCard";

export default function UsersPage() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchUsers() {

      try {

        const data = await getUsers();

        setUsers(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    }

    fetchUsers();

  }, []);

  if (loading) {
    return (
      <h1 className="p-10 text-2xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-8 text-blue-400">
        Users
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
          users.map((user: any) => (
            <UserCard
              key={user.id}
              username={user.username}
              role={user.role}
            />
          ))
        }

      </div>

    </div>
  );
}