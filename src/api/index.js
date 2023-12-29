import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})
export const appid = 'f8fee7178299f9852a69e81d8582c691'