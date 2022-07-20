import axios from "axios";

export const instance = axios.create({
        baseURL: 'https://eschool-backend-server.herokuapp.com',
        timeout: 1000,
        headers: { Accept : "application/json"}
    })