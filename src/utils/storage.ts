import { IAuthResponse } from '../interface';

class StorageUtils {
  static setDataJwtToken(value: IAuthResponse) {
    localStorage.setItem('jwt', JSON.stringify(value));
  }

  static getDataJwtToken() {
    const valueJwtToken = localStorage.getItem('jwt');
    return valueJwtToken ? JSON.parse(valueJwtToken) : false;
  }

  static deleteDataJwtToken() {
    localStorage.removeItem('jwt');
  }
}

export default StorageUtils;
