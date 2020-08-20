import { dateToUTC, fixDateForAllBrowsers } from './helpers';
// import fecha from 'fecha';
import moment from 'moment';

// ****************
//  Date Formatter
// ****************
export const dateMask = {
  style1: 'MM/DD/YYYY HH:mm',
  style2: 'MMM D, YYYY HH:mm',
  style3: 'MMM D, YYYY HH:mm:ss',
  style4: 'M/D/YYYY\nh:mm A',
  style5: 'MMMM D, YYYY hh:mm A',
  style6: 'MM/DD/YY',
  style7: 'MMM D YYYY',
  style8: 'HH:mm:ss',
  style9: 'YYYYMMDD',
  style10: 'YYYY-MM-DD'
};
export const fixDateForAllBrowsersFilter = (val: string) => {
  return fixDateForAllBrowsers(val);
};

export const momentDateFormatter = (val: string) => {
  return moment(val)
    .utc()
    .format('YYYY-MM-DD');
};

// export const dateFormatter = (val: string | number | Date, maskFormat: string) => {
//   return fecha.format(dateToUTC(new Date(val)), maskFormat);
// };

/**
 * sorts a list of objects by some key
 * @param arr: T[]
 * @param sortKey: string where T[sortKey] must be a valid date string
 */
export const sortByDateString = <T, K extends keyof T>(arr: T[], sortKey: K) => {
  const copy = [...arr];
  return copy.sort((a, b) => {
    return new Date(b[sortKey].toString()).valueOf() - new Date(a[sortKey].toString()).valueOf();
  });
};
