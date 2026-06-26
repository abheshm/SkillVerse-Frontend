const API_URL =
  "http://127.0.0.1:8000/api/service-requests/";


export const createRequest =
async (requestData:any)=>{


    const token =
        localStorage.getItem(
            "accessToken"
        );


    const response =
        await fetch(
            API_URL,
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json",

                    Authorization:
                    `Bearer ${token}`
                },

                body:
                JSON.stringify(
                    requestData
                )
            }
        );


    if(!response.ok){

        throw new Error(
            "Failed to create request"
        );

    }


    return response.json();

};