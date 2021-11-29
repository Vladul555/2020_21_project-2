const quizData = [{
        question: "When was Python Created?",
        a: "1991",
        b: "2005",
        c: "1803",
        d: "1994",
        correct: "a",
    },
    {
        question: "What Python cannot do?",
        a: "Python can connect to database systems",
        b: "Python can be used for rapid prototyping",
        c: "Python can be used to handle big data and perform complex mathematics",
        d: "Python can access hardware registers or write interrupt programs",
        correct: "d",
    },
    {
        question: "What isn't correct about variables",
        a: "type() is a function to determine variable type",
        b: "Variables are created the moment you first declare them",
        c: "Changing the type of a variable is possible after they have been set",
        d: "Declaring a variable name may not start with a digit or underscore, and may not end with an underscore ",
        correct: "b",
    },
    {
        question: "What is Indendation in Python?",
        a: "A deep recess or notch on the edge or surface of something",
        b: "To indicate a block of code",
        c: "Anger or annoyance provoked by what is perceived as unfair treatment",
        d: "none of the above",
        correct: "b",
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
               <h2>You answered ${score}/${quizData.length} questions correctly, PASSED! 😀</h2>
               <button class="reload" onclick="location.href='"../../Courses/index.html"'">Return To Courses</button>
               </div>
               `
                updateCourses(sessionStorage.getItem("id"));
            } else {
                quiz.innerHTML = `
               <div  class="quiz-header">
               <h2>You answered ${score}/${quizData.length} questions correctly, FAILED! 😔</h2>
               <button class="reload" onclick="location.reload()">Reload</button>
               </div>
               `
            }
        }
    }
})

var time_in_minutes = 0.2;
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
                window.location.href = "../../Main Menu/index.html"
            } else { window.location.href = "../../Upgrade/index.html" }
        }
    }
    update_clock(); // run function once at first to avoid delay
    var timeinterval = setInterval(update_clock, 1000);
}
run_clock('clockdiv', deadline);