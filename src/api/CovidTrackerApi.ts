import { BaseApi } from './BaseApi';
// import { EventBus } from '../event-bus';

// const headers = {
//   headers: { 'Content-Type': 'application/json' }
// };

const proxyurl = 'https://cors-anywhere.herokuapp.com/';

class CovidTrackerApi extends BaseApi {
  
  /**
   * fetchGlobalStatistics
   * 
   * no args
   */
  public async fetchGlobalStatistics() {
    const url = `https://thevirustracker.com/free-api`;
    const params = {
      global: 'stats'
    };
    try {
      return await this.get(proxyurl + url, params, `fetchGlobalStatistics`);
    } catch (error) {
      throw error;
    }
  }
}

export const covidTrackerApi = new CovidTrackerApi();
