new p5();

var radioCircle = [];
var totalRadius = 200;
var div;
var canvas;
var numCircles = round(random(1, 20))
var numRadios = round(random(8, 20));
var allRadios;
var speed;

class Radio {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
        this.button = createRadio().position(this.x, this.y);
        this.button.option("", value);
        this.button.parent("container");

    }

    // move(mx, my) {
    //     this.x = this.x + mx;
    //     this.y = this.y + my;
    //     this.button.position(this.x, this.y);
    // }

}

function drawCircle(Inset, Radius, value) {
    for (var i = 0; i < numRadios; i++) {
        xpos = Inset + Radius;
        ypos = Inset + Radius;
        xpos = xpos + Radius * Math.sin((i / numRadios) * PI * 2);
        ypos = ypos + Radius * Math.sin((i / numRadios) * PI * 2 - PI / 2);
        radioCircle.push(new Radio(xpos, ypos, value));
    }
}



function setup() {
    noCanvas();
    div = createDiv().id("container");
    div.size(totalRadius * 2 + 16, totalRadius * 2 + 15)
    div.position(windowWidth / 2 - totalRadius, windowHeight / 2 - totalRadius)

    for (p = 0; p < numCircles; p++) {
        let Inset = p / numCircles * totalRadius;
        let Radius = totalRadius - Inset;

        drawCircle(Inset, Radius, p)
    }

    allRadios = document.querySelectorAll("input");
    let remainder = round(random(2, numRadios));
    for (baba = 0; baba < allRadios.length; baba++) {
        if (baba % remainder == 1) {
            allRadios[baba].checked = true;
        }
    }

    speed = round(random(1, 10))
    div.style("animation", "spin infinite " + speed + "s linear")
    frameRate(30);
}

function draw() {}