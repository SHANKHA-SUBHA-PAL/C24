const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var ball;

var box1,box2,box3,box4,box5;
var pig1,pig2,log1,log2,log3,log4;
var red;

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
pig1=new Pig(810,350);
log1=new Log(810,300,300,PI/2);
ground=new Ground(600,height,1200,20);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
pig2=new Pig(810,220);
log2=new Log(810,180,300,PI/2);
box5=new Box(810,160,70,70);
log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,-PI/7);
red=new Angrybird(100,100);
  /*var ground_options={

isStatic:true


  }
 ground=Bodies.rectangle(200,390,200,50,ground_options);
 World.add(world,ground);
 var ball_options={

restitution:1.2

 }
 ball=Bodies.circle(200,200,10,ball_options);
World.add(world,ball);*/

}

function draw() {
  background(0);
  Engine.update(engine);
box1.display();
box2.display();
ground.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
red.display();

/*rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,50)
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,10,10);*/



//drawSprites();
}