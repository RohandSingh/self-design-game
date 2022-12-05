 var bg, bgimg
var player,playerimg
 var shooter

 function preload() {
    bgimg=loadImage("/assets/bg.jpeg")
    playerimg = loadImage("/assets/shooter_2.png")
    shooter = loadImage("/assets/shooter_3.png")

 }
 
 

 function setup() {
    createCanvas(windowWidth, windowHeight)
    
    //creating background
    bg = createSprite(displayWidth/2, displayHeight/2, 20,20)
    bg.addImage(bgimg)
    bg.scale = 1.5
    

    player = createSprite(200,600, 10,10)
    player.addImage(playerimg)
    player.scale = 0.2


 }




function draw(){
background("red")
//moving player
if(keyDown("UP_ARROW")) {
player.y -=30
}

if(keyDown("DOWN_ARROW")) {
player.y +=30
}

if(keyDown("LEFT_ARROW")) {
player.x -=30

}

if(keyDown("right_arrow")) {
player.x +=30


}
if(keyWentDown("SPACE")) {
player.addImage(shooter)


}

if(keyWentUp("SPACE")) {
  player.addImage(playerimg)



}





drawSprites();
}