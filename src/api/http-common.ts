import Axios from "axios";
import { setupInterceptors, setupBaseUrl } from "./MockApiHelper";

export const HTTP = () => {
  const axiosInstance = Axios.create({
    timeout: 60000
  });
  setupInterceptors(axiosInstance);
  setupBaseUrl(axiosInstance);
  return axiosInstance;
};
