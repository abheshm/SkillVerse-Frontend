interface UserCardProps {
  username: string;
  role?: string;
}

export default function UserCard({
  username,
  role,
}: UserCardProps) {

  return (
    <div className="bg-slate-800 p-5 rounded-2xl shadow-lg border border-slate-700 hover:scale-[1.02] transition">

      <h2 className="text-2xl font-semibold text-blue-400">
        {username}
      </h2>

      <p className="text-slate-300 mt-2">
        Role: {role || "No Role"}
      </p>

    </div>
  );
}