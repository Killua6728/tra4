var bow, arrow, background, verde, red, pink, blue
var bowImaedge, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage, blue_balloonImage, backgroundImage;
var pontors = 0
var vivo = 1
var morto = 0
var gameavivo = vivo
var grupop, grupov, grupor, grupob

function preload() {

  paredeImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("balon_v.png")
  pink_balloonImage = loadImage("balon_ro.png")
  blue_balloonImage = loadImage("balon_b.png")
}



function setup() {
  createCanvas(400, 400);
 
  //criar um plano de fundo
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(paredeImage);
  scene.scale = 2.5

  // criar um arco para a flecha
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;
  grupop = new Group()
  grupov = new Group()
  grupor = new Group()
  grupob = new Group()
}

function draw() {
  background(0);
  if (gameavivo === vivo) {
    bow.y = World.mouseY
    if (keyDown("space")) {
      createArrow();

    }
    scene.velocityX = -3
    if (scene.x < 0) {
      scene.x = scene.width / 2;
    }
    if (arrow.isTouching(grupob || grupop || grupor || grupov)) {
      
    }
    if (bow.isTouching(grupob || grupop || grupor || grupov)) {
      gameavivo = morto
    }
  } else if (gameavivo === morto) {
    scene.velocityX = 0
    grupob.velocityX = 0
    grupor.velocityX = 0
    grupop.velocityX = 0
    grupov.velocityX = 0
  }
  text("pontuaçao=" + pontors, 330, 50)
  //mover o arco


  // soltar a flecha quando a tecla espaço for pressionada


  //mude o valor do balão aleatório para 4
  // grupoo.add(pink||blue||verde||red)
  drawSprites();
}


function spawbalom() {
  var select_balloon = Math.round(random(1, 4));
  if (World.frameCount % 100 == 0) {
    switch (select_balloon) {
      case 1:
        redBalloon();
        break;
      case 2:
        blueBalloon();
        break;
      case 3:
        greenBalloon();
        break;
      case 4:
        pinkBalloon();
        break;
      default:
        break;
    }
  }
}

// criar flechas para o arco
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 150;
  red.scale = 0.1;
  grupor.add(red)
}

function blueBalloon() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;
  grupob.add(blue)
}

function greenBalloon() {
  var verde = createSprite(0, Math.round(random(20, 370)), 10, 10);
  verde.addImage(pink_balloonImage);
  verde.velocityX = 4;
  verde.lifetime = 150;
  verde.scale = 0.4;
  grupov.add(verde)
}

function pinkBalloon() {
  var rosa = createSprite(0, Math.round(random(20, 370)), 10, 10);
  rosa.addImage(pink_balloonImage);
  rosa.velocityX = 4;
  rosa.lifetime = 150;
  rosa.scale = 1;
  grupop.add(rosa)
}