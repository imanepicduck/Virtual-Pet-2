var doggo; 
var happyDoggo; 
var database; 
var foodS;
var foodStock; 

function preload()
{
  doggo.addImage("sprites/dogImg.png");
  happyDoggo.addImage("sprites/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  doggo = createSprite(250,250,20,20); 
  happyDoggo = createSprite(250,250,20,20); 
  foodStock = database.ref('Food');
  foodStock.on("value",readStock); 
}

function draw() {  
  background(46, 139, 87);  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    doggo.addImage(dogImg); 
  }
  drawSprites();
 }

function writePosition(x,y){
  database.ref('foodStock/position').set({
      'x': position.x + x, 
      'y': position.y + y, 
  }

  )
}

function readPosition(data){
  position = data.val(); 
  foodStock.x = position.x;
  foodStock.y = position.y;
}

function showError(){
  console.log("error in writing to database"); 
}