# Dice_Game

### Project Description:

#### 1. **HTML Structure:**
   - The HTML file defines the structure of the web page.
   - It includes a container with player information, dice images, a result paragraph, and a roll button.
   - Each player has a dedicated section with input for names and dice images.

#### 2. **CSS Styling:**
   - Styling is applied to create an aesthetically pleasing and responsive layout.
   - The background has a gradient, and the container has a box shadow and rounded corners.
   - Dice images have a maximum width and height, and a shake animation is defined for rolling.

#### 3. **JavaScript Logic:**
   - An array of dice images is defined (`images`), representing faces with numbers 1 through 6.
   - DOM manipulation is used to select and modify elements in the HTML document.
   - Two sets of dice images are selected for each player (`player1Dice` and `player2Dice`).
   - Input fields are selected for player names (`player1NameInput` and `player2NameInput`).
   - The `roll()` function is defined to handle the dice rolling logic.
   - Dice images shake briefly when rolling, and after a delay, new random dice images are set.
   - Total scores for each player are calculated, and a winner or tie is determined.
   - The result is displayed in a paragraph (`#result`).

#### 4. **Learnings and Implementations:**
   - **DOM Manipulation:** The project involves selecting HTML elements and updating their content and attributes using JavaScript.
   - **Animations:** The shake animation is implemented using CSS keyframes.
   - **Event Handling:** The roll button triggers the `roll()` function when clicked.
   - **Randomization:** The project uses `Math.random()` to simulate dice rolls and select random dice images.
   - **Conditional Statements:** Logic is implemented to determine the winner or declare a tie based on the total scores.

#### 5. **Project Outcome:**
   - Users can enter names for two players and roll dice to determine the winner or if it's a tie.
   - The game provides a visual representation of dice rolls and dynamically updates the result.

### Summary:
Your project demonstrates a combination of HTML for structure, CSS for styling, and JavaScript for interactivity. It's a great way to practice web development skills, including DOM manipulation and event handling, while creating a fun and interactive game. Additionally, you've implemented animations and conditional statements to enhance the user experience. Keep building and experimenting to further enhance your web development skills!
