const API_URL =
    "http://127.0.0.1:8000/admin-stats/";


export const getAdminStats =
    async () => {


        const token =
            localStorage.getItem(
                "accessToken"
            );


        console.log(
            "TOKEN:",
            token
        );


        const response =
            await fetch(
                API_URL,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


        console.log(
            "STATUS:",
            response.status
        );


        const data =
            await response.json();


        console.log(
            "ADMIN DATA:",
            data
        );


        if (!response.ok) {

            throw new Error(
                "Failed to fetch admin stats"
            );

        }


        return data;

    };

export const getTechnicianApplications =
    async () => {

        const token =
            localStorage.getItem(
                "accessToken"
            );


        const response =
            await fetch(
                "http://127.0.0.1:8000/api/technician-applications/",
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


        if (!response.ok) {

            throw new Error(
                "Failed to fetch applications"
            );

        }


        return response.json();

    };

export const approveTechnician =
    async (id: number) => {


        const token =
            localStorage.getItem(
                "accessToken"
            );


        const response =
            await fetch(
                `http://127.0.0.1:8000/api/technician-applications/${id}/approve/`,
                {
                    method: "POST",

                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );


        if (!response.ok) {

            throw new Error(
                "Approval failed"
            );

        }


        return response.json();

    };

export const getTechnicians =
    async () => {

        const token =
            localStorage.getItem(
                "accessToken"
            );

        const response =
            await fetch(
                "http://127.0.0.1:8000/api/technician/",
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

        if (!response.ok) {

            throw new Error(
                "Failed to fetch technicians"
            );

        }

        return response.json();

    };

export const assignTechnician =
    async (
        requestId: number,
        technicianId: number
    ) => {

        const token =
            localStorage.getItem(
                "accessToken"
            );

        const response =
            await fetch(
                `http://127.0.0.1:8000/api/service-requests/${requestId}/assign_technician/`,
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },

                    body: JSON.stringify({
                        technician_id: technicianId
                    })

                }
            );

        if (!response.ok) {

            throw new Error(
                "Failed to assign technician"
            );

        }

        return response.json();

    };