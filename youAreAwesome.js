displayText = false;

function setup() {
  var myCanvas = createCanvas(500, 500);
  myCanvas.parent("youAreAwesomeContainer");
}

function draw() {
  background(18, 24, 33);
  textSize(25);
  textAlign(CENTER);
  if (displayText) {
    // Keep the random colours bright enough to read on the dark background.
    fill(random(120, 255), random(120, 255), random(120, 255));
    text("You are awesome!",250,250);
  }
  else {
    fill(139, 152, 168);
    text("Click me!",250,250);
  }
}

function mouseClicked() {
  displayText = true;
}
