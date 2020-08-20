// import { AlertCounts, Engine, IWatchList, UserAccess, UserPortalId, Dictionary } from '../interfaces';
// import { DiagnoseModuleState } from './modules/diagnose/diagnoseModule';
// import { AlertsModuleState } from './modules/alerts/alertsModule';
// import { ManageFleetModuleState } from './modules/manageFleet/manageFleetModule';
// import { FullFlightModuleState } from './modules/fullFlight/fullFlightModule';
// import { ParameterModuleState } from './modules/parameter/parameterModule';
// import { PlotModuleState } from './modules/plots/plotModule';

export interface RootState {
  // primarySelectedEngine: Engine<AlertCounts[]>;
  // primarySelectedIssue: IWatchList;
  // userAccessList: UserAccess;
  // isDiagnoseAircraftCentric: boolean;
  // featureToggles: {};
  // userPortalId: UserPortalId;

  /**
   * need to define the modules in the RootState in order to enable cross module access to state.
   * This could be a bug with Vuex Typings, but for now this is the workaround
   */
  // AlertsModule?: AlertsModuleState;
  // DiagnoseModule?: DiagnoseModuleState;
  // ManageFleetModule?: ManageFleetModuleState;
  // FullFlightModule?: FullFlightModuleState;
  // PlotModule?: Dictionary<PlotModuleState>;
  // Snapshot?: ParameterModuleState;
  // Fullflight?: ParameterModuleState;
}
