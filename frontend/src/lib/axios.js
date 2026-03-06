import axios from "axios";
const api = axios.create({
   // baseURL: 'http://localhost:3000'
    baseURL: 'https://donation-system-6u77.onrender.com'
})
export default api
