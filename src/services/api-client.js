import axios from "axios";

export default axios.create({
  baseURL: import.meta.VITE_REACT_APP_API_URL,
  headers: {
    key: import.meta.VITE_REACT_APP_API_KEY,
  },
});
