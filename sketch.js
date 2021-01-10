const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3,block4,block5,block6,block7,block8,block9,
block10,block11,block12,block13,block14,block15,block16,block17,
block18, block19, block20, block21, block22, block23, block24, block25;
var stand1, stand2, ground, polygon, slingshot;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  //top
  block1 = new Block(620, 120);
  //second
  block2 = new Block(585,170);
  block3= new Block(620, 170);
  block4 = new Block(655, 170);
  //third
  block5 = new Block(550, 220);
  block6 = new Block(585, 220);
  block7 = new Block(620, 220);
  block8 = new Block(655, 220);
  block9 = new Block(690, 220);
  //fourth
  block10 = new Block(515, 270);
  block11 = new Block(550, 270);
  block12 = new Block(585, 270);
  block13 = new Block(620, 270);
  block14 = new Block(655, 270);
  block15 = new Block(690, 270);
  block16 = new Block(725, 270);
  
  stand1 = new Stand(600, 325, 260, 20);

  //top
  block17 = new Block(1000, 70);
  //second
  block18 = new Block(965,120);
  block19= new Block(1000, 120);
  block20 = new Block(1035, 120);
  //third
  block21 = new Block(930, 170);
  block22 = new Block(965, 170);
  block23 = new Block(1000, 170);
  block24 = new Block(1035, 170);
  block25 = new Block(1070, 170);

  stand2 = new Stand(1000, 250, 220, 20);
  polygon = new Polygon(50, 200)
  slingshot = new SlingShot(polygon.body, {x:200,y:200})

 

  ground = new Ground(width/2, 400, width, 20);
}
function draw(){
  background(0);
  textSize(20);
  fill(255);
  text("Press space for another chance!", 100, 100);
  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  stand1.display();
  stand2.display();
  polygon.display();
  ground.display();
  slingshot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode ===32){
      slingshot.attach(polygon.body);
  }
}
