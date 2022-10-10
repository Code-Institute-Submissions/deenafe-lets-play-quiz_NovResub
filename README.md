# LET'S PLAY QUIZ

## Table of Contents
1. [General Information](#General-information)
2. [Technologies](#Technologies)
3. [Testing](#Testing)
4. [Depolyment](#Depolyment)
5. [Credits](#Credits)
***

## General Information

**LET'S PLAY QUIZ** is an online Quiz Game with 10 questions that tests the user's knowledge in the areas of current affairs, science, sports and entertainment

Place mockup

***
### **Features**

### *Header and link* 

* The single page on the website contains the How to Play button, the site logo and link to my github page
* This will allow users to get information on features of the game by clicking the How to Play button

### *Favicon* 

* A favicon will be implemented with the logo image of the Quiz.
* This will provide an image in the the tabs header to allow the user to easily identify the website if they have multiple tabs open.

### *Game Instructions* 

* The Game Features can be accessed by clicking the How to Play button on the page header.
* On clicking the How to Play button, a window pops up containing information and general rules of the game.
* To close the pop up window, the user will click the Close button on the pop up.

### *Start Quiz Button* 

* A button on the home page invites the user to click to start the quiz.
* Clicking the button will display the Quiz questions.

### *Quiz questions*

* The quiz questions comprises of 10 question with each question having 4 answer options.
* Only one answer can be selected for each question. An answer is selected by clicking on a button that comes before the answer.
*When an answer is been selected, the outline of the auestion and answers group will highlight with a thicker border.

### *Submit button*

* The submit button when clicked allows the quiz question to be assessed to confirm the correct answers.
* Clicking the button displays a pop up with the score obtained by the user. 

### *Score Area*

* This displays the a score between 0-10 depending on the number of question the user answers correctly.
* Depending on the score obtained by the user, a gif image and message is displayed.
* To close the pop up and return to the home page, the user can click the Restart Quiz button.


## Technologies  
*** 

**HTML**
   * The structure of the web pages was done using html. 

**CSS**
   * The decorative features of the web pages was done using CSS in an external file.

**Javascript**
   * The quiz form logic was done using Javascript in an external file.

**Visual Studio Code**
   * The website was developed using Visual Studio Code IDE

**Gitpod Workpspace**
  *  Used to commit and push code during the development of the Website.

**GitHub**
  *  Code is hosted and deployed on GitHub.

  **Favicon.io**
  *  Favicon files were created at https://favicon.io/favicon-converter/

  ***
## Testing   

***

   ### Responsiveness
The Home page and pop ups were tested for responsiveness using Chrome Developer tools on various device screen sizes ranging from 280px.

The design features was consistent when tested on Chrome, Mozilla Firefox, Opera and Edge browsers.

All pages of the website were responsive when tested on the following devices using Chrome Developer tools.:

1. iPhone Se
2. iPhone 12
3. Samsung Gakaxy 8+
4. iPad Air
5. iPad Mini
6. Galaxy Fold
7. Samsung Galaxy A51

The responsive design features was also consistent when the website was manually opened on the following IOS and Andriod devices:

1. iPhone X 
2. Samsung Galaxy A21s
3. Huawei Honor 8


###  Accessibility  

 [Wave](https://wave.webaim.org/) was used to evaluate the accessibility of the deployed site to ensure the website meets the WCAG Web Accessibilty Standards. The results of the accessibility testing showed that the following were met:

  * There were no color contrast errors in all the pages.
  * Image alternative text is present to give information on the content or function of an image to screen reader users.
  * All fieldsets have legends to provide a description to group of radio buttons.
  * Form labels are present and associated with a form control.
  * The HTML lang atrribute is present to allow screen readers to read the content appropriately.
  

*I was short on time and could not proceed with conducting manual testing. I already downloaded a free screen reader and hope to conduct the manual accessibility testing at a later date.*

###  Navigation Link

 * Testing was performed to ensure the  GitHub icon navigation link on the header opened my github profile in a new tab. This was done by clicking the GitHub icon.

 * Deen Afe's Github profile opened in a new tab.


 ###  Quiz Game

  ###  Confirm Answers

  Testing was done to get the score obtained by a user by declaring a variable and assigning it a number value of 0.

A boolean to confirm if a selected option matches the correct answer was put as condition in an if statement, and if it returns true, variable with the assigned number value increments by 1.





