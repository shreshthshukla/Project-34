const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine, world;
var bg, backgroundImg
function preload(){
    getTime();
}

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(550, 500, 1150, 20);

    monster = new Monster(1000,450,250);

    // ground = new Ground(600, 600, 1200, 20);

    hero = new Hero(250,450,400,200);
    rope = new Rope(hero.body, { x: 300, y: 50 });
    //   monster = new Monster(1100,550,300);

    box1 = new Box(600, 450, 70, 70);
    box2 = new Box(600, 380, 70, 70);
    box3 = new Box(730, 450, 70, 70);
    box4 = new Box(730, 380, 70, 70);
    box5 = new Box(730, 310, 70, 70);
}
function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    ground.display()
    monster.display();
    hero.display()
    // rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    // text(mouseX+","+mouseY,200,200)
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(hero.body,hero.body.position,{x:10,y:0});
  
	}
}

async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json();
    var datetime = responseJson.datetime
    var hour = datetime.slice(11,13)

    if(hour>=06 && hour<=18){
        bg = "GamingBackground.png"
    }
    else{
        bg = "gamingbackground1.jpg"
    }
    backgroundImg = loadImage(bg)
}