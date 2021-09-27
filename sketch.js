let golyo;
function setup() {
    createCanvas(600,600);
    for(let i = 0; i < 1 ; i++) {
        golyo[i] = new ball(width/2,height/2,20,random(1,50),random(1,50));
    }
}

function draw() {
    background(61);
    for(let i = 0; i < 1 ; i++) {
        golyo.show();
        golyo.update();
  }
}