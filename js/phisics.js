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
// accelerate deaccelerate stop
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
// hit another ball
function collision() {
    for(var k = 0; k < golyok.length;k++) {
        for(var p = 0; p < golyok.length;p++) {
            if(k === p){
                continue;
            } else {
                let hit =  collideCircleCircle(golyok[k].pos.x,golyok[k].pos.y, 20,golyok[p].pos.x,golyok[p].pos.y,20);
                if(hit) {
                    golyok[k].stop();
                    golyok[p].stop();
                    console.log("golyok["+k+"] hits golyok["+p+"]" );
                }
            }

        } 
    }
}