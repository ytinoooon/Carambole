let golyok = [];
let num = 5;

function setup() {
    createCanvas(600,400);
    for(let i = 0; i < num; i++) {
        golyok[i] = new ball(random(1,600-1),random(1,400-1),20,random(-0.1,0.1));
    }
}
function draw() {
    background(61);
    for(let j = 0; j < num; j++){
        golyok[j].update();
        golyok[j].show();
    }
}