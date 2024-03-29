import axios from "axios";

const BASE_URL = "https://hci-seminarski.onrender.com/api";
const TOKEN = "";
/*if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken !== null) {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
}*/

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});