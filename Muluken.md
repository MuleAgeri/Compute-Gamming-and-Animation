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

       ellipse(x, y, w, h): Draws an ellipse at position (x, y) with width w and height h.
       fill(color): Sets the fill color for shapes.
       rect(x, y, w, h): Draws a rectangle at position (x, y) with width w and height h.
  
   **Level One:** Introduction to Game Lab
     Code:
        ```- rect(100, 100);```
  When this is run, a rectangle is displayed on the screen at position (100, 100).
**Level Two to Level Six:** Skill Building
     Code:
       ``` - rect(350, 350, 50, 50);```
     A small rectangle appears at (350, 350) with a size of 50x50.
**Level Three:**
     Code:
       ``` - rect(350, 350, 50, 50);  
           - rect(300, 350, 50, 50);```
    Two rectangles appear side by side at positions (350, 350) and (300, 350).
**Level Four:**
     Code:
       ```- fill("yellow");  
          - rect(100, 100, 50, 50);  
          - rect(250, 100, 50, 50);  
          - rect(100, 200, 50, 50);```
    Three yellow rectangles are displayed in different positions, forming part of a pattern.
**Level Five:**
     Code:
        ```- fill("blue");  
           - rect(200, 200);  
           - fill("green");  
           - rect(175, 175);```
     A blue rectangle and a green rectangle are layered on the screen.
**Level Six:**
     Code:
       `` - fill("blue");  
          - ellipse(100, 100);  
          - fill("yellow");  
          - ellipse(200, 200);``
     A blue circle and a yellow circle are drawn on the screen.
**Level Seven:** Practice
   Task: Choose an activity to practice.
     Chosen Activity: "Draw a Car"
       Code:
         ``` - fill("blue");  
             - rect(150, 150);  
             - rect(200, 150);  
             - fill("green");  
             - rect(100, 200);  
             - rect(150, 200);  
             - rect(200, 200);  
             - rect(250, 200);  
             - fill("red");  
             - ellipse(150, 250);  
             - ellipse(250, 250);```
     This creates a basic car shape using rectangles and circles for wheels.
**Level Eight:** Assessment
     Code: 
       ``` - fill("orange");
           - ellipse(150, 150);  
           - ellipse(200, 150);  
           - ellipse(150, 200);  
           - ellipse(200, 200);  
           - fill("purple");  
           - rect(150, 150); ```
     Draws overlapping orange circles with a purple rectangle in the center.
**Level Nine:** Challenges
   Task: Choose an activity to complete the challenge.
   Chosen Activity: "Face"
     Code:
       ``` - fill(rgb(66, 245, 230));  
           - ellipse(150, 100);  
           - ellipse(250, 100);  
           - fill("red");  
           - ellipse(200, 200);  
           - fill(rgb(66, 245, 135));  
           - rect(100, 250);  
           - rect(150, 275);  
           - rect(200, 275);  
           - rect(250, 250);```
    This creates a cartoon-style face with eyes, a nose, and a mouth using ellipses and rectangles.

### Lesson Four : Shapes and Parameters

  **Question of the Day:** How can we use parameters to give the computer more specific instructions?
 I predicted that the additional parameters for the rect() blocks specify the width and height of the rectangle.
  Level One : Predict Two rectangle that is parallel

  **Level Two - Six :** Skil building
  **Level two :** 
      ``` fill("blue"); 
          rect(100,100,100,150); 
          fill("red");
          rect(250,100,100,200);```
  **Level Three :**
    Add an orange ellipse to the screen that is taller than the green one
    Rearrange the blocks so the orange ellipse is behind the green one
       ``fill("yellow"); 
         ellipse(200, 200, 250, 400); 
         fill("green"); 
         ellipse(200,200,200,150);``

  **Level Four :**
    Change the background from yellow to orange.   
        ```background("orange");  
           fill("purple"); 
           rect(50,50, 100,100); 
           fill("blue"); rect(250,250, 100, 100);```

  **Level Five :**
    Make a black background behind the green circle. 
 ```background("black");  
    fill("green");  
    ellipse(200,200,200,200);```

  **Level Six :**
      Draw sky 
        ```background("skyblue");```
      Draw sun
        ```fill("yellow");```
        ``` ellipse(350,50,50,50);```
      Draw grass fill("green"); rect(0,300,400,100);

  **Level Seven :** Practice with parameters I choose B that "Debug: Missing Shapes"
      ```fill("black");
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
         rect(100, 125, 50, 50);```

