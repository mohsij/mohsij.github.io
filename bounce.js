var i = 0;
var framesCount = 0;
var isIncrementing = true;

function setup() {
  var myCanvas = createCanvas(500, 500);
  myCanvas.parent("bounceContainer");
}

function draw() {
  background(18, 24, 33);
  fill(255 - i, i, 255 - (i * 5));
  ellipse(
    width / 2 + (width / 4 * cos((i/100 * PI))),
    height / 2 + (height / 4 * sin((i/100 * PI))),
    50,
    50);
  if (framesCount == 0) {
    if (isIncrementing) {
      i+=2;
    } else {
      i-=2;
    }
    if (i == 100|| i == 0) {
      isIncrementing = !isIncrementing;
    }
  }
  framesCount++;
  framesCount %= 2;
}
