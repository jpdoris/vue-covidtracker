import { BaseApi } from './BaseApi';
import { EventBus } from '../event-bus';

const headers = {
  headers: { 'Content-Type': 'application/json' }
};

class SharedApi extends BaseApi {
  // Save shared state
  public async saveSharedState(
    custids: string,
    appVer: string,
    contxtUrl: string,
    state: Object
  ): Promise<any> {
    const url = `shared/urls/save`;
    const params = {
      contextUrl: contxtUrl,
      appVersion: appVer,
      custIds: custids,
      uxState: state
    };
    try {
      const savedUrl = await this.post(url, params, headers);
      EventBus.$emit('api-endpoint-success-save-shared-state');
      return savedUrl;
    } catch (error) {
      EventBus.$emit('api-endpoint-error-save-shared-state');
      return error;
    }
  }

  // Get saved state from url
  public async fetchSharedState(saveUrl: string) {
    const url = `shared/urls/get/${saveUrl}`;
    const params = {};
    try {
      return await this.get(url, params, `getSharedState`);
    } catch (error) {
      throw error;
    }
  }
}

export const sharedApi = new SharedApi();
