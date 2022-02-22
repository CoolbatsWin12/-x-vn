//Renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(200,390,400,20)
  ground2 = new Ground(200,10,400,20)
  ground3 = new Ground(10,200,20,400)
  ground4 = new Ground(390,200,20,400)
  ball1 = new Ball(50,60,30)

  button=createImg("push.png")
  button.position(65,75)
  button.size(50,50)
  button.mouseClicked(function(){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0.5,y:-0.2})
  })
}

function draw() {
  background(51);
  Engine.update(engine);
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ball1.display()
}

