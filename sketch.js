var box 
function setup() {
  
  createCanvas(400,400);
  box = createSprite (33,41,50,50);
}

function draw() 
{
  background(30);
  if (keyDown(RIGHT_ARROW)) {
    box.x = box.x +1
  }
drawSprites ();
}




