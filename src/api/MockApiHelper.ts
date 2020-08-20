const requestHandler = request => {
  return request;
};

export const setupInterceptors = axiosInstance => {
  axiosInstance.interceptors.request.use(request => requestHandler(request));
};

export const setupBaseUrl = axiosInstance => {
  axiosInstance.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
};
