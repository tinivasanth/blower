
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;

var balls;
var blowers;
var blowerMouths;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

 // blowers = new Blower(200,690,600,20);
 // blowerMouths=new BlowerMouth(400,690,600,20);
  blowers = new Blower(300, 420, 300, 20);
  blowerMouths = new BlowerMouth(400,400, 100, 90);

 rectMode(CENTER);
 ellipseMode(RADIUS);
}

function draw() {
  background(51);  
 
  Engine.update(engine);

 blowers.display();
 blowerMouths.display();

 
}