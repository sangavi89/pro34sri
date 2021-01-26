const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage, superhero1;
var ground, block1,sling,monster;

function preload() {
//preload the images here
backgroundImage = loadImage("/Project-34-main/GamingBackground.png");




}

function setup() {
  createCanvas(2000, 800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 600, 1000, 50);
  superhero1 = new Hero(400, 800, 250);
  sling = new Fly(superhero1.body, {x:500,y:50});
  block1 = new Block(600, 100, 70, 70);
  
  monster = new Monster(1100,550,300);

  
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  ground.display();
  block1.display();

  superhero1.display();
  sling.display();

monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero1.body, {x:mouseX, y:mouseY});
}