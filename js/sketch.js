let golyok = [];
let amount = 2;
let d = 20;
let limit = 5 ;
function setup() {
    createCanvas(1200,600);
    for(let i = 0; i < amount; i++) {
        golyok[i] = new ball(random(1,1199),random(1,599),d);
    }
}
function phisics() {
    hit_the_wall();
    stop_and_deaccelerate();
}
function draw() {
    background(61);
    for(let k = 0; k < amount; k++){   
        golyok[k].show();
    }
    phisics();
  
}