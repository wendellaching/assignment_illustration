// illustration.js
//I land on an island coast
//Where the only souls I see are ghosts
var backgroundImage;
var stargroundImage;
var ghostaImage;
var ghostbImage;
var ghostcImage;
var girlImage;
var girlbImages;
var moonImage;
var wordsImage;
var wavesImage;
var sandImage;
var trees;
//meteor
var meteor = 600;
//ghost stage
var currentScene = "nightA";

function preload() {
	backgroundImage = loadImage("images/background.jpg");
	ghostaImage = loadImage("images/ghosta.png");
	ghostbImage = loadImage("images/ghostb.png");
	ghostcImage = loadImage("images/ghostc.png");
	girlImage = loadImage("images/girl.png");
	girlbImage = loadImage("images/girlb.png");
	moonImage = loadImage("images/moon.png");
	stargroundImage = loadImage("images/starground.png");
	starImage = loadImage("images/star.png");
	wordsImage = loadImage("images/words.png");
	wavesImage = loadImage("images/waves.png");
	sandImage = loadImage("images/sand.png");
	treesImage = loadImage("images/trees.png");
	meteorImage = loadImage("images/meteor.png");
}

function setup() {
	createCanvas(800, 600);

}

function draw() {
	// //animate waves
	//
	//
	// function mouseDragged() {
	// 	value = value + (image(wavesImage));
	//
	// }
	//stage
	if (currentScene === "nightA") {
		drawNightA();
	} else if (currentScene === "nightB") {
		drawNightB();
	}
}

function drawNightA() {
	image(backgroundImage, 0, 0);
	image(treesImage, 0, 50);
	image(sandImage, 0, 420);
	image(moonImage, 50, 40);

	image(girlImage, 580, 370);
	//animate meteor
	meteor += 100;
	if (meteor > 800) {
		meteor = -200;
	}
	image(meteorImage, meteor, 50);
	image(stargroundImage, 0, 0);
	image(wordsImage, 215, 485);
}

function drawNightB() {
	image(backgroundImage, 0, 0);
	image(ghostcImage, 300, 300);
	image(treesImage, 0, 50);
	image(moonImage, 50, 40);
	image(sandImage, 0, 420);
	image(wordsImage, 215, 485);
	if (mouseIsPressed) {
		image(ghostbImage, mouseX - 300, mouseY - 200 + random(-4, 4));
	}
	image(ghostaImage, mouseX + random(-2, 2), mouseY);
	image(girlbImage, 400, 300);

}

function mouseReleased() {
	if (currentScene === "nightA") {
		currentScene = "nightB";
	} else {
		currentScene = "nightA";
	}
}

//animate shooting stars,class notes
// shootingstarA += 100;
// if (shootingstarA > 800) {
// 	shootingstarA = -200;
// }
// image(shootingstarImage, shootingstarA, 50);
// //ghost appears
// if (keyIsPressed === true) {
// 	image(ghostcImage, 150, 300);
// 	image(treesImage, 0, 50);
// 	image(sandImage, 0, 420);
// 	image(girlbImage, 400, 300);
// } else {
// 	image(treesImage, 0, 50);
// 	image(sandImage, 0, 420);
// 	image(girlImage, 580, 370);
// }

// //moon hotspot for star background
// if (mouseIsPressed &&
// 	mouseX > 65 &&
// 	mouseX < 150 &&
// 	mouseY > 65 &&
// 	mouseY < 150) {
// 	image(stargroundImage, 0, 0);
// }
