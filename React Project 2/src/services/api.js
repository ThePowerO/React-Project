import axios from "axios";

const api = axios.create({
    baseURL: "https://www.roblox.com/games/"
});

export default api;