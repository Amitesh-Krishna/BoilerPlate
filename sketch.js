var movRect,fixrect;


function setup() {

  createCanvas(800,400);
  movRect = createSprite(400, 200, 50, 50);
  movRect.shapeColor = "red";

  fixrect = createSprite(250,250,100,50);
  fixrect.shapeColor = "red";
}

function draw() {

  background(0,0,0);

  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  checkTouch();

  drawSprites();

}

function checkTouch(){

	if((movRect.x - fixrect.x <= fixrect.width/2 + movRect.width/2)&&
	(fixrect.x - movRect.x <= fixrect.width/2 + movRect.width/2)&&
	(movRect.y - fixrect.y <= fixrect.height/2 + movRect.height/2)&&
	(fixrect.y - movRect.y <= fixrect.height/2 + movRect.height/2))
	{
		movRect.shapeColor = "green";
	}
	else{
		movRect.shapeColor = "red";
	}



}