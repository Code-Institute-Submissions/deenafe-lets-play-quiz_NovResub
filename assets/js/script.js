function modalOpen() {
    popup.classList.add("popup-modal"); 
}
function modalClose() {
    popup.classList.remove("popup-modal");
}
let popOpen = document.getElementsByTagName("button")[0];
let popClose = document.getElementsByTagName("button")[1];
popOpen.addEventListener('click', modalOpen);
popClose.addEventListener('click', modalClose);

//  This displays the questions after user cilck the "Start Quiz" button

// const startClose = document.getElementsByClassName('start-quiz')

let startRemove = document.getElementById('start-quiz')

function displayQuestions() {
    document.getElementById("questions-area").style.display = "block";
    startRemove.classList.add('remove-start')
}

let startButton = document.getElementById("start-btn");
startButton.addEventListener('click', displayQuestions);