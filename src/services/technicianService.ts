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

export const getAssignedJobs =
  async () => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await fetch(
        "http://127.0.0.1:8000/api/technician/my_jobs/",
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    if (!response.ok) {

      throw new Error(
        "Failed to fetch assigned jobs"
      );

    }

    return response.json();
  };

export const markJobCompleted =
  async (jobId: number) => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await fetch(
        `http://127.0.0.1:8000/api/service-requests/${jobId}/mark_completed/`,
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
        "Failed to mark job completed"
      );

    }

    return response.json();
  };