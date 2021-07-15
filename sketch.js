var cat,mouse;
var catImage1,catImage2,catImage3;
var mouseImage1,mouseImage2,mouseImage3;
var bg

function preload() {
bg=loadImage("images/garden.png")
catImage1=loadAnimation("images/cat1.png")
catImage2=loadAnimation("images/cat2.png","images/cat3.png")
catImage3=loadAnimation("images/cat4.png")
mouseImage1=loadAnimation("images/mouse1.png")
mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImage3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
cat=createSprite(800,600,20,20);
mouse=createSprite(200,600,20,20);
cat.addAnimation("catsleeping",catImage1)
cat.scale=0.2
mouse.addAnimation("mousestanding",mouseImage1)
mouse.scale=0.15


}

function draw() {
 background(bg);
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catimage",catImage3)
    cat.x=300
    cat.scale=0.2
    cat.changeAnimation("catImage")
    mouse.addAnimation("mouseImage",mouseImage3)
    mouse.scale=0.15
    mouse.changeAnimation("mouseImage")
}

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catrunning",catImage2)
    cat.changeAnimation("catrunning")
    mouse.addAnimation("teasing",mouseImage2)
    mouse.frameDelay=25
    mouse.changeAnimation("teasing")
}


}
