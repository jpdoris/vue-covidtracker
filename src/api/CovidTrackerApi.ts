import { BaseApi } from "./BaseApi";
// import { EventBus } from '../event-bus';

// const headers = {
//   headers: { 'Content-Type': 'application/json' }
// };

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const proxyurl = "http://cors-anywhere.jamiedoris.com/";
const proxyurl = "http://localhost:3000/";

class CovidTrackerApi extends BaseApi {
  /**
   * fetchGlobalStatistics
   *
   * no args
   */
  public async fetchGlobalStatistics() {
    const url = `https://thevirustracker.com/free-api`;
    const params = {
      global: "stats"
    };
    try {
      return await this.get(proxyurl + url, params, `fetchGlobalStatistics`);
    } catch (error) {
      throw error;
    }
  }

  /**
   * fetchCountryStatistics
   *
   * no args
   */
  public async fetchCountryStatistics(country) {
    const url = `https://thevirustracker.com/free-api`;
    const params = {
      countryTotal: country
      // countryTotal: "US"
      // countryTotal: "ALL"
    };
    try {
      return await this.get(proxyurl + url, params, `fetchCountryStatistics`);
    } catch (error) {
      throw error;
    }
  }

  /**
   * fetchCountryTimeline
   *
   * no args
   */
  public async fetchCountryTimeline(country) {
    const url = `https://thevirustracker.com/free-api`;
    const params = {
      countryTimeline: country
      // countryTimeline: "ALL"
      // countryTimeline: "US"
    };
    try {
      return await this.get(proxyurl + url, params, `fetchCountryTimeline`);
    } catch (error) {
      throw error;
    }
  }

  /**
   * fetchFullTimeline
   *
   * no args
   */
  public async fetchFullTimeline() {
    const url = `https://thevirustracker.com/timeline/map-data.json`;
    const params = {};
    try {
      return await this.get(proxyurl + url, params, `fetchFullTimeline`);
    } catch (error) {
      throw error;
    }
  }
  // https://thevirustracker.com/timeline/map-data.json
}

export const covidTrackerApi = new CovidTrackerApi();
