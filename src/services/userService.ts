const API_URL =
  "http://127.0.0.1:8000/api/users/me/";

export const getCurrentUser =
  async () => {

    const token =
      localStorage.getItem(
        "accessToken"
      );

    const response =
      await fetch(API_URL, {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      });

    if (!response.ok) {
      throw new Error(
        "Failed to get user"
      );
    }

    return response.json();
};