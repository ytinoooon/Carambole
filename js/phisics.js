//Hit the wall
let xgoingback = false;
let ygoingback = false;
function hit_the_wall() {
    for(let l = 0; l < amount;l++){
        if(golyok[l].pos.x >= width) {
            xgoingback = true;
        } else if(golyok[l].pos.y >= height) {
            ygoingback = true;
        }
        if(golyok[l].pos.x <= 0) {
            xgoingback = false;
        } else if(golyok[l].pos.y <= 0) {
            ygoingback = false;
        }
        //Increas/Decreas x/y
        if(xgoingback){
            golyok[l].go("x-");
        } else {
            golyok[l].go("x+");
        }
        if(ygoingback) {
            golyok[l].go("y-");
        } else {
            golyok[l].go("y+");
        }
    }    
}

function stop_and_deaccelerate() {
    for(let j = 0; j < amount;j++ ) {
        if(golyok[j].speed.x <= 0 && golyok[j].speed.y <= 0 ){
            golyok[j].stop();
        } else if(golyok[j].speed.x >= limit && golyok[j].speed.y >= limit) {
            golyok[j].deacc();
        } else {
            golyok[j].inacc();
            golyok[j].accacc();
        }
    }
}