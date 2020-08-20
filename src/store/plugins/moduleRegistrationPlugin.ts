import { RootState } from "../rootState";
import { Store } from "vuex";
// import { Parameter } from '../../interfaces/index';
// import { DynamicPlotModule } from '../modules/plots/index';

export const moduleRegistrationPlugin = (store: Store<RootState>) => {
  // store.subscribe((mutation) => {
  //   switch (mutation.type) {
  //     case 'PlotModule/ADD_PLOT':
  //       const parameter: Parameter = mutation.payload;
  //       store.registerModule(['PlotModule', `${parameter.pFullName}`], DynamicPlotModule);
  //       break;
  //     default:
  //       break;
  //   }
  // });
};
