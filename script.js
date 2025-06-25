let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let newbtn = document.querySelector(".newbtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector(".resetbtn");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "#f07167";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "#124559";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};

const resetgame = () => {
  turn0 = true;
  enableboxes();
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableboxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let positionval1 = boxes[pattern[0]].innerText;
    let positionval2 = boxes[pattern[1]].innerText;
    let positionval3 = boxes[pattern[2]].innerText;
    if (positionval1 != "" && positionval2 != "" && positionval3 != "") {
      if (positionval1 === positionval2 && positionval2 === positionval3) {
        console.log("winner is", positionval1);
        showWinner(positionval1);
      }
    }
  }
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
