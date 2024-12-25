## Name : Muluken Ageri
### ID : UGR/25993/14
## Lesson summary
### Lesson 1: Programming for a Purpose

 **Question of the Day:** How can we design animations and games based on the needs of a user?

  - Key Focus: Use your activity guide to recommend suitable templates to clients.
     
Template Types:

   1. Welcome Screen

       - Introduces the app or project with a friendly message and instructions.
       - Includes a start or continue button to set the tone and purpose.
    
   2. User Input Screen

      - Collects user inputs using text fields, buttons, or interactive elements.
      - Customizes the app experience based on user data.
   3. Information Screen

      - Displays static content, instructions, or facts for user reference.
      - Adds context with text and images.
   4. Feedback Screen

      - Provides responses based on user actions, such as quiz results, "Thank You" notes, or summaries.
   5. End/Exit Screen

      - Marks the conclusion with gratitude messages.
      - Offers options to restart or exit the app.
 Task:
  Complete the survey provided.  

### Lesson 2:  Plotting Shapes

**Question of the Day:** How can we clearly communicate how to draw something on a screen?

Use grids, axes, or dotted lines to help users place elements accurately.
Drew shapes on the Game Lab's grid per the instructions.
  
### Lesson 3: Drawing In Game Lab

   **Question of the Day:** How can we communicate to a computer how to draw shapes on the screen?
    
In this lesson, you will begin to use Game Lab to position shapes on the screen while learning the concepts of sequencing and debugging.
   
   Introduction to the code:

  Here are the key functions introduced in this lesson:

  - **ellipse(x, y, w, h):** Draws an ellipse at position (x, y) with width w and height h.
  - **fill(color):** Sets the fill color for shapes.
  - **rect(x, y, w, h):** Draws a rectangle at position (x, y) with width w and height h.
  
  **Level One:** Introduction to Game Lab

     Code:

         rect(100, 100);
  When this is run, a rectangle is displayed on the screen at position (100, 100).

**Level Two to Level Six:** Skill Building

     Code:

          rect(350, 350, 50, 50);
  A small rectangle appears at (350, 350) with a size of 50x50.

**Level Three:**

     Code:

           rect(350, 350, 50, 50);  
           rect(300, 350, 50, 50);
  Two rectangles appear side by side at positions (350, 350) and (300, 350).

**Level Four:**

     Code:

           fill("yellow");  
           rect(100, 100, 50, 50);  
           rect(250, 100, 50, 50);  
           rect(100, 200, 50, 50);
  Three yellow rectangles are displayed in different positions, forming part of a pattern.

**Level Five:**

     Code:

            fill("blue");  
            rect(200, 200);  
            fill("green");  
            rect(175, 175);
  A blue rectangle and a green rectangle are layered on the screen.

**Level Six:**

     Code:

           fill("blue");  
           ellipse(100, 100);  
           fill("yellow");  
           ellipse(200, 200);
  A blue circle and a yellow circle are drawn on the screen. 

**Level Seven:** Practice 

   Task: Choose an activity to practice.
     Chosen Activity: "Draw a Car"
       Code:

              fill("blue");  
              rect(150, 150);  
              rect(200, 150);  
              fill("green");  
              rect(100, 200);  
              rect(150, 200);  
              rect(200, 200);  
              rect(250, 200);  
              fill("red");  
              ellipse(150, 250);  
              ellipse(250, 250);
  This creates a basic car shape using rectangles and circles for wheels.

**Level Eight:** Assessment

     Code:

            fill("orange");
            ellipse(150, 150);  
            ellipse(200, 150);  
            ellipse(150, 200);  
            ellipse(200, 200);  
            fill("purple");  
            rect(150, 150); 
  Draws overlapping orange circles with a purple rectangle in the center.

**Level Nine:** Challenges

   Task: Choose an activity to complete the challenge.
   Chosen Activity: "Face"
     Code:

            fill(rgb(66, 245, 230));  
            ellipse(150, 100);  
            ellipse(250, 100);  
            fill("red");  
            ellipse(200, 200);  
            fill(rgb(66, 245, 135));  
            rect(100, 250);  
            rect(150, 275);  
            rect(200, 275);  
            rect(250, 250);
  This creates a cartoon-style face with eyes, a nose, and a mouth using ellipses and rectangles.

