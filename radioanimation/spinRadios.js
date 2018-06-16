new p5();

var radioCircle = [];
var div;
var canvas;
var allRadios;
var totalRadius = 200;
var numCircles = round(random(1, 30));
var numRadios = round(random(6, 50));

var spinSpeed = round(random(1, 10));
var fps = round(random(1, 10));


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

function randomCheckedPattern() {
    let remainder = round(random(2, numRadios));

    for (baba = 0; baba < allRadios.length; baba++) {
        if (baba % remainder == 1) {
            allRadios[baba].checked = true;
        }
        else {
            allRadios[baba].checked = false;
        }
    }
    
}

function setup() {
    noCanvas();
    div = createDiv().id("container");
    div.size(totalRadius * 2 + 16, totalRadius * 2 + 14.5);
    div.position(windowWidth / 2 - totalRadius, windowHeight / 2 - totalRadius);


    for (p = 0; p < numCircles; p++) {
        let Inset = p / numCircles * totalRadius;
        let Radius = totalRadius - Inset;

        drawCircle(Inset, Radius, p)
    }

    allRadios = document.querySelectorAll("input");

    // todo: changing the direction and spinning speed of each row
    div.style("animation", "spin infinite " + spinSpeed + "s linear")

    // framerate determines the speed of the randomCheckedPattern function
    frameRate(fps);
}

function draw() {
    randomCheckedPattern()
}
