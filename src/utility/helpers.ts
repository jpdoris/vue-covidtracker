// Safari & IE browsers do not support the date format “yyyy-mm-dd”
export const fixDateForAllBrowsers = (date: string) => date.replace(/-/g, '/');

export const dateToUTC = (date: Date) => {
  return new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
};

export const dateGenerator = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

// ******************************
//  Various Messages and Strings
// ******************************

export const noDataAvailableMessage = 'No Data Available';

export const findAndReplace = <T>(arr: T[], find: T, replacement: T): T[] => {
  const arrCopy = arr.slice();
  const findIdx = arrCopy.indexOf(find);
  if (findIdx !== -1) {
    arrCopy.splice(findIdx, 1, replacement);
    return arrCopy;
  } else {
    return arrCopy;
  }
};

export const findAndReplaceAll = <T>(arr: T[], find: T[], replacement: T[]): T[] => {
  const arrCopy = arr.slice();

  for (let i = 0; i < find.length; i++) {
    const findIdx = arrCopy.indexOf(find[i]);

    if (findIdx !== -1) {
      arrCopy.splice(findIdx, 1, replacement[i]);
    }
  }
  return arrCopy;
};

export const createRows = (elements, colWidth) => {
  const rows = [];
  let columnPointer = 0;
  let rowPointer = 0;
  for (const element of elements) {
    if (!rows[rowPointer]) {
      rows.push([]);
    }
    rows[rowPointer].push(element);
    columnPointer += 1;
    if (columnPointer % colWidth === 0) {
      rowPointer += 1;
    }
  }
  return rows;
};

// ******************************
// DOM and HTMLElement Helpers
// ******************************

export const setEllipsisTitle = (el: HTMLElement): void => {
  el.title = el.offsetWidth < el.scrollWidth ? el.innerText : '';
};

export const setPageTitle = (routeTitle: string): string => {
  return `${process.env.VUE_APP_NAME} - ${routeTitle} (v${process.env.VUE_APP_VERSION})`;
};

export const concatVal = (arrOfObjects, key: string) => {
  return arrOfObjects.reduce((acc, obj) => {
    return acc.concat(obj[key]);
  }, []);
};

export const toTitleCase = (input: string) => {
  if (!input) {
    return '';
  }
  input = input.toString().toLowerCase();
  return input.charAt(0).toUpperCase() + input.slice(1);
};