### Lesson Four : Shapes and Parameters

  **Question of the Day:** How can we use parameters to give the computer more specific instructions?

 I predicted that the additional parameters for the rect() blocks specify the width and height of the rectangle.
  Level One : Predict Two rectangle that is parallel

  **Level Two - Six :** Skil building

  **Level two :** 

          fill("blue"); 
          rect(100,100,100,150); 
          fill("red");
          rect(250,100,100,200);
  **Level Three :**

     Add an orange ellipse to the screen that is taller than the green one
     Rearrange the blocks so the orange ellipse is behind the green one
         fill("yellow"); 
         ellipse(200, 200, 250, 400); 
         fill("green"); 
         ellipse(200,200,200,150);

  **Level Four :**

    Change the background from yellow to orange.   
           background("orange");  
           fill("purple"); 
           rect(50,50, 100,100); 
           fill("blue"); rect(250,250, 100, 100);

  **Level Five :**

    Make a black background behind the green circle. 
          background("black");  
          fill("green");  
          ellipse(200,200,200,200);

  **Level Six :**

      // Draw sky 
            background("skyblue");  
      // Draw sun
            fill("yellow");
            ellipse(350,50,50,50);
      // Draw grass 
            fill("green");   
            rect(0,300,400,100);

  **Level Seven :** Practice with parameters I choose B that "Debug: Missing Shapes"

         fill("black");
         rect(25, 50, 300, 300); 
         fill("white");
         rect(40, 65, 250, 250);
         fill("black"); 
         rect(55, 80, 200, 200);
         fill("white"); 
         rect(70, 95, 150, 150);
         fill("black");
         rect(85, 110, 100, 100);
         fill("white");   
         rect(100, 125, 50, 50);

**Level Eight :** Assessment Debug - Using 4 Parameters background("skyblue");

    // Draw sun 
         fill("yellow");  
         ellipse(300,50,50,50);

    // Draw grass 
         fill("green"); 
         rect(0,300,400,100);

    // Draw cloud 
        fill("white");  
        ellipse(150,100,200,100);


**Level nine :** Challenges I select B "Shape"

       fill("red");  
       shape(200, 200, 0, 400, 400, 400); 
       fill("blue");  
       shape(200, 200, 0, 0, 400, 0);  
       fill("green");  
       shape(0, 0, 200, 200, 0, 400);  
       fill("yellow");  
       shape(200, 200, 400, 0, 400, 400);

### Lesson Five : Variables

  Question of the Day: How can we use variables to store information in our programs?

 In this lesson, you will be introduced to variables - an important concept in programming used to store values for your programs!

  **Level One:**

  Prediction Drawing ellipse shape at bottom left corner

  **Level Two:**

  Predict In the corner of x=300 and y=100

  **Level Three - Five:** Skill Building

  **Level Three:** 

      // Changing Variables
           var xPosition = 200; 
           var whatsTheY = 300; 
           ellipse(xPosition, whatsTheY);

  **Level Four:** 

      // Naming Variables
           var sizeofcircle = 150; 
           var dimension = 100; 
           var location = 200;  
           fill("OrangeRed");  
           ellipse(dimension,location, sizeofcircle, sizeofcircle);

  Level Five:Using a variables

  The key concepts of this lesson is:

   By analyzing the code with one variable, I can anticipate the position of the circle.

   By analyzing the code with two variables, I can predict where the circle will appear.

   I modify the values of the two variables to adjust the circle's location.

