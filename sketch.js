//Create variables here
var dog,happyDog,database,foodS,foodStock,happyDogImg,DogImg;
var database;
function preload()
{
  //load images here
  happyDogImg = loadImage("happydog.png");
happyDog.addImage("happyDog",happyDogImg);
  dogImg = loadImage("Dog.png");
  dog.addImage("dog",DogImg);  

}

function setup() {
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  var canvas = createCanvas(500,500);
  ball = createSprite(200,250,30,30);
  
}


function draw() {  
  background(46,139,87) 
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog.png);
}

  drawSprites();
  text(foodStock);
  textSize(40);
  fill("red");
  stroke();
  //add styles here

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
database.ref('/').update({
  Food:x
})
}

