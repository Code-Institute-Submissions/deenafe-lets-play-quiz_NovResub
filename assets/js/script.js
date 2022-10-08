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

// Displays Seclected Radio values
const question1 = document.getElementsByName('question1');
const question2 = document.getElementsByName('question2');
const question3 = document.getElementsByName('question3');
const question4 = document.getElementsByName('question4');
const question5 = document.getElementsByName('question5');
const question6 = document.getElementsByName('question6');
const question7 = document.getElementsByName('question7');
const question8 = document.getElementsByName('question8');
const question9 = document.getElementsByName('question9');
const question10 = document.getElementsByName('question10');

function displayRadioValue() {
    for (i = 0; i < question1.length; i++) {
        if(question1[i].checked) {
            document.getElementById("result1").innerHTML
                        = "You selected: " + question1[i].value;
                        document.getElementsByClassName('question-field')[0].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question2.length; i++) {
        if(question2[i].checked) {
            document.getElementById("result2").innerHTML
                        = "You selected: " + question2[i].value;
                        document.getElementsByClassName('question-field')[1].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question3.length; i++) {
        if(question3[i].checked) {
            document.getElementById("result3").innerHTML
                        = "You selected: " + question3[i].value;
                        document.getElementsByClassName('question-field')[2].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question4.length; i++) {
        if(question4[i].checked) {
            document.getElementById("result4").innerHTML
                        = "You selected: " + question4[i].value;
                        document.getElementsByClassName('question-field')[3].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question5.length; i++) {
        if(question5[i].checked) {
            document.getElementById("result5").innerHTML
                        = "You selected: " + question5[i].value;
                        document.getElementsByClassName('question-field')[4].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question6.length; i++) {
        if(question6[i].checked) {
            document.getElementById("result6").innerHTML
                        = "You selected: " + question6[i].value;
                        document.getElementsByClassName('question-field')[5].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question7.length; i++) {
        if(question7[i].checked) {
            document.getElementById("result7").innerHTML
                        = "You selected: " + question7[i].value;
                        document.getElementsByClassName('question-field')[6].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question8.length; i++) {
        if(question8[i].checked) {
            document.getElementById("result8").innerHTML
                        = "You selected: " + question8[i].value;
                        document.getElementsByClassName('question-field')[7].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question9.length; i++) {
        if(question9[i].checked) {
            document.getElementById("result9").innerHTML
                        = "You selected: " + question9[i].value;
                        document.getElementsByClassName('question-field')[8].style.border = "2px solid black"
        }
    }

    for (i = 0; i < question10.length; i++) {
        if(question10[i].checked) {
            document.getElementById("result10").innerHTML
                        = "You selected: " + question10[i].value;
                        document.getElementsByClassName('question-field')[9].style.border = "2px solid black"
        }
    }

}
// Assisted by Tutor Ed (Calls the displayRadioValue function on each button for all radio groups)
question1.forEach(el => el.addEventListener('click', displayRadioValue));
question2.forEach(el => el.addEventListener('click', displayRadioValue));
question3.forEach(el => el.addEventListener('click', displayRadioValue));
question4.forEach(el => el.addEventListener('click', displayRadioValue));
question5.forEach(el => el.addEventListener('click', displayRadioValue));
question6.forEach(el => el.addEventListener('click', displayRadioValue));
question7.forEach(el => el.addEventListener('click', displayRadioValue));
question8.forEach(el => el.addEventListener('click', displayRadioValue));
question9.forEach(el => el.addEventListener('click', displayRadioValue));
question10.forEach(el => el.addEventListener('click', displayRadioValue));