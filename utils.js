const debounce = (cb, delay = 500) => {
  let timeoutQ;
  return (...args) => {
    if (timeoutQ) {
      clearTimeout(timeoutQ);
    }
    timeoutQ = setTimeout(() => {
      cb.apply(null, args);
    }, delay);
  };
};
