import axios from "axios";

const API_URL = 'http://localhost:4000';

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

        const res = await axios.post(`${API_URL}/api/users/login`, user);
        return res;

    }catch(err) {
        return err;
    }
}

export const logout = async () => {
    try{

        const res = await axios.get(`${API_URL}/api/users/logout`);
        return res;

    }catch(err) {
        return err;
    }
}

export const getUser = async () => {
    try{

        const res = await axios.get(`${API_URL}/api/users/me`);
        return res;

    }catch(err) {
        return err;
    }
}

export const updateUser = async (user) => {
    try{

        const res = await axios.put(`${API_URL}/api/users/updatedetails`, user);
        return res;

    }catch(err) {
        return err;
    }
}

export const updatePassword = async (data) => {
    try{

        const res = await axios.put(`${API_URL}/api/users/updatepassword`, data);
        return res;

    }catch(err) {
        return err;
    }
}

export const deleteUser = async () => {
    try{

        const res = await axios.delete(`${API_URL}/api/users/delete`);
        return res;

    }catch(err) {
        return err;
    }
}