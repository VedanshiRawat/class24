const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, iron, stone, rubber;

var options = {
    restitution:0.3,
    friction:5,
    density:1,

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron();
    stone = new Stone();
    rubber = new Rubber();
  
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
    

}