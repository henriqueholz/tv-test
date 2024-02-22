interface ObjectType {
  [key: string]: any;
}

export const getObjectByKey = <T extends ObjectType>(
  array: T[],
  key: keyof T,
  value: T[keyof T]
): T | undefined => {
  return array.find((item) => item[key] === value);
};
