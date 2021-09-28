let xgoingback = false;
let ygoingback = false;
class ball{
    constructor(x,y,d) {
        this.pos = createVector(x,y);
        this.d = d;
        this.speed = createVector(10,25);
        this.acc = 0; 
        this.acc_changer = 0.1;
        this.c = ["green","white","red"];
        this.actual = this.c[1];
    }
    go(op) {
        if(this.speed.x == 0 | this.speed.y == 0) {
            noLoop();
        }
        if(op == "x+") {
            this.pos.x = this.pos.x + this.speed.x;
            this.speed.x = this.speed.x + this.acc;
            console.log(this.speed.x);
        } else if(op == "x-"){
            this.pos.x = this.pos.x - this.speed.x;
            this.speed.x = this.speed.x + this.acc;
            console.log(this.speed.x);
        } else if(op == "y+") { 
            this.pos.y = this.pos.y + this.speed.y;
            this.speed.y = this.speed.y + this.acc; 
            console.log(this.speed.y);
        } else if(op == "y-") {
            this.pos.y = this.pos.y - this.speed.y;
            this.speed.y = this.speed.y + this.acc; 
            console.log(this.speed.y);
        }
        
    }

    update() {
        if(this.speed.y <= 0 | this.speed.x <= 0 ) {
           // background(51);
            this.acc = 0;
            this.speed.x = 0; 
            this.speed.y = 0;
            //this.pos.x = 300;
            //this.pos.y = 300;
            console.log(this.speed.x);
            console.log(this.speed.y);
            this.show();
        } else {
            if(this.pos.x >= width) {
                xgoingback = true;
            } else if(this.pos.y >= height) {
                ygoingback = true;
            }
            if(this.pos.x <= 0) {
                xgoingback = false;
            } else if(this.pos.y <= 0) {
                ygoingback = false;
            }
    
            if(xgoingback){
                this.go("x-");
            } else {
                this.go("x+");
            }
            if(ygoingback) {
                this.go("y-");
            } else {
                this.go("y+");
            }

            this.acc = this.acc + this.acc_changer;
            if(this.acc >= 1.5){
                this.acc_changer = -0.1;
            }
            
        }       
    }

    show() {
        noStroke();
        fill(this.actual);
        circle(this.pos.x,this.pos.y,this.d);        
    }
}