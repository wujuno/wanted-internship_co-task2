import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
const token = import.meta.env.VITE_REACT_APP_TOKEN;

const baseInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

baseInstance.interceptors.response.use(({ data }) => data);

const apiRequest = {
  get: (url: any, request?: any) => baseInstance.get(url, request),
  delete: (url: any, request?: any) => baseInstance.delete(url, request),
  post: (url: any, data: any, config?: any) =>
    baseInstance.post(url, data, config),
};

export default apiRequest;
