let myGif;
let stillCat;
let scarySun;
let swayTree;
let swayTree2;
let swayTree3;
let swayTree4;

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
}

function setup() {
  createCanvas(600, 400);
  scarySun.resize (100,100)
  swayTree.resize (300,280)  
  swayTree2.resize (410,300)
  swayTree3.resize (350,300)
  swayTree4.resize (300,320)
}

function draw() {
  background(120, 190, 255); // sky
   image(scarySun, 80, 10);
 
  image(swayTree, 200, 90)  
  image(swayTree2, 300, 40)
  image(swayTree3, 100,60)
  image(swayTree3, 0,40)
  image(swayTree4, 400,50)
  image(swayTree4, -100,50)
  image(swayTree, 260,50)


  // ground
  fill(60, 200, 90);
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
