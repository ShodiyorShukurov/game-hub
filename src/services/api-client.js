import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "891abc60742741b0b8f831b7e45ceac8",
  },
});

export default apiClient;
