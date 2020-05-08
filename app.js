const board = document.getElementById("board");
const input = document.getElementById("grid-counts");
const controls = document.getElementById("controls");
const random = document.getElementById("random");
let count = parseInt(input.dataset.count);
const clear = document.getElementById("clear");

// creat grid items

const makeRows = (rows, cols) => {
  board.style.setProperty("--grid-rows", rows);
  board.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    board.appendChild(cell).classList.add("items");
  }
};
makeRows(count, count);

const resize = () => {
  inputVal = parseInt(input.value);
  if (Number.isNaN(inputVal)) return;
  makeRows(inputVal, inputVal);
};

let root = document.documentElement;
controls.addEventListener("click", (e) => {
  let btn = e.target;
  random.dataset.color = setRBG();
  if (!btn.dataset.color) return;
  if (btn.dataset.color === "gray") {
    board.style.background = "black";
  }
  root.style.setProperty("--background-color", btn.dataset.color);
});

clear.addEventListener("click", () => {
  window.location.reload();
});

input.addEventListener("input", debounce(resize, 400));

board.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("items")) return;
  e.target.classList.add("grid-items");
});
