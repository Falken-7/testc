var Raindrop = [];
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  if(frameCount % 1 === 0){
    var Raindrop = new raindrop(random(0, windowWidth), -100, 3, random(20, 50));
    Raindrop.push(raindrop);
  }
  for(var i = 0; i < Raindrop.length; i++){
    Raindrop[i].fall(7);
    Raindrop[i].display();
  }
  
  drawSprites();
}
