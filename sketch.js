let golyo;
function setup() {
    createCanvas(1900,950);
    golyo = new ball(width/2,height/2,500);
}

function draw() {
    background(61);
    golyo.update();
    golyo.show();
}