noseX = "";
noseY = "";

function preload() {
    world_start = loadSound("world_start.wav");
    marioJump = loadSound("jump.wav");
    marioCollectCoin = loadSound("coin.wav");
    gameOver = loadSound("gameover.wav");
    kick = loadSound("kick.wav");
    marioDie = loadSound("mariodie.wav");




    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    instializeInSetup(mario);
    canvas.parent("canvas");
    video = createCapture(VIDEO);
    video.size(800, 400);
    video.parent('gameConsole');
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("model loaded!")
}

function gotposes(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    game()
}