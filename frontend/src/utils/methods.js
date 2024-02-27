export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const isInvalidAndTouched = (errors, touched) => {
  return Object.keys(errors).some((key) => touched[key]);
};
