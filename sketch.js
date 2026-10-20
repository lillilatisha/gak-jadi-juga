let colors = [];

function setup() {
  createCanvas(710, 400, WEBGL);
  angleMode(DEGREES);
  strokeWeight(2);
  noFill();

  let palette = ["#EB27F5", "#FFF200", "#00FFF7", "lime", "#FF1900", "#0033FF"];
  for (let i = 0; i < 6 * 12; i++) {
    colors.push(random(palette));
  }
}

function draw() {
  background(0);
  orbitControl();

  let i = 0;
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();
      stroke(colors[i]);
      i++;

      rotateZ(zAngle);
      rotateX(xAngle);
      translate(0, 100, 0);
      circle(0, 0, 50);   
      pop();
    }
  }
}