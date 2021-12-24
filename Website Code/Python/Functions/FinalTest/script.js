const quizData = [{

    question: "What is the correct function declartion syntax",
    a: "define my_function()",
    b: "def my_function()",
    c: "function my_function()",
    d: "Def my_function()",
    correct: "b",
},
{
    question: "What is the correct exection for:\ndef my_function():\nprint('Hello from a function')",
    a: "my_function()",
    b: "exe my_function()",
    c: "execute.my_function()",
    d: "start my_function()",
    correct: "a",
},
{
    question: "def my_function(fname, lname):\nprint(__)\n\nwhat is the correct way to print the full name?",
    a: "print(fname+lname)",
    b: "print(fname), print(lname)",
    c: "print(fname + ' ' lname)",
    d: "print(fname, lname)",
    correct: "c",
},
{
    question: "def my_function(x):\nWhat is the incorrect way to return the x parameter plus 5",
    a: "return x + 5",
    b: "y = 5\nreturn x + y",
    c: "y = x + 5\nreturn y",
    d: "return x.value + 5",
    correct: "d",
},
{
    question: "If you do not know the number of arguments that will be passed into your function, there is a prefix you can add in the function definition, which prefix?",
    a: "def my_function(*args kids)",
    b: "def my_function(*kids)",
    c: "def my_function(*args_kids)",
    d: "def my_function(args*kids)",
    correct: "b",
},
{
    question: "If you do not know the number of keyword arguments that will be passed into your function, there is a prefix you can add in the function definition, which prefix?",
    a: "def my_function(**args_kid)",
    b: "def my_function(*kid)",
    c: "def my_function(**args.kid)",
    d: "def my_function(**kid)",
    correct: "d",
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
    if (sessionStorage.getItem("heart")) 
        heart = sessionStorage.getItem("heart")
    else
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
        if (score > 4) {
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

if(sessionStorage.getItem('DarkMod')){
    flag = sessionStorage.getItem('DarkMod')
    sessionStorage.setItem('DarkMod',flag);
}

if(sessionStorage.getItem('DarkMod')){
    flag = sessionStorage.getItem('DarkMod')
    sessionStorage.setItem('DarkMod',flag);
}

function TestdarkMode() {
  if (flag == 1){
    var element = document.body;
    element.classList.toggle("dark-mode")
  }
}