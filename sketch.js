var canvas;
var music;
var surface_1;
var surface_2;
var surface_3;
var surface_4;
var red_rect;
var blue_rect;
var green_rect;
var yellow_rect;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

//create 4 different surfaces

    music.play();

    surface_1 = createSprite(120,550,130,30);
    surface_1.shapeColor = "green";

    surface_2 = createSprite(280,550,130,30);
    surface_2.shapeColor = "yellow";

    surface_3 = createSprite(450,550,130,30);
    surface_3.shapeColor = "red";

    surface_4 = createSprite(630,550,130,30);
    surface_4.shapeColor = "blue";

    //create box sprite and give velocity

    box = createSprite(random(60,615),60,40,40);
    box.shapeColor = "white";
    box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite    
    
    createEdgeSprites();


    //add condition to check if box touching surface and make it box

    if(box.isTouching(surface_1) && (box.bounceOff(surface_1)) ){
        box.shapeColor = "green";   
    }

    if(box.isTouching(surface_2) && (box.bounceOff(surface_2)) ){

        box.shapeColor = "yellow";
       

    }

    if(box.isTouching(surface_3) && (box.bounceOff(surface_3)) ){

        box.shapeColor = "red";
        

    }


    if(box.isTouching(surface_4) && (box.bounceOff(surface_4)) ){

        box.shapeColor = "blue";
       

    }

drawSprites();
}
