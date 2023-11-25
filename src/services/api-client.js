import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  params: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});

export default apiClient;

export { AxiosError as CancledError };
