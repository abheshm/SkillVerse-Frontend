const API_URL = "http://127.0.0.1:8000/api/token/";

export const loginUser = async (
  username: string,
  password: string
) => {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid Credentials");
  }

  return response.json();
};