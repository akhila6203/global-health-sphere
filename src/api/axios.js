import axios from "axios";

// Set VITE_API_URL in the project-root .env file.
// Example: VITE_API_URL=http://localhost:5000/api
export const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000/api"
).replace(/\/+$/, "");

export const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/i, "");

const axiosApi = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  headers: { Accept: "application/json" },
});

export default axiosApi;
