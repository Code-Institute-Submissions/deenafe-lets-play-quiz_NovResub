// Popup modal for "How to play" button

// let popup = document.getElementById("popup");
// let popOpen = document.getElementById("btn-open");
// let popClose = document.getElementById("btn-close");

function openPopup(event) {
    let popup = document.getElementById("popup");
    let popOpen = document.getElementById("btn-open");
    let popClose = document.getElementById("btn-close");
    popup.classList.add("popup-modal");
}


function closePopup(event) {
    popup.classList.remove("popup-modal");
}

popOpen.addEventListener('click', openPopup);
popClose.addEventListener('click', closePopup);


// Start quiz button

function displayQuestions(event) {
    let startButton = document.getElementById("start-btn")
    let startQuiz = document.getElementsByClassName("start-quiz")
    let displayQuestions = document.getElementById("questions-area").style.display = "block";
}

// function removeStart(event) {
//     startQuiz.remove()
// }


startButton.addEventListener('click', displayQuestions)
// startQuiz.addEventListener('click', removeStart)

// Function for submit quiz

submitQuiz() {

}

// Check correct answers

checkAnswer() {

}

// Display answers checked by user

displayCheckedAnswer() {

}

// Tally the score 

incrementScore() {

}


// To add an icon to the wrong/correct answers 

markQuestions() {

}



