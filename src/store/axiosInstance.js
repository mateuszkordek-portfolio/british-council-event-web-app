import Axios from "axios";

let axios = Axios.create({
    baseURL: process.env.VUE_APP_WS_SERVER,
    headers: {
        "x-access-token": "",
    },
});

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("loggedUser");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

export default axios;