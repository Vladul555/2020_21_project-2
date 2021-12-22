const quizData = [
    {
        question: "What is the output of:\nfor (i = 1;i < 6;i++){\nprint(i,end=' ')\n}",
        a: "1 2 3 4 5",
        b: "0 1 2 3 4 5",
        c: "6 5 4 3 2 1",
        d: "1 2 3 4 5 6",
        correct: "d",
    },
    {
        question: "What is the output of:\ni=1\nwhile i < 5\nif == 3:\nbreak\n i += 1\nprint(i,end= ' ')",
        a: "1 2 3 4",
        b: "1 2 4 5",
        c: "1 2 3",
        d: "0 1 2 4 5",
        correct: "c",
    },
    {
        question: "What is the purpose of the 'Continue' Statement",
        a: "Skipping the current iteration to the following",
        b: "Stopping the loop even if statement is True",
        c: "Exiting the loop cycle and continuing to the next line of code",
        d: "Skipping the current statement and continuing to the next",
        correct: "a",
    },
    {
        question: "Which answer is False",
        a: "For loops are used when the programmer knows how many times the loop should run ",
        b: "Within Python there are 2 primitive loops: While & For",
        c: "Do While is used in Python to execute a statement prior the iteration",
        d: "While iterations run undelessly until the statement is False",
        correct: "c",
    },
];



const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0



loadQuiz()
var heart
if (Number(sessionStorage.getItem("user")) === userTypes["Free"])
if (sessionStorage.getItem("heart")) {
    heart = sessionStorage.getItem("heart")
} else
    heart = 3

function loadQuiz() {

deselectAnswers()

const currentQuizData = quizData[currentQuiz]

questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
let answer
answerEls.forEach(answerEl => {
    if (answerEl.checked) {
        answer = answerEl.id
    }
})
return answer
}


submitBtn.addEventListener('click', () => {
const answer = getSelected()
if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        if (score > 2) {
            quiz.innerHTML = `
           <div  class="quiz-header">
           <h2>You answered ${score}/${quizData.length} questions correctly\nYOU PASSED! 😀</h2>
           <button class="reload" onclick="location.href='/Website Code/Courses/index.html'">Return To Courses</button>
           </div>
           `
        } else if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
            heart--
            if (heart > 0) {
                sessionStorage.setItem("heart", heart)
                quiz.innerHTML = `
               <div  class="quiz-header">
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>
               <h2>You Haven't Passed 😔,Reamining hearts left ${heart}</h2>
               <button class="reload" onclick="location.reload()">Reload</button>
               </div>
               `

            } else {
                quiz.innerHTML = `
               <div  class="quiz-header">
               <h2>You Failed 😢</h2>
               <button class="reload" onclick="location.href='/Website Code/Courses/index.html'">Return To Courses</button>
               </div>
               `
            }
        } else {
            quiz.innerHTML = `
           <div  class="quiz-header">
           <h2>You answered ${score}/${quizData.length} questions correctly</h2><br>
           <h2 style='text-align: center'>You Failed 😢</h2>
           <button class="reload" onclick="location.href='/Website Code/Courses/index.html'">Return To Courses</button>
           </div>
           `
        }
    }
}
})

var time_in_minutes = 10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes * 60 * 1000);


function time_remaining(endtime) {
var t = Date.parse(endtime) - Date.parse(new Date());
var seconds = Math.floor((t / 1000) % 60);
var minutes = Math.floor((t / 1000 / 60) % 60);
var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
var days = Math.floor(t / (1000 * 60 * 60 * 24));
return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds };
}

function run_clock(id, endtime) {
var clock = document.getElementById(id);
var press;

function update_clock() {
    var t = time_remaining(endtime);
    if (t.seconds <= 9) {
        clock.innerHTML = '<b>' + t.minutes + ':0' + t.seconds + '</b>';
    } else {
        clock.innerHTML = '<b>' + t.minutes + ':' + t.seconds + '</b>';
    }
    if (t.total <= 0) {
        clearInterval(timeinterval);
        press = confirm("Time's up!\nPress OK to pay for a premium user or press Cancel to return to the main manu");
        if (press == false) {
            window.location.href = "/Website Code/Main Menu/index.html"
        } else { window.location.href = "/Website Code/Upgrade/index.html" }
    }
}
update_clock(); // run function once at first to avoid delay
var timeinterval = setInterval(update_clock, 1000);
}
run_clock('clockdiv', deadline);


var timeout;
document.onmousemove = function() {
clearTimeout(timeout);
timeout = setTimeout(function() { alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!"); }, 30000);
}