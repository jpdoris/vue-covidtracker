import { ActionTree } from "vuex";
import { RootState } from "./rootState";

const actions: ActionTree<RootState, RootState> = {
  // updatePrimarySelectedEngine(context, engine) {
  //   context.commit('UPDATE_PRIMARY_SELECTED_ENGINE', engine);
  // },
  // updatePrimarySelectedIssue(context, issue) {
  //   context.commit('UPDATE_PRIMARY_SELECTED_ISSUE', issue);
  // },
  // async setFeatureToggles(context) {
  //   let data;
  //   data = await userAccessApi.fetchFeatureToggles();
  //   context.commit('SET_FEATURE_TOGGLES', data);
  // },
  // async setUserPortalId(context) {
  //   let data;
  //   data = await userAccessApi.fetchUserPortalId();
  //   context.commit('SET_USER_PORTAL_ID', data);
  // },
  // setDiagnosticModeToAircraftCentric(context, flag) {
  //   context.commit('SET_IS_DIAGNOSE_AIRCRAFT_CENTRIC', flag);
  // }
};

export default actions;
