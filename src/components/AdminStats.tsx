import AdminStatCard from "./AdminStatCard";

type AdminStatsProps = {
    stats: {
        customers: number;
        technicians: number;
        pending_applications: number;
        service_requests: number;
    } | null;
};

export default function AdminStats({
    stats,
}: AdminStatsProps) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <AdminStatCard
                title="Customers"
                value={stats?.customers ?? 0}
                icon="👥"
                subtitle="Registered Users"
            />

            <AdminStatCard
                title="Technicians"
                value={stats?.technicians ?? 0}
                icon="🛠"
                subtitle="Approved Workers"
            />

            <AdminStatCard
                title="Pending Applications"
                value={stats?.pending_applications ?? 0}
                icon="📄"
                subtitle="Waiting Review"
            />

            <AdminStatCard
                title="Service Requests"
                value={stats?.service_requests ?? 0}
                icon="📋"
                subtitle="Active Jobs"
            />

        </div>

    );

}