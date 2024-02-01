const width = 500;
const height = 500;

class Walker {
    constructor(){
        this.x = width / 2;
        this.y = height/ 2;
    }

    show() {
        stroke(100);
        point(this.x, this.y);

    }

    step() {
        let choice = floor(random(4));

        if (choice === 0) {
            this.x = this.x + 100;
          } else if (choice === 1) {
            // this.x--;
            this.x = this.x - 100;
          } else if (choice === 2) {
            // this.y++;
            this.y = this.y + 3;
          } else if (choice === 2) {
          } else {
            this.y--;
          }
    }
}

let walker; 

function setup(){
    createCanvas(width, height);
    walker = new Walker();
    background(230);
}


function draw() {
    walker.step();
    walker.show();
}

