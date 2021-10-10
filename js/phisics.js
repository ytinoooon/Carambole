//Hit the wall
function hit_the_wall() {
    for(let l = 0; l <= amount;l++){
        if(golyok[l].pos.x >= width) {
            golyok[l].xgoingback = true;
        } else if(golyok[l].pos.y >= height) {
            golyok[l].ygoingback = true;
        }
        if(golyok[l].pos.x <= 0) {
            golyok[l].xgoingback = false;
        } else if(golyok[l].pos.y <= 0) {
            golyok[l].ygoingback = false;
        }
        //Increas/Decreas x/y
        if(golyok[l].xgoingback){
            golyok[l].go("x-");
        } else {
            golyok[l].go("x+");
        }
        if(golyok[l].ygoingback) {
            golyok[l].go("y-");
        } else {
            golyok[l].go("y+");
        }
    }    
}

function stop_and_deaccelerate() {
    for(let j = 0; j <= amount;j++ ) {
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