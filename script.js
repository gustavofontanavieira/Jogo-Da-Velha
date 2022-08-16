let player = 0;
let squares = document.querySelectorAll(".square");

const getElement = (element) => {
  if (element.textContent != "") {
    document.querySelector(".alert").textContent =
      "Por favor, selecione um quadrado que ainda não foi preenchido";
  } else {
    document.querySelector(".alert").textContent = "";
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
