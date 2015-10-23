// illustration.js
var backgroundImage;
var stargroundImage;
var ghostaImage;
var ghostbImage;
var girlImage;
var moonImage;

function preload() {
	backgroundImage = loadImage("images/background.jpg");
	ghostaImage = loadImage("images/ghosta.png");
	ghostbImage = loadImage("images/ghostb.png");
	girlImage = loadImage("images/girl.png");
	moonImage = loadImage("images/moon.png");
	stargroundImage = loadImage("images/starground/.png");
}


function setup() {
	createCanvas(800, 600);
}

function draw() {
	image(backgroundImage, 0, 0);
	if (mouseIsPressed) {
		ghosta = mouseY;
	}
	if (mouseIsPressed) {
		ghosta = mouseX;
	}
}
