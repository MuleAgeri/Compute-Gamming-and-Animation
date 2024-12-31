
var spaceship;
var bullets = [];
var enemies = [];
var score = 0;
var isGameOver = false;
var enemySpeed = 2;
var bulletSpeed = 5;
var backgroundColors = ["black", "blue", "green", "purple", "orange", "red"];
var currentBackgroundColor = backgroundColors[0];

function setup() {
  createCanvas(400, 400);
  spaceship = createSprite(width / 2, height - 30, 40, 20);
}

function draw() {
  background(currentBackgroundColor);
  
  if (!isGameOver) {
    playGame();
  } else {
    showGameOver();
  }
  
  drawSprites();
}

function playGame() {
  // Control spaceship
  if (keyDown(LEFT_ARROW) && spaceship.position.x > 20) {
    spaceship.position.x -= 5;
  }
  if (keyDown(RIGHT_ARROW) && spaceship.position.x < width - 20) {
    spaceship.position.x += 5;
  }

  // Shooting bullets
  if (keyWentDown(" ")) {
    shootBullet();
  }

  // Update bullets
  for (var i = bullets.length - 1; i >= 0; i--) {
    bullets[i].position.y -= bulletSpeed;
    if (bullets[i].position.y < 0) {
      bullets[i].remove(); // Remove bullet if it goes off-screen
      bullets.splice(i, 1); // Also remove from the array
    }
  }

  // Spawn enemies
  if (frameCount % 60 === 0) {
    spawnEnemy();
  }

  // Update enemies
  for (var i = enemies.length - 1; i >= 0; i--) {
    enemies[i].position.y += enemySpeed;
    if (enemies[i].position.y > height) {
      gameOver();
    }

    // Check for collisions
    if (isColliding(spaceship, enemies[i])) {
      gameOver();
    }

    // Check for bullet collisions
    for (var j = bullets.length - 1; j >= 0; j--) {
      if (isColliding(bullets[j], enemies[i])) {
        score++;
        currentBackgroundColor = random(backgroundColors); // Change background color
        bullets[j].remove(); // Remove bullet from canvas
        bullets.splice(j, 1); // Remove bullet from array
        enemies[i].remove(); // Remove enemy from canvas
        enemies.splice(i, 1); // Remove from the array
        break; // Exit loop after collision
      }
    }
  }

  displayScore(); // Call to display the score
}

function displayScore() {
  fill("white");
  textSize(20);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10); // Display score on canvas
}

function shootBullet() {
  var bullet = createSprite(spaceship.position.x, spaceship.position.y - 10, 5, 10);
  bullets.push(bullet);
}

function spawnEnemy() {
  var enemy = createSprite(random(20, width - 20), 0, 30, 30);
  enemies.push(enemy);
}

function isColliding(sprite1, sprite2) {
  return sprite1.position.x < sprite2.position.x + sprite2.width &&
         sprite1.position.x + sprite1.width > sprite2.position.x &&
         sprite1.position.y < sprite2.position.y + sprite2.height &&
         sprite1.position.y + sprite1.height > sprite2.position.y;
}

function gameOver() {
  isGameOver = true;
}

function showGameOver() {
  fill("red");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Game Over!", width / 2, height / 3);
  textSize(15);
  text("Score: " + score, width / 2, height / 2);
  text("Press 'R' to Restart", width / 2, height / 1.5);
}

function keyPressed() {
  if (isGameOver && key === "R") {
    restartGame();
  }
}

function restartGame() {
  score = 0;
  bullets = [];
  enemies = [];
  isGameOver = false;
  spaceship.position.x = width / 2;
  currentBackgroundColor = backgroundColors[0]; // Reset background color
}