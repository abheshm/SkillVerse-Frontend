const API_URL =
    "http://127.0.0.1:8000/admin-stats/";


export const getAdminStats =
    async () => {

        const token =
            localStorage.getItem(
                "accessToken"
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


        if (!response.ok) {

            throw new Error(
                "Failed to fetch admin stats"
            );

        }


        return response.json();

};