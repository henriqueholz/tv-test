export const getObjectByKey = (array, key, value) => {
  return array.find((item) => item[key] === value);
};
