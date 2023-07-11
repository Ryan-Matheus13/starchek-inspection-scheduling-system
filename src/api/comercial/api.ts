import axios from 'axios';

import { IHeaderConfig } from '../../interface';
import StorageUtils from '../../utils/storage'

const apiComercial = axios.create({
  baseURL: process.env.REACT_APP_API_COMERCIAL
});

apiComercial.interceptors.request.use(async config => {
  const access = await StorageUtils.getDataJwtToken();
  if (access.access) {
    config.headers = {
      Authorization: `Bearer ${access.access}`,
      Accept: 'application/json',
      AccessControlAllowOrigin: 'Origin',
      AccessControlAllowMethods: 'DELETE, POST, GET, OPTIONS',
      AccessControlAllowHeaders: "accept, authorization, content-type, user-agent, x-csrftoken, x-requested-with", "ngrok-skip-browser-warning":"any"
    };
  }

  return config;
});

export default {
  apiComercial
};
