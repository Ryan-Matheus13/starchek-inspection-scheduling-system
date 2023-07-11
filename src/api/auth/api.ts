import axios from 'axios';

import StorageUtils from '../../utils/storage'

const apiAuth = axios.create({
  baseURL: process.env.REACT_APP_API_AUTH
});

apiAuth.interceptors.response.use(
  resp => resp,
  async error => {
    if (error.response.status === 401) {
      try {
        StorageUtils.deleteDataJwtToken();
        return;
      } catch (e) {
        console.log('error refresh', e);
      }
      return error.response.data.detail
    }
    return error;
  }
);

export default apiAuth;
