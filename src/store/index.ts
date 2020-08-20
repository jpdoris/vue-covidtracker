// import AlertsModule from './modules/alerts';
// import DiagnoseModule from './modules/diagnose';
// import WatchListModule from './modules/watchlist';
// import IssuesModule from './modules/issues';
// import ManageFleetModule from './modules/manageFleet';
// import FullFlightModule from './modules/fullFlight';
// import { PlotModule } from './modules/plots';
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import TimewarpPlugin from "./plugins/timewarp";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import { RootState } from "./rootState";
import { moduleRegistrationPlugin } from "./plugins/moduleRegistrationPlugin";

Vue.use(Vuex);

export const storeOpts: StoreOptions<RootState> = {
  state,
  getters,
  mutations,
  actions,
  modules: {
    // AlertsModule,
    // DiagnoseModule,
    // WatchListModule,
    // IssuesModule,
    // FullFlightModule,
    // ManageFleetModule,
    // PlotModule
  },
  plugins: [TimewarpPlugin, moduleRegistrationPlugin]
};

const store = new Vuex.Store(storeOpts);

export default store;