**Level Eight :** Assessment Debug - Using 4 Parameters background("skyblue");
    Draw sun 
      ```fill("yellow");  
         ellipse(300,50,50,50);```
    Draw grass 
    ``` fill("green"); 
        rect(0,300,400,100);```
    Draw cloud 
     ```fill("white");  
        ellipse(150,100,200,100);```

**Level nine :** Challenges I select B "Shape" 
    ```fill("red");  
       shape(200, 200, 0, 400, 400, 400); 
       fill("blue");  
       shape(200, 200, 0, 0, 400, 0);  
       fill("green");  
       shape(0, 0, 200, 200, 0, 400);  
       fill("yellow");  
       shape(200, 200, 400, 0, 400, 400);```

### Lesson Five : Variables

  Question of the Day: How can we use variables to store information in our programs?
    In this lesson, you will be introduced to variables - an important concept in programming used to store values for your programs!
  Level One:   
      Prediction Drawing ellipse shape at bottom left corner
  Level Two:    
      Predict In the corner of x=300 and y=100
  Level Three - Five: 
      Skill Building
  Level Three: 
      Changing Variables var xPosition = 200; var whatsTheY = 300; ellipse(xPosition, whatsTheY);
  Level Four:  
      Naming Variables var sizeofcircle = 150; var dimension = 100; var location = 200; fill("OrangeRed"); ellipse(dimension,   location, sizeofcircle, sizeofcircle);
  Level Five:
      Using a variables
    The key concepts of this lesson is:
      - By analyzing the code with one variable, I can anticipate the position of the circle.
      - By analyzing the code with two variables, I can predict where the circle will appear.
      - I modify the values of the two variables to adjust the circle's location.

### Lesson Six : Random numbers
  Question of the Day: How can we make our programs behave differently each time they are run?
  In this lesson the key concepts are:
     Key Concepts:
       Random numbers add diversity and unpredictability to programs.
       They are effective for varying movements, generating challenges, or altering colors dynamically.
     Activities:

       Creating random values within a specified range using randomNumber(min, max).
       Using randomness to enhance animations or interactive elements.
  Output the ellipse anywhere horizontally on the screen.
    fill("orange");
    ellipse(randomNumber(0,400), 200, 50, 50);
  Combined of the random of the numbers with the variables.
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

### Lesson Seven : Mini-Project: Robot Face
 Question of the Day: How can randomness enhance creative projects?
 Key Concepts:
    - Integrates randomness with creating and positioning shapes.
    - Enables dynamic adjustments to a robot face design for variety and creativity.
    - Encourages exploration of unpredictable and unique designs.
    - Promotes innovation through automated variations in visual elements.
 Activities:
    - Crafting a robot face with features that change randomly each time it’s rendered.
    - Using random numbers to modify the placement, size, or appearance of individual components.
    - Experimenting with random values to create dynamic and visually engaging designs.
    - Building an understanding of how randomness enhances interactivity and creativity.
  
### Lesson Eight : Sprites
 Question of the Day: How are sprites used to represent objects in animations or games?
  Steps to Create Sprites:
  1. Create a new sprite variable called sprite1:
       Drag out a createSprite() block and give it the variable name sprite1.
  2. Draw your sprites on the screen:
       Drag out a drawSprites() block.
 Key Ideas:
    Sprites are graphic elements that move and interact.
    They simplify complex animations.
 Activities:
    Create and customize sprites in Game Lab.
    Add sprites to interactive projects.

### Lesson Nine : Sprites Properties
 Question: How do sprite properties improve animations?
  Key Concepts:
     Sprites have properties like position, size, and speed that can be manipulated.
     Understanding and modifying properties allow for advanced animations and interactivity.
  Activities:
     Changing sprite properties over time.
     Experimenting with behaviors like bouncing or following paths.

### Lesson Ten : Tesing and Debugging 
  Question of the Day: Why is testing important in programming, and how can we improve our programs?
   Key Concepts:
     Testing ensures programs work as intended and identifies bugs.
     Debugging involves finding and fixing errors to improve performance.
   Activities:
     Testing interactive programs with users.
     Refining code for functionality and user experience.

### Lesson Eleven : 

  