### Lesson Six : Random numbers

  Question of the Day: How can we make our programs behave differently each time they are run?

  In this lesson the key concepts are:

   Key Concepts:
      Random numbers add diversity and unpredictability to programs.
      They are effective for varying movements, generating challenges, or altering colors dynamically.
   - Activities:

     - Creating random values within a specified range using randomNumber(min, max).
       Using randomness to enhance animations or interactive elements.
       Output the ellipse anywhere horizontally on the screen.
        ``` 
          fill("orange");
          ellipse(randomNumber(0,400), 200, 50, 50);
        ```
        Combined of the random of the numbers with the variables.
        ```
              var petalSize;
              background("yellow");
              petalSize = randomNumber(15,65);
              fill("purple");
              ellipse(75,100,petalSize,petalSize);
              ellipse(125,100,petalSize,petalSize);
              ellipse(100,75,petalSize,petalSize);
              ellipse(100,125,petalSize,petalSize);
              fill("green");
              ellipse(100,100, 50, 50);
              petalSize = randomNumber(15,65);
              fill("purple");
              ellipse(275,300,petalSize,petalSize);
              ellipse(325,300,petalSize,petalSize);
              ellipse(300,275,petalSize,petalSize);
              ellipse(300,325,petalSize,petalSize);
              fill("green");
              ellipse(300,300, 50, 50);

        ```

### Lesson Seven : Mini-Project: Robot Face

 Question of the Day: How can randomness enhance creative projects?

 - Key Concepts:
    - Integrates randomness with creating and positioning shapes.
    - Enables dynamic adjustments to a robot face design for variety and creativity.
    - Encourages exploration of unpredictable and unique designs.
    - Promotes innovation through automated variations in visual elements.
 - Activities:
    - Crafting a robot face with features that change randomly each time it’s rendered.
    - Using random numbers to modify the placement, size, or appearance of individual components.
    - Experimenting with random values to create dynamic and visually engaging designs.
    - Building an understanding of how randomness enhances interactivity and creativity.
  
### Lesson Eight : Sprites

 **Question of the Day:** How are sprites used to represent objects in animations or games?

  Steps to Create Sprites:

  1. Create a new sprite variable called sprite1:
       Drag out a createSprite() block and give it the variable name sprite1.
  2. Draw your sprites on the screen:
       Drag out a drawSprites() block.

 **Key Ideas:**

 Sprites are graphic elements that move and interact.
 They simplify complex animations.

 - Activities:
    Create and customize sprites in Game Lab.
    Add sprites to interactive projects.

### Lesson Nine : Sprites Properties

  **Question:** How do sprite properties improve animations?

  - Key Concepts:

    - Sprites have properties like position, size, and speed that can be manipulated.
  Understanding and modifying properties allow for advanced animations and interactivity.

  - Activities:

    - Changing sprite properties over time.
    - Experimenting with behaviors like bouncing or following paths.

### Lesson Ten : Tesing and Debugging 

  **Question of the Day:** Why is testing important in programming, and how can we improve our programs?

   - Key Concepts:
     - Testing ensures programs work as intended and identifies bugs.
     - Debugging involves finding and fixing errors to improve performance.

   - Activities:
      - Testing interactive programs with users.
      - Refining code for functionality and user experience.

### Lesson 11 Mini-Project
    
      Captioned Scenes: Learn to create dynamic storytelling scenes with captions and visuals.
  
### Lesson 12 The Draw Loop:
 
      Use a loop to continuously update animations and logic for ongoing visual changes.
  
### Lesson 13 Sprite Movement: 
  
      Control sprite motion on the screen using variables and logic.
  
### Lesson 14 Mini-Project
  
      Animation: Apply skills to create a complete animation with sprite properties and movement.
  
### Lesson 15 Conditionals:
  
      Use if-statements to make programs interactive and responsive based on specific conditions.
        `if (bird.x < 0) bird.x = 400;` 
  
### Lesson 16: Keyboard Input
Question of the Day: How can our programs react to user input?

Lesson Resources
Key Concepts:

  - The keyDown() block enables interaction with the keyboard.
  - Responding to user input creates dynamic and interactive programs.
Activities:
  - Prediction: Predict how keyboard input could enhance interactivity.
  - 2-4. Skill Building: Learn to use the keyDown() block to respond to user actions.
Practice:
  -  Create programs that respond to various key inputs.
Assessment: 
  - Show mastery by designing an interactive program using keyboard input.
Challenges: 
  - Explore creative and advanced applications of keyboard interactivity.
      
