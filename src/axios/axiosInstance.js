import axios from "axios";

const axiosInstance=axios.create({
    baseURL: 'http://localhost:8082'//process.env.REACT_APP_API_URL_Login
})

export default axiosInstance;