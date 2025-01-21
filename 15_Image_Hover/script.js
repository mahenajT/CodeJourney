// Create 100 blocks dynamically
for (let i = 0; i < 100; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  document.querySelector(".img-blocks").appendChild(block);
}
// Set the reset duration
const resetDuration = 300;

// Select all blocks
const blocks = document.querySelectorAll(".block");

// Add event listeners to all blocks
blocks.forEach((block) => {
  let timeoutID;

  block.addEventListener("mouseover", () => {
    clearTimeout(timeoutID);
    block.classList.add("active");
    timeoutID = setTimeout(() => {
      block.classList.remove("active");
    }, resetDuration);
  });
});