### Lesson 17: Mouse Input
 **Question of the Day:** How else can a computer respond to user actions?
**Lesson Resources**

 **Key Concepts:**

  - Utilize mouse actions to make programs interactive.
  - Use conditional logic with if and if-else statements to handle mouse events.
  
**Activities:**

1. **Prediction:** Anticipate how the mouse can enhance interactivity in programs.
    Skill Building (Steps 2-5):
     - Learn how to detect mouse clicks and movements.
     - Write conditional statements to respond to different mouse events (e.g., clicking, hovering).
  2.**Practice:** Create a program that reacts dynamically to mouse actions.
  3.**Assessment:** Prove understanding by designing a program with mouse-based interactions.
  4.**Challenges:** Try advanced features like drag-and-drop or creating a drawing tool.

 ### Lesson 18: Project - Interactive Card

**Question of the Day:** What techniques and skills matter when building an interactive program?
**Lesson Resources**

**Key Concepts:**

  - Combine user inputs, animations, and logical conditions to build a well-designed project.
  
**Activities:**

  1.**Demo App:** Explore a sample interactive card project.
  2.**Examples:** Study and analyze various interactive card examples for creative ideas.
    Project Work (Steps 3-7):
   - Plan your card by selecting a theme and designing its elements.
   - Implement interactive features using mouse inputs, animations, and sprites.
   - Test your project thoroughly and make improvements as needed.
  3.**Reflection:** Consider the skills and approaches used in your project.

### Lesson 19: Velocity
**Question of the Day:** How do programming tools simplify complex patterns, making them easier to use?
**Lesson Resources**

**Key Concepts:**

 - Use velocity to move sprites effectively.
 - Apply the counter pattern to automate updates to a sprite’s position.
  
**Activities:**

  1.**Prediction:** Think about how velocity simplifies controlling sprite movements.
    Skill Building (Steps 2-7):
   - Learn how to assign velocityX and velocityY to sprites.
   - Use the counter pattern to manage movement speed and direction.
  2.**Practice:** Create a program showcasing controlled sprite velocity.
  3.**Assessment:** Show proficiency by building a program featuring multiple moving sprites.
  4.**Challenges:** Experiment with advanced movements like acceleration, bouncing effects, or complex trajectories.

### Lesson 20: Collision Detection

**Learned Concepts:**

  - Detect sprite collisions using the isTouching block.
  - Use the debug block to identify and fix bugs.
  - Adjust collider parameters with setCollider.
  
 **Examples:**

  - Collision Detection Between Bunny and Dinner:
    ```
      var backdrop = createSprite(200, 200);
      backdrop.setAnimation("meadow");
      var bunny = createSprite(50, 300);
      bunny.setAnimation("bunny");
      bunny.velocityX = 3;
      var robot = createSprite(400, 320);
      robot.setAnimation("robot");
      robot.scale = 0.2;
      robot.velocityX = -3;
      var dinner = createSprite(370, 350);
      dinner.setAnimation("stew");
      dinner.velocityX = -3;

      function draw() {
          if (bunny.isTouching(dinner)) {
              bunny.velocityX = 0;
              dinner.velocityX = 0;
              robot.velocityX = 0;
              dinner.setAnimation("bowl"); // Change to empty bowl
         }
         drawSprites();
        } 
    ```

  - Debugging a Sprite:
    ```
      var balloon = createSprite(200, 200);
      balloon.setAnimation("balloon");
      balloon.debug = true; // Enable debugging

      var tack = createSprite(350, 50);
      tack.setAnimation("tack");

      function draw() {
          background("gray");

         if (balloon.isTouching(tack)) {
             balloon.setAnimation("popped"); // Change to popped balloon
         }

         if (keyDown("up")) tack.y -= 1;
         if (keyDown("down")) tack.y += 1;
         if (keyDown("left")) tack.x -= 1;
         if (keyDown("right")) tack.x += 1;

         drawSprites();
     }
    ```
 - Custom Collider Parameters:
    ```

    var roller = createSprite(200, 200);
    roller.scale = 2;
    roller.setAnimation("roller_1");
    roller.debug = true; // Enable debugging
    roller.setCollider("rectangle", 0, 0, 45, 180, 30); // Custom collider

    drawSprites();
    ```
