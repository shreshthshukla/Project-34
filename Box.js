class Box {
    constructor(x,y,angle){
        var options = {
            restitution: 1,
            density:0.5,
            friction: 0.3,
        }
        this.body = Bodies.rectangle(x,y,70,70,height,options)
        this.width = 70;
        this.height = 70;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}