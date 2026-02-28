let myGif;
let stillCat;
let scarySun;
let swayTree;
let swayTree2;
let swayTree3;
let swayTree4;
let bush1;
let bush2;
let flower1;
let flower2;

// Player position
let x = 100;
let y = 100;

// Direction
let facingRight = true;

// Jump state
let jumping = false;
let jumpFrame = 0;

function preload() {
  myGif = loadImage('https://i.imgur.com/X0jNehA.gif');
  stillCat = loadImage('https://i.imgur.com/R7XKpp7.gif');
  scarySun = loadImage('https://i.imgur.com/TuWdbnp.gif');
  swayTree = loadImage('https://i.imgur.com/GMcmJFh.gif')
  swayTree2 = loadImage('https://i.imgur.com/dhx2Ob9.gif')
  swayTree3 = loadImage('https://i.imgur.com/alo9JGY.gif')
  swayTree4 = loadImage('https://i.imgur.com/WglStnp.gif')
  bush1 = loadImage('https://i.imgur.com/mtOqz2Q.gif')
  bush2 = loadImage('https://i.imgur.com/HJKJ1YM.gif')
  flower1 = loadImage('https://i.imgur.com/SZcURof.gif')
  flower2 = loadImage('https://i.imgur.com/LYdbEvK.gif')
}

function setup() {
  createCanvas(600, 400);
  scarySun.resize (100,100)
  swayTree.resize (300,280)  
  swayTree2.resize (410,300)
  swayTree3.resize (350,300)
  swayTree4.resize (300,320)
  bush1. resize (200,200)
  bush2. resize (200,150)
  flower1. resize (90,90)
  flower2. resize (80,80)
}

function draw() {
  background(120, 190, 255); // sky
   image(scarySun, 70, 10);
  image(swayTree, 200, 90)  
 push();
     rotate(PI/43);
     image(swayTree2, 300, 10)
  pop();
  image(swayTree3, 100,60)
  push();
     rotate(-PI/24);
      image(swayTree3, -30,60)
  pop();
  push();
     rotate(-PI/24);
      image(swayTree4, 400,90)
  pop();
  image(swayTree4, -100,50)
  image(swayTree, 260,55)
   image(bush1, 0,200)
  image(bush2,450,250)
  image(flower1, 160,250)
  image(flower2, 70,265)



  // ground
  fill(34, 139, 34);
  rect(0, 330, width, 70);

  updateJump();

  // Movement
  let moving = false;

  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // D key
    moveRight();
    moving = true;
  }

  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // A key
    moveLeft();
    moving = true;
  }

  drawPlayer(moving);
  
}

// ==================================================
// MOVEMENT
// ==================================================

function moveRight() {
  x += 5;
  facingRight = true;
}

function moveLeft() {
  x -= 5;
  facingRight = false;
}

// ==================================================
// JUMP
// ==================================================

function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW || key === ' ' || key === 'w') {
    jump();
  }
}

// ==================================================
// JUMP LOGIC
// ==================================================

function updateJump() {
  if (!jumping) return;

  jumpFrame++;
  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;

  y = 100 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 100;
  }
}

// ==================================================
// DRAW PLAYER
// ==================================================

function drawPlayer(moving) {
  push();

  let currentImage = moving ? myGif : stillCat;

  if (!facingRight) {
    scale(-1, 1);
    image(currentImage, -x - currentImage.width, y);
  } else {
    image(currentImage, x, y);
  }

  pop();
}