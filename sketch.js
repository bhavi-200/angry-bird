const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(800,350);
    log1 = new Log(800,250,300,PI/2);
    box3 = new Box(700,230,70,70);
    box4 = new Box(900,230,70,70);
    pig2 = new Pig(800,200);
    log2 = new Log(800,190,300,PI/2);
    log3 = new Log(750,150,150,PI/6);
    box5 = new Box(800,150,70,70);
    log4 = new Log(870,150,150,-PI/6);
    bird = new Bird(100,100);




}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    box5.display();
    log4.display();
    bird.display();

}