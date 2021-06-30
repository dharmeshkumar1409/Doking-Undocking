var iss, issImg;
var spaceCraft, sImg, sLeft, sUp, sDown;
var bg, bgImg;
var hasDocked = false;

function preload() {
    issImg = loadImage("iss.png");
    sImg = loadAnimation("spaceCraft1.png");
    sLeft = loadAnimation("spaceCraft4.png");
    sRight = loadAnimation("spaceCraft3.png");
    sUp = loadAnimation("spaceCraft2.png");
    bgImg = loadImage("spacebg.jpg");
}

function setup() {
    createCanvas(800, 400);

    bg = createSprite(400, 200);
    bg.addImage(bgImg);
    bg.scale = 1.5;

    spaceCraft = createSprite(400, 300, 50, 50);
    spaceCraft.addAnimation("still", sImg);
    spaceCraft.addAnimation("left", sLeft);
    spaceCraft.addAnimation("right", sRight);
    spaceCraft.addAnimation("up", sUp);
    spaceCraft.scale = 0.15;

    iss = createSprite(400, 200, 50, 50);
    iss.addImage(issImg);


}

function draw() {
    background("black");

    if (!hasDocked) {
        // spaceCraft.x = 340;
        // spaceCraft.y = 230;
        if (keyDown(LEFT_ARROW)) {
            spaceCraft.x -= 3;
            spaceCraft.changeAnimation("left", sLeft);
        }

        if (keyDown(RIGHT_ARROW)) {
            spaceCraft.x += 3;
            spaceCraft.changeAnimation("right", sRight);
        }

        if (keyDown(UP_ARROW)) {
            spaceCraft.y -= 3;
            spaceCraft.changeAnimation("up", sUp);
        }

        if (keyDown(DOWN_ARROW)) {
            spaceCraft.y += 3;
            spaceCraft.changeAnimation("still", sImg);
        }



    }


    drawSprites();
    if (spaceCraft.x <= 350 && spaceCraft.y <= 290) {
        hasDocked = true;
        fill("white");
        textSize(40);
        text("Docking Successful!", 230, 350);
    }
    fill("white");
    text("x = " + mouseX + ", y = " + mouseY, mouseX, mouseY);
}