### Lesson 21: Mini-Project - Side Scroller

 **Objective:** Build a side-scrolling game where the player avoids obstacles.

  - Key Points:
     - Use background movement for a scrolling effect.
     - Create obstacles that move toward the player.
**Code Example:**
    ```
      ground.x -= 5; // Scroll the ground
      if (ground.x < 0) ground.x = 400; // Reset position
      drawSprites();
    ```
### Lesson 22:Complex Sprite Movement 

  - Introduced velocity changes using the counter pattern to simulate acceleration.
    ```
     // LESSON 22: Complex Sprite Movement
      var rock = createSprite(200, 50);
      rock.setAnimation("rock");
      rock.velocityY = 0.5;

      function draw() {
         background("skyblue");

         // Make the rock speed up as it falls
         rock.velocityY += 0.1;

        drawSprites();
     }
    ```

### Lesson 23:Collisions

  -  Demonstrated collision handling with displace().
     ```
       var elephant = createSprite(200, 350);
       elephant.setAnimation("elephant");
       elephant.scale = 0.5;
       elephant.velocityY = randomNumber(-3, -1);

       var hippo = createSprite(200, 50);
       hippo.setAnimation("hippo");
       hippo.scale = 0.5;
       hippo.velocityY = randomNumber(1, 3);

      function draw() {
        background("white");

        // Use displace to make the elephant push the hippo
        elephant.displace(hippo);

        drawSprites();
      }
      ```
### Lesson 24: Mini-Project - Flyer Game

  - Created a mini flyer game combining gravity, player controls, and object interactions.
    ``` 
        var player = createSprite(200, 100);
        player.setAnimation("fly_bot");
        player.scale = 0.8;

        var coin = createSprite(randomNumber(50, 350), randomNumber(50, 350));
        coin.setAnimation("coin");
        coin.scale = 0.8;

        var rock1 = createSprite(-20, randomNumber(50, 350));
        rock1.setAnimation("rock");
        rock1.scale = 0.8;
        rock1.velocityX = 5;

        var rock2 = createSprite(randomNumber(50, 350), -20);
        rock2.setAnimation("rock");
        rock2.scale = 0.8;
        rock2.velocityY = 5;

        function draw() {
          background("lightblue");

          // Apply gravity to the player
          player.velocityY += 0.5;

          // Handle looping obstacles
          if (rock1.x > 400) {
            rock1.x = -20;
            rock1.y = randomNumber(50, 350);
          }
          if (rock2.y > 400) {
            rock2.x = randomNumber(50, 350);
            rock2.y = -20;
          }

          // Player controls
          if (keyWentDown("up")) {
            player.velocityY = -5;
          }
          if (keyDown("left")) {
            player.velocityX -= 0.1;
          }
        if (keyDown("right")) {
          player.velocityX += 0.1;
          }

        // Interactions with coin
        if (player.isTouching(coin)) {
          coin.x = randomNumber(50, 350);
          coin.y = randomNumber(50, 350);
        }

        // Obstacles push the player
        rock1.displace(player);
        rock2.displace(player);

        drawSprites();

        // Game over conditions
        if (player.x < -50 || player.x > 450 || player.y < -50 || player.y > 450) {
          background("black");
          textSize(50);
          fill("green");
          text("Game Over!", 50, 200);
          noLoop();
        }
      }
    ```

### Lesson 25:Functions

