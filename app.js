const container = document.getElementById("container");
const input = document.getElementById("grid-counts");
const controls = document.getElementById("controls");
const random = document.getElementById("random");
let count = parseInt(input.dataset.count);
const clear = document.getElementById("clear");

// creat grids items

const makeRows = (rows, cols) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).classList.add("items");
  }
};
makeRows(count, count);

const debounce = (cb, delay = 400) => {
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

const resize = () => {
  inputVal = parseInt(input.value);
  if (Number.isNaN(inputVal)) return;
  makeRows(inputVal, inputVal);
};

const setRBG = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

let root = document.documentElement;
controls.addEventListener("click", (e) => {
  let btn = e.target;
  random.dataset.color = setRBG();
  if (!btn.dataset.color) return;
  if (btn.dataset.color === "gray") {
    container.style.background = "black";
  }
  root.style.setProperty("--background-color", btn.dataset.color);
});

clear.addEventListener("click", () => {
  window.location.reload();
});

input.addEventListener("input", debounce(resize, 400));

container.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("items")) return;
  e.target.classList.add("grid-items");
});
