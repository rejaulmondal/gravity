
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var boxes=[];
var gSlider;
var ground;
 
function setup() {
    createCanvas(800, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0,100, 50);
    gSlider.position(350, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(400,340,800,30);
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Box(mouseX,mouseY,random(20,50),random(20,50)));
    }
}
 
function draw() {
    background("grey");
    Engine.update(engine);
    // Draw all the elements including the slider that 

    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    //boxes.velocityY = boxes.velocityY + fVal;
    engine.world.gravity.y = fVal
 
    // Use a for loop to show all the boxes
    for(var i = 0; i < boxes.length; i ++){
        boxes[i].show();
    }

    ground.display();
    console.log(this.boxes.body);
}

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
/*
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
        restitution:0.05,
        friction:0.2
    }
 
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
    }
}
*/