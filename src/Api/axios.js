import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "http://127.0.0.1:5001/clone-cd1ae/us-central1/api",
});
export default axiosInstance;
