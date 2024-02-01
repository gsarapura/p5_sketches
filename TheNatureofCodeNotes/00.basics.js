const height = 740;
const width = 640;

function setup() {
    createCanvas(width, height);
    // background(90, 100, 250);
    background(255);
    circle(width / 2, height / 2, 200);
}


function draw() {
    rectMode(CENTER);
    // square(random(width), random(height), 20);
    fill(0, 25);
    stroke(0, 50);
    circle(random(width),random(height), random(16, 64));
}