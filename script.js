let flowers = [];
let bouquetSize = 30;

function openCard() {
    document.querySelector(".card-container").style.display = "none";
    document.getElementById("flower-container").classList.remove("hidden");
    setupCanvas();
}

function setupCanvas() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('flower-container');
    for (let i = 0; i < bouquetSize; i++) {
        let x = width / 2 + random(-150, 150);
        let y = height + random(50, 200);
        flowers.push(new Flower(x, y, random(10, 30), random(50, 100)));
    }
}

function draw() {
    background(255, 230, 242);
    for (let flower of flowers) {
        flower.bloom();
        flower.show();
    }
}

class Flower {
    constructor(x, y, size, maxSize) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.maxSize = maxSize;
        this.growing = true;
        this.ySpeed = random(1, 3);
    }

    bloom() {
        if (this.growing && this.size < this.maxSize) {
            this.size += 0.5;
        }
        if (this.y > height / 2) {
            this.y -= this.ySpeed;
        } else {
            this.growing = false;
        }
    }

    show() {
        push();
        translate(this.x, this.y);
        for (let i = 0; i < 10; i++) {
            rotate(TWO_PI * i / 10);
            this.drawPetal();
        }
        this.drawCenter();
        pop();
    }

    drawPetal() {
        fill(random(200, 255), random(50, 150), random(50, 150), 180);
        noStroke();
        beginShape();
        vertex(0, 0);
        bezierVertex(this.size, -this.size, this.size * 2, -this.size, this.size * 2, 0);
        bezierVertex(this.size * 2, this.size, this.size, this.size, 0, 0);
        endShape(CLOSE);
    }

    drawCenter() {
        fill(255, 204, 0);
        ellipse(0, 0, this.size * 0.5, this.size * 0.5);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
