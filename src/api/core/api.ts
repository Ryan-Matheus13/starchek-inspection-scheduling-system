import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_CORE,
});

api.interceptors.request.use(async (config) => {
  const access = await StorageUtils.getDataJwtToken();
  config.headers = {
    Authorization: `Bearer ${access?.access}`,
    Accept: "application/json",
    AccessControlAllowOrigin: "Origin",
    AccessControlAllowMethods: "DELETE, POST, GET, OPTIONS",
    AccessControlAllowHeaders:
    "accept, authorization, content-type, user-agent, x-csrftoken, x-requested-with",
    "ngrok-skip-browser-warning": "any",
  };

  return config;
});

export default {
  api,
};
