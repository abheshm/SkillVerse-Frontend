const API_URL =
  "http://127.0.0.1:8000/api/technician/";

export const getTechnicians =
  async () => {

    const response =
      await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        "Failed to fetch technicians"
      );
    }

    return response.json();
};

export const getTechnicianById =
  async (id: string) => {

    const response =
      await fetch(
        `http://127.0.0.1:8000/api/technician/${id}/`
      );

    if (!response.ok) {
      throw new Error(
        "Failed to fetch technician"
      );
    }

    return response.json();
};