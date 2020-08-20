import { Plugin } from "vuex";
import { RootState } from "../rootState";

/**
 * This is a Vuex plugin that will help us to offset the amount of time it takes
 * to change the date of the alerts page in the DEV environment. A Vuex plugin
 * is a function that takes in the store as its only argument.
 *
 * @param store
 */
const TimewarpPlugin: Plugin<RootState> = store => {
  if (process.env.NODE_ENV === "development") {
    const styles = [
      "background: linear-gradient(#D33106, #571402)",
      "border: 1px solid #3E0E02",
      "color: white",
      "display: block",
      "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
      "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
      "font-weight: bold",
      "border-radius: 2px"
    ].join(";");

    // tslint:disable-next-line
    console.log(`%c Vuex TimewarpPlugin Detected `, styles);

    // store.commit('AlertsModule/UPDATE_DATE_RANGE', {
    //   start: new Date(2017, 0, 1),
    //   end: new Date(2017, 0, 4)
    // });
  }
};

export default TimewarpPlugin;
