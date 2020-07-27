import Axios, { CancelToken } from 'axios';
import { HTTP } from './http-common';
import Requests from '@/store/requests';

// Requests queue to cancel previous API requests
const requests = new Requests();
const CancelToken = Axios.CancelToken;

export class BaseApi {
  public async get (url, params, cancelString, responseType = null) {
    const cancelToken = this.generateCancelToken(cancelString);
    try {
      const response = await HTTP().get(url, { params, cancelToken, responseType });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async post (url, params, headers) {
    try {
      const response = await HTTP().post(url, params, headers);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  private generateCancelToken(cancelToken: string): CancelToken {
    return new CancelToken((c) => requests.update(cancelToken, c));
  }
}
