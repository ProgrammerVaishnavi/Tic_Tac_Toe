let boxes = document.querySelectorAll(".game-board button");
let resetBtn = document.querySelector(".reset");

let turn = "X"; // first player
let gameOver = false;

// Winning patterns (indexes of boxes)
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Handle box click
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!gameOver && box.textContent === "") {
      box.textContent = turn; // set value
      box.style.color = turn === "X" ? "red" : "blue";

      if (checkWinner()) {
        alert(turn + " Wins 🎉");
        gameOver = true;
      } else if (isDraw()) {
        alert("It's a Draw 🤝");
        gameOver = true;
      } else {
        // switch turn
        turn = turn === "X" ? "O" : "X";
      }
    }
  });
});

// Check winner
function checkWinner() {
  return winPatterns.some(pattern => {
    let [a, b, c] = pattern;
    return (
      boxes[a].textContent !== "" &&
      boxes[a].textContent === boxes[b].textContent &&
      boxes[a].textContent === boxes[c].textContent
    );
  });
}

// Check draw
function isDraw() {
  return [...boxes].every(box => box.textContent !== "");
}

// Reset game
resetBtn.addEventListener("click", () => {
  boxes.forEach(box => (box.textContent = ""));
  gameOver = false;
  turn = "X";
});
