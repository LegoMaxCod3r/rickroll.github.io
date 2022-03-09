var rickRoll, rickRollImage;

function preload(){

    rickRollImage = loadImage("./ricky.png");

}

function setup() {
    createCanvas(700,700);

    rickRoll = createSprite(350,550,100,100);
    rickRoll.addImage("rickRoll", rickRollImage);
    rickRoll.scale = .5;
}

function draw() {
 
    background("red");

    fill("black");
    textSize(54);
    text('LOL, you just got rickrolled', 20,100)
    fill("black");
    textSize(54);
    text('now you got rickrolled and with a png file with a virus', 20,200);
    fill("black");
    textSize(54);
    text('with a png file with a virus on it lolololol', 20,300);
    fill("black");
    textSize(54);
    text('on it lolololol', 20,400);

    fill("black");
    textSize(10);
    text('downloading has started', 20,20);


    drawSprites();
}