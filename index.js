// Your code here
// Select the dodger element
const dodger = document.getElementById("dodger");

// Function to move dodger left
function moveDodgerLeft() {
  const leftPosition = parseInt(dodger.style.left.replace("px", ""), 10);

  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 10}px`;
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const leftPosition = parseInt(dodger.style.left.replace("px", ""), 10);

  if (leftPosition < 360) { // Assuming 400px container width
    dodger.style.left = `${leftPosition + 10}px`;
  }
}

// Add event listeners to move with arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
