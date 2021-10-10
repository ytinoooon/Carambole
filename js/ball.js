
// VARIABLES FOR CLASS
let sx = 0.0000000000000000000001; // THE 
let sy = 0.0000000000000000000001; //   SPEEDS
let ax = 0; // THE 
let ay = 0; //   ACCELERATIONS
let axc = 0.01;// THE 
let ayc = 0.01;//   ACCELERATION CHANGERS

// THE CLASS
class ball {
    constructor(x,y,d) {
        this.xgoingback = false;
        this.ygoingback = false;
        this.pos = createVector(x,y);// position
        this.d = d; // diameter
        this.speed = createVector(sx,sy); // speed
        this.acc = createVector(ax,ay); // acceleration
        this.acc_change = createVector(axc,ayc);// acceleration changer
    }

    stop(){
        this.acc.x = 0;
        this.acc.y = 0;
        this.speed.x = 0;
        this.speed.y = 0;
        this.acc_change.x = 0; 
        this.acc_change.y = 0;
    }
    

    // MAKEING IT GO
    go(op) {
        if(op == "x+") {
            this.pos.x = this.pos.x + this.speed.x;
            console.log("x: " + this.pos.x);
        } else if(op == "x-"){
            this.pos.x = this.pos.x - this.speed.x;
            console.log("x: " + this.pos.x);
        } else if(op == "y+") { 
            this.pos.y = this.pos.y + this.speed.y;
            console.log("y: " + this.pos.y);
        } else if(op == "y-") {
            this.pos.y = this.pos.y - this.speed.y;
            console.log("y: " + this.pos.y);
        }        
    }

    // MAKEING IT ACCELERATE
    acc_func(po) {
        if(po == "x+") {
            this.speed.x = this.speed.x + this.acc.x;
        } else if(po == "x-"){
            this.speed.x = this.speed.x - this.acc.x;
        } else if(po == "y+") { 
            this.speed.y = this.speed.y + this.acc.y;
        } else if(po == "y-") {
            this.speed.y = this.speed.y - this.acc.y;
        } 
    }
    // MAKEING ACCELERATION TO INCREAS AND TO DECREAS
    acc_changing_func(op) {
        if(op == "x+") {
            this.acc.x = this.acc.x + this.acc_change.x;
        } else if(op == "x-"){
            this.acc.x = this.acc.x - this.acc_change.x;
        } else if(op == "y+") { 
            this.acc.y = this.acc.y + this.acc_change.y;
        } else if(op == "y-") {
            this.acc.y = this.acc.y - this.acc_change.y;
        } 
    }
    // helping functions accalaration
    inacc(){
        this.acc_func("x+");
        this.acc_func("y+");
    }
    deacc(){
        this.acc_func("x-");
        this.acc_func("y-");
    }
    accacc() {
        this.acc_changing_func("x+");
        this.acc_changing_func("y+");
    }
    update() {
        
    }

    // SHOWING THE BALL
    show() {
        noStroke();
        fill(255);
        circle(this.pos.x,this.pos.y,this.d);
    }

}