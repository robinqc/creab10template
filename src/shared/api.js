import axios from "axios";
import { getAuthToken } from "./login";

const onRequest = (config) => {
  const configuration = config;
  const token = getAuthToken();
  if (token && configuration.headers) {
    configuration.headers.Authorization = `Bearer ${token}`;
  }
  return configuration;
};

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(onRequest);

export default api;
