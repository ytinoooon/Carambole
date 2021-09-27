let xgoingback = false;
let ygoingback = false;
class ball{
    constructor(x,y,d,xs,ys) {
        this.pos = createVector(x,y);
        this.d = d;
        this.speed = createVector(xs,ys);
        this.acc = -0.1; 
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
        if(this.pos.x >= width) {
            xgoingback = true;
        } else if(this.pos.y >= height) {
            ygoingback = true;
        }
        if(this.pos.x <= 0) {
            xgoingback = false;
        } else if(this.pos.y <= 0) {
            ygoingback = false;
            this.c = random("green","purple","red");
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
    }

    show() {
        noStroke();
        fill(255);
        circle(this.pos.x,this.pos.y,this.d);        
    }
}