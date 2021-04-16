class Hero {
    constructor(x,y,width,height){
        var options = {
         restitution: 1,
         frictionAir: 0.02
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("superhero1.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
		translate(pos.x, pos.y);
		rectMode(CENTER)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.width, this.height)
		pop();
    }
}