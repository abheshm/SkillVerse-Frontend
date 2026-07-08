const API_URL =
  "http://127.0.0.1:8000/api/technician-applications/";

export const createTechnicianApplication =
  async (applicationData: any) => {

    const token = localStorage.getItem("accessToken");

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(applicationData),
    });

    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      throw new Error("Failed to create application");
    }

    return response.json();
  };


export const getMyApplication =
  async () => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await fetch(
        `${API_URL}my_application/`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch application"
      );
    }

    return response.json();
  };