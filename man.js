cnv = document.getElementById("mycanvas");
ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// makes array for objects
let blocks = createrandomblocksarray(10);

requestAnimationFrame(draw);

// Main loop

function draw() {
  backround("black");

  for (let p = 0; p < blocks.length; p++) {
    drawblocks(blocks[p]);
    moveblocks(blocks[p]);
    blocks[p].onclick = handlerdraw();
  }
  document.addEventListener("click", handlerdraw);

  requestAnimationFrame(draw);
}
document.addEventListener("mousedown", handlerdraw);

function handlerdraw() {
  console.log("ryan");
  for (let p = 0; p < blocks.length; p++) {}
}

// removes or adds a blocks particle via a up and down keys
setInterval(remove, 3000);
function remove() {
  blocks.pop(randomblocks());
}
