let golyo;
function setup() {
    createCanvas(600,600);
    golyo = new ball(width/2,height/2,20);
}

function draw() {
    background(61);
    golyo.show();
    golyo.update();
}