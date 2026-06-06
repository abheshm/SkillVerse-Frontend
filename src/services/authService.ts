const API_URL = "http://127.0.0.1:8000/api/users/";

export const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  role: string;
}) => {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};