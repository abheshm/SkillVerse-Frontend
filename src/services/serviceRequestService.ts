const API_URL =
  "http://127.0.0.1:8000/api/service-requests/";

export const createServiceRequest =
  async (
    description: string,
    technicianId: number
  ) => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${token}`,
        },

        body: JSON.stringify({
          description,
          assigned_technician:
            technicianId,
        }),
      });

    if (!response.ok) {

      throw new Error(
        "Failed to create request"
      );

    }

    return response.json();
  };

export const getServiceRequests = async () => {

  const token =
    localStorage.getItem("accessToken");

  const response =
    await fetch(API_URL, {

      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`,
      },

    });

  if (!response.ok) {

    throw new Error(
      "Failed to fetch service requests"
    );

  }

  return response.json();

};