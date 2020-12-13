export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const toHoursAndMinutes = (num) => {
  // remove ms
  num = num / 1000;
  // remove seconds
  num = num / 60;

  // get hours
  const hours = Math.floor(num / 60);
  // get minutes
  const minutes = Math.floor(num % 60);

  return hours + 'h ' + minutes + 'm';
};

export const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const count = (list, value, key) => {
  return key ? list.filter((item) => item[key] === value).length
    : list.filter((item) => item === value).length
};

export const containsObject = (obj, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }
  return false;
};

export const getIndexInArray = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

export const getIdIndexInObjArray = (array, key, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === id) {
      return i;
    }
  }
  return -1;
};

export const getIdValuesFromObjectArray = (array, key = 'id') => {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push(array[i][key])
  }
  return tempArray;
}

export const getIdValuesObjectFromObjectArray = (array, key = 'id') => {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push({id: array[i][key]})
  }
  return tempArray;
}

export const getObjectFromArrayByKeyValue = (array, key, value) => {
  try {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  } catch (e) {
    //should we return it?
  }
  return null;
}

export function findValues(obj, key) {
  return findValuesHelper(obj, key, []);
}

export function findValuesHelper(obj, key, list) {
  if (!obj) return list;
  if (obj instanceof Array) {
    for (let i in obj) {
      list = list.concat(findValuesHelper(obj[i], key, []));
    }
    return list;
  }
  if (obj[key]) list.push(obj[key]);

  if ((typeof obj == "object") && (obj !== null)) {
    let children = Object.keys(obj);
    if (children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        list = list.concat(findValuesHelper(obj[children[i]], key, []));
      }
    }
  }
  return list;
}

export function convertParameterObjectToString(parameters) {
  let parameterString = ''
  let isFirstParameter = true;
  for (const [key, value] of Object.entries(parameters)) {
    parameterString += `${isFirstParameter ? '?' : '&'}${key}=${value}`
    isFirstParameter = false;
  }
  return parameterString;
}

export const hashCode = (str) => {
  let hash = 0, i, chr;
  if (str.length === 0) {
    return hash;
  }
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export function truncateString(str, num) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + '...'
}
