

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

function displayQuestions() {
    document.getElementById("questions-area").style.display = "block";
    // document.getElementsByClassName('start-quiz').style.display = "block";
    

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
                        document.getElementsByClassName('question-field')[0].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question2.length; i++) {
        if(question2[i].checked) {
            document.getElementById("result2").innerHTML
                        = "You selected: " + question2[i].value;
                        document.getElementsByClassName('question-field')[1].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question3.length; i++) {
        if(question3[i].checked) {
            document.getElementById("result3").innerHTML
                        = "You selected: " + question3[i].value;
                        document.getElementsByClassName('question-field')[2].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question4.length; i++) {
        if(question4[i].checked) {
            document.getElementById("result4").innerHTML
                        = "You selected: " + question4[i].value;
                        document.getElementsByClassName('question-field')[3].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question5.length; i++) {
        if(question5[i].checked) {
            document.getElementById("result5").innerHTML
                        = "You selected: " + question5[i].value;
                        document.getElementsByClassName('question-field')[4].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question6.length; i++) {
        if(question6[i].checked) {
            document.getElementById("result6").innerHTML
                        = "You selected: " + question6[i].value;
                        document.getElementsByClassName('question-field')[5].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question7.length; i++) {
        if(question7[i].checked) {
            document.getElementById("result7").innerHTML
                        = "You selected: " + question7[i].value;
                        document.getElementsByClassName('question-field')[6].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question8.length; i++) {
        if(question8[i].checked) {
            document.getElementById("result8").innerHTML
                        = "You selected: " + question8[i].value;
                        document.getElementsByClassName('question-field')[7].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question9.length; i++) {
        if(question9[i].checked) {
            document.getElementById("result9").innerHTML
                        = "You selected: " + question9[i].value;
                        document.getElementsByClassName('question-field')[8].style.border = "1px solid black"
        }
    }

    for (i = 0; i < question10.length; i++) {
        if(question10[i].checked) {
            document.getElementById("result10").innerHTML
                        = "You selected: " + question10[i].value;
                        document.getElementsByClassName('question-field')[9].style.border = "1px solid black"
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


//  This will check the correct answers and assign scores 
let correct = 0;

function checkAnswer() {

    

    if (question1[1].checked === true) {
        correct++;
    }

    if (question2[3].checked === true) {
        correct++;
    }

    if (question3[1].checked === true) {
        correct++;
    }

    if (question4[2].checked === true) {
        correct++;
    }

    if (question5[0].checked === true) {
        correct++;
    }

    if (question6[0].checked === true) {
        correct++;
    }

    if (question7[3].checked === true) {
        correct++;
    }

    if (question8[0].checked === true) {
        correct++;
    }

    if (question9[0].checked=== true) {
        correct++;
    }

    if (question10[1].checked === true) {
        correct++;
    }

    document.getElementById('score-area').style.visibility = "visible";
    document.getElementById('scores').innerHTML = "You scored " + correct + " from 10.";
}

const submitButton = document.getElementById('btn-sub');
submitButton.addEventListener('click', checkAnswer);

// This should display a message and image depending on the score
let gradeMessage = document.getElementById('grade-message');

function scoreGrading() {
    let pics = ["assets/images/poor1.webp", "assets/images/better2.webp", "assets/images/dobetter3.webp", "assets/images/fantastic4.webp", "assets/images/genius5.webp"]
   

    if (correct < 1) {
        gradeMessage.innerHTML = `<img src="${pics[0]}" alt="Two men with gloomy demeanor"> <br> <span>A poor result, why not try again</span> `}
     
     if (correct > 1 && correct < 5) {
        gradeMessage.innerHTML = `<img src="${pics[1]}" alt="Man in kung-fu pose challenging viewer to do better"> <br> <span> You can do better, why not try again. </span> ` }
     
     if (correct >= 5 && correct < 8) {
        gradeMessage.innerHTML = `<img src="${pics[2]}" alt="Man encouraging and urging viewer to improve"> <br> <span> You did good, but you can do better. </span>` }
     
     if (correct >= 8 && correct < 10) {
        gradeMessage.innerHTML = `<img src="${pics[3]}" alt="Man performing on stage in exicted mood"> <br> <span> You did Great!!!. </span>`}
     
     if (correct == 10) {
        gradeMessage.innerHTML = `<img src="${pics[4]}" alt="A famous genius, Albert Einstein"> <br> <span> Excellent!!! you must be a genuis. </span>`}

}

submitButton.addEventListener('click', scoreGrading)

// Validate form to ensure all questions are answered

const quest1 = document.getElementsByClassName('question1')
const quest2 = document.getElementsByClassName('question2')
const quest3 = document.getElementsByClassName('question3')
const quest4 = document.getElementsByClassName('question4')
const quest5 = document.getElementsByClassName('question5')
const quest6 = document.getElementsByClassName('question6')
const quest7 = document.getElementsByClassName('question7')
const quest8 = document.getElementsByClassName('question8')
const quest9 = document.getElementsByClassName('question9')
const quest10 = document.getElementsByClassName('question10')

function validate(event) {
    
    for ( let i = 0; i < quest1.length; i++) {
        if (quest1[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[0].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
        }
    }

    for ( let i = 0; i < quest2.length; i++) {
        if (quest2[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[1].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
        }
    }

    for ( let i = 0; i < quest3.length; i++) {
        if (quest3[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[2].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
        }
    }

    for ( let i = 0; i < quest4.length; i++) {
        if (quest4[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[3].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
        }
    }

    for ( let i = 0; i < quest5.length; i++) {
        if (quest5[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[4].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
              
        }
    }

    for ( let i = 0; i < quest6.length; i++) {
        if (quest6[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[5].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
             
        }
    }

    for ( let i = 0; i < quest7.length; i++) {
        if (quest7[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[6].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
             
        }
    }

    for ( let i = 0; i < quest8.length; i++) {
        if (quest8[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[7].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
              
        }
    }

    for ( let i = 0; i < quest9.length; i++) {
        if (quest9[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[8].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
                
        }
    }

    for ( let i = 0; i < quest10.length; i++) {
        if (quest10[i].checked) {
            return true;
        } else {
            document.getElementById("error").innerHTML= "Please attempt to answer all questions";
            document.getElementsByClassName('question-field')[9].style.border = "2px solid red"
            document.getElementById('score-area').style.visibility = "hidden";
            event.preventDefault();
                
        }
    }

} 

const form = document.getElementById('quiz-form');
form.addEventListener('submit', validate)