let player = 0;
let squares = document.querySelectorAll(".square");
const textAlert = document.querySelector(".alert");

const getElement = (element) => {
  if (element.textContent != "") {
    textAlert.textContent =
      "Por favor, selecione um quadrado que ainda não foi preenchido";
  } else {
    textAlert.textContent = "";
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

document.querySelector(".btn-restart").addEventListener("click", () => {
  textAlert.textContent = "";
  squares.forEach((element) => {
    element.textContent = "";
  });
});