- Used modular functions to organize repetitive tasks like drawing clouds, trees, and fences.

    ``` 
          drawBackground();
          drawClouds();
          drawTrees();
          drawFence();

          function drawBackground() {
            noStroke();
            background(rgb(0, 200, 255));
            fill("green");
            rect(0, 380, 400, 20);
          }

          function drawTrees() {
            noStroke();

            // Draw tree trunks
            fill(rgb(150, 100, 0));
            rect(210, 330, 30, 50);
            rect(290, 330, 30, 50);
            rect(360, 330, 30, 50);

            // Draw tree tops
            fill("green");
            drawTriangle(225, 280, 100);
            drawTriangle(305, 280, 110);
            drawTriangle(375, 290, 95);
          }

          function drawClouds() {
            noStroke();
            fill("rgba(255, 255, 255, 0.8)");
            drawCloud(300, 200);
            drawCloud(100, 100);
          }

          function drawCloud(x, y) {
            ellipse(x, y, 200, 50);
            ellipse(x + 20, y, 200, 70);
            ellipse(x + 40, y, 200, 50);
          }

          function drawFence() {
            stroke("white");
            strokeWeight(5);

            // Draw fence posts
            for (let x = 20; x < 400; x += 30) {
              line(x, 350, x, 380);
          }

          // Draw horizontal fence line
          line(0, 360, 400, 360);
          }

          function drawTriangle(x, y, size) {
            triangle(
              x - size / 2,
              y + size / 2,
              x + size / 2,
              y + size / 2,
              x,
              y - size / 2
            );
          }
 
    ```

### Lesson 26: Fruit Catcher Game

    ```
        // Variables
        var score = 0;
        var missedFruits = 0;

        // Create Sprites
        var basket = createSprite(200, 350);
        basket.setAnimation("basket");
        basket.scale = 0.8;

        var fruit1 = createSprite(randomNumber(50, 350), 0);
        fruit1.setAnimation("apple");
        fruit1.scale = 0.5;
        fruit1.velocityY = 3;

        var fruit2 = createSprite(randomNumber(50, 350), 0);
        fruit2.setAnimation("banana");
        fruit2.scale = 0.5;
        fruit2.velocityY = 4;

        // Main Draw Loop
        function draw() {
        // Draw the game background
        drawGameBackground();

        // Game Over Screen
        if (missedFruits >= 5) {
          background("black");
          fill("red");
          textSize(48);
          text("Game Over", 100, 200);
          noLoop(); // Stop the game loop
        } else {
         // Game Logic
         moveBasket();
         checkFruitCatch();
         resetFruits();
         displayScore();

         drawSprites();
       }
       }

        // Functions

        // Draw the game background
        function drawGameBackground() {
          background("skyblue"); // Sky color
          fill("green"); // Grass color
          rect(0, 380, 400, 20);
        }

        // Move the basket with arrow keys
        function moveBasket() {
          if (keyDown("left")) {
            basket.x -= 5;
          }
          if (keyDown("right")) {
            basket.x += 5;
          }
          // Keep the basket within screen boundaries
          basket.x = constrain(basket.x, 0, 400);
        }

        // Check if fruits are caught or missed
        function checkFruitCatch() {
          if (basket.isTouching(fruit1)) {
            score++;
            resetFruit(fruit1);
          }
          if (basket.isTouching(fruit2)) {
            score++;
            resetFruit(fruit2);
          }
        }

        // Reset fruits when missed or caught
        function resetFruits() {
          if (fruit1.y > 400) {
            missedFruits++;
            resetFruit(fruit1);
          }
          if (fruit2.y > 400) {
            missedFruits++;
            resetFruit(fruit2);
          }
        }

       // Reset a fruit's position and speed
       function resetFruit(fruit) {
        fruit.x = randomNumber(50, 350);
        fruit.y = 0;
        fruit.velocityY = randomNumber(3, 6);
        }

        // Display the score and missed fruits
        function displayScore() {
          fill("black");
          textSize(20);
          text("Score: " + score, 20, 20);
          text("Missed: " + missedFruits, 20, 50);
        }
    ```

### Lesson 27: Refining the Game Design
**Objective:** Utilize the design process to enhance game mechanics.
Example:

 - Evaluating player controls and interactions with enemies.
 - Introducing sound effects and visual indicators for better feedback.

### Lesson 28: Custom Game Project
**Objective:** Develop a personalized game that integrates all learned concepts.
**Key Elements:**

 - Incorporate features like movement, collisions, scoring, and animations.
 - Finalize the game with well-designed sprites and visually appealing backgrounds.
     







  