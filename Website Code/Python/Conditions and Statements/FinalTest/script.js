const quizData = [{
        question: "A must be greater than B Inorder for us to print('Hello World')\nWhich option will accomplish the task?",
        a: "A = 50\nB = 70\nif A > B",
        b: "A = 70\nB = 50\nif B > A",
        c: "A = 100\nB = 90\nif A > B",
        d: "A = 1\nB = 1\n if A > B",
        correct: "c",
    },
    {
        question: "A must be equal to B Inorder for us to print('Hello World')\nWhich option will accomplish the task?",
        a: "A = 50\nB = 70\nif A == B",
        b: "A = 'Hello'\nB = 'Morning'\nif B == A",
        c: "A = True\nB = True\nif A == B",
        d: "A = 19\nB = 18\n if A == B",
        correct: "c",
    },
    {
        question: "Variables A must be Greater than B, and B must be Greater than C for us to print('Hello World')\nWhich option will accomplish the task?",
        a: "A = 20\nB = 20\nC = 20\nif A = B = C",
        b: "A = True\nB = True\nC = True\n if A > B and B > C",
        c: "C = 1.2\nA = 1.9\nB = 1.5\nif A > B and B > C",
        d: "B = 'Max'\nA = 1\nC = True\n if A >= B or B <= C",
        correct: "c",
    },
    {
        question: "Inorder for us to determine if 2 objects are not equal to one another we must use what condition?",
        a: "!=",
        b: "not=",
        c: "=!",
        d: "notEqual=",
        correct: "a",
    },
    {
        question: "which if statement will return true for numbers outside the range of '100-1000'?",
        a: "if x > 100 or x < 1000:",
        b: "if x >= 100 and x <= 1000:",
        c: "if x < 100 or x > 1000:",
        d: "if x < 100 and x >= 1001",
        correct: "d",
    },
    {
        question: "which statement will return True?",
        a: "x = 5\ny = 5\nif x >= y:",
        b: "x = 10\ny = 10\nif y > x+1:",
        c: "x = 'hello'\ny = 'john\nif type(x) != type(y)",
        d: "x = 50\ny = 49\nif y >= x ",
        correct: "a",
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
if (sessionStorage.getItem('DarkMod')) {
    flag = sessionStorage.getItem('DarkMod')
    sessionStorage.setItem('DarkMod', flag);
}

function TestdarkMode() {
    if (flag == 1) {
        var element = document.body;
        element.classList.toggle("dark-mode")
    }
}

if (Number(sessionStorage.getItem("user")) === userTypes["Free"]){
    document.getElementById('status__logo').src = "./images/FREE.png";
   // document.getElementById('Copy').style.visibility = 'hidden';
}
else{
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
}

function Copy_text() {
    var copyText = quizData[currentQuiz].question + ' ' + quizData[currentQuiz].a + '. ' + quizData[currentQuiz].b + '. ' + quizData[currentQuiz].c + '. ' + quizData[currentQuiz].d + '. ' ;
    var el = document.createElement('textarea');
    el.value = copyText;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("the question was copied to the clipboard!");
}
