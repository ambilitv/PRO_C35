//Create variables here
var happydogimg,dog,dogimg;
var life = 0;
var foodstock,foodS;

function preload()
{
  //load images here
  
  dogimg = loadImage("images/dogImg1.png");
  happydogimg = loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  dog = createSprite(400,350);
  dog.addImage(dogimg);
  dog.scale =0.3;

  foodstock = database.ref('Food');
  foodstock.on("value",readstock);
  
}


function draw() { 
  
  background("lightgreen");
  textSize(20)
  text("Food Remaining:" +foodS, 200,200)
  if(keyDown(UP_ARROW)){

    writestock(foodS);
    dog.addImage(happydogimg);
  }

  drawSprites();
  //add styles here

}

function readstock(data){

  foodS = data.val();

}

function writestock(x){
  if(x<0){
    x=0;
  }else{

    x=x-1;
  }

  database.ref('/').update({Food:x})
}