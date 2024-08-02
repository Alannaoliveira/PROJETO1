function setup() {
  createCanvas(1000, 800);
  background("rgb(223,30,185)");
}

function draw() {
  
  fill("red");
  stroke("black")
  if(mouseIsPressed)
  circle(mouseX,mouseY,50,70);
}
