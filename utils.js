const setRBG = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

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
