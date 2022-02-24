


const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;

var engine, world;

var Dois;
var Tres;

var gamestate = Dois;

function setup() {
  createCanvas(400,400);


//criando mecanismo e mundo
  engine = Engine.create();
  world = engine.world;
  
  //criando corpo bola
  var ball_options = {
    restitution: 1.,
    frictionAir: 0.01
  }

  ball = Bodies.circle(100, 10, 20, ball_options)
  World.add(world,ball);
   
   
   var ground_options ={
     isStatic: true
   };
  
  
//crie o solo

ground= Bodies.rectangle(200, 390, 400, 15, ground_options)
World.add(world,ground);
//adicione ao mundo

  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  
  

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,15);
  //escreva uma função de retângulo para exibir o solo.
 

  if(gamestate === Dois){

    //movimentod();
    
    if(keyCode = 32){
      gamestate = Tres;
      console.log("espaço apertado")
    }
    

  }else if(gamestate === Tres){

    Engine.update(engine);

    //if(keyDown(space)){
    //  gamestate === Dois;
    //}

    console.log("Tres")

    //movimentot();
  
  
}

}

function movimentod(){
  if(keyDown("left_arrow")){
    ball.x = ball.x - 10;
  }
  if(keyDown("right_arrow")){
    ball.x = ball.x + 10;
  }
  if(keyDown("up_arrow")){
    ball.y = ball.y - 10;
  }
  if(keyDown("down_arrow")){
    ball.y = ball.y + 10;
  }
}

function movimentot(){
  if(keyDown("left_arrow")){
    Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
  }
  if(keyDown("right_arrow")){
    Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }
  if(keyDown("up_arrow")){
    Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  }
}