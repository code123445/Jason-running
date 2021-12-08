var loadpath,path
var loadboy,boy1
var invisibleLeft,invisibleRight

function preload(){
  //pre-load images
  loadpath=loadImage('path.png')
loadboy=loadAnimation("Runner-1.png","Runner-2.png")
}


function setup(){
  createCanvas(400,400)
  //create sprites here
  path=createSprite(200,200,10,10);
  path.addImage(loadpath)
  path.velocityY=4

  boy1=createSprite(200,300,10,10);
  boy1.addAnimation("running",loadboy)
 // boy1.velocityY=4

boy1.scale=0.05


//Create a left and right boundary sprites and set its visible property as false

invisibleLeft=createSprite(70,200,10,400)
invisibleRight=createSprite(340,200,10,400)
invisibleLeft.visible=false
invisibleRight.visible=false




                                        
}


function draw() {
  background("0")
  if (path.y>400){
  path.y=height/2
}

//Make the boy move left and right with the mouse using MouseX in draw( ).
boy1.x=mouseX

//Write code to collide the boy with the left and right invisible boundaries.
boy1.collide(invisibleLeft)
boy1.collide(invisibleRight)

drawSprites()

}
