import axios from "axios";

const API_URL = 'http://localhost:4000';

// export const register = async (user) => {
//   const response = await fetch(`${API_URL}/api/users/register`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(user),
//   });

//   const data = await response.json();

//   if (response.ok) {
//     return data;
//   } else {
//     throw new Error(data.message);
//   }
// };



export const register = async (user) => {
    try {
        const res = await axios.post(`${API_URL}/api/users/register`, user);
        return res;
    } catch(error) {
        return error;
    }
    
    };

export const login = async (user) => {
    try{

        const res = await axios.post("/api/users/login", user);
        return res;

    }catch(err) {
        return err;
    }
}

export const logout = async () => {
    try{

        const res = await axios.get("/api/users/logout");
        return res;

    }catch(err) {
        return err;
    }
}

export const getUser = async () => {
    try{

        const res = await axios.get("/api/users/me");
        return res;

    }catch(err) {
        return err;
    }
}

export const updateUser = async (user) => {
    try{

        const res = await axios.put("/api/users/updatedetails", user);
        return res;

    }catch(err) {
        return err;
    }
}

export const updatePassword = async (data) => {
    try{

        const res = await axios.put("/api/users/updatepassword", data);
        return res;

    }catch(err) {
        return err;
    }
}

export const deleteUser = async () => {
    try{

        const res = await axios.delete("/api/users/delete");
        return res;

    }catch(err) {
        return err;
    }
}