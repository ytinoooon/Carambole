let golyok = [];
let a = [1,2,3,4,5];
let num = 5;

function setup() {
    createCanvas(600,400);
    for(let i = 0; i < num; i++) {
        golyok[i] = new ball(random(1,600-1),random(1,400-1),20,random(-0.1,0.01));
    }
}

 
 
function draw() {
    background(61);
    for(var k = 0; k < golyok.length;k++) {
        for(var p = 0; p < golyok.length;p++) {
            if(k === p){
                continue;
            } else {
                let hit =  collideCircleCircle(golyok[k].pos.x,golyok[k].pos.y, 20,golyok[p].pos.x,golyok[p].pos.y,20);
                if(hit) {
                    console.log("golyok["+k+"] hits golyok["+p+"]" );
                }
            }
            
        } 
    }
    for(let j = 0; j < num; j++){
        golyok[j].update();
        golyok[j].show();
    }
}