function setup() {
  createCanvas(800, 750)
  frameRate(4)
}

function draw() {
  let randomRGB = Math.floor(Math.random() * 256); 
  background(randomRGB, 200, randomRGB)
  let randomNumber = Math.floor(Math.random() * height)
  // line(randomNumber, 0, 400, randomNumber)
  // quad(30, 30, randomNumber, 40, randomNumber, 50, randomNumber, 60)
  triangle(200, 200, randomNumber, randomNumber, 500, randomNumber)
  triangle(randomNumber, randomNumber, 300, 499, randomNumber, randomNumber)
  triangle(randomNumber, 399, randomNumber, 499, 500, randomNumber)
}

