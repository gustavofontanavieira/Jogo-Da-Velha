let player = 0;
let squares = document.querySelectorAll(".square");
let arr = [];

const getElement = (element) => {
  if (element.textContent != "") {
    document.querySelector("h5").textContent = "Chega fi, cabo a graça";
  } else {
    if (player == 0) {
      element.textContent = "X";
      player = 1;
    } else {
      element.textContent = "O";
      player = 0;
    }
  }
};

squares.forEach((element) => {
  element.addEventListener("click", () => {
    getElement(element);
  });
});
