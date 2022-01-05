const quizData = [{
        question: "When was C developed?",
        a: "1803-1805",
        b: "2005-2009",
        c: "1969-1973",
        d: "1988-1994",
        correct: "c",
    },
    {
        question: "What C cannot do?",
        a: "C can be used to connect to database systems",
        b: "C can be used to developed database systems",
        c: "C can be used in developing an operating system",
        d: "C can be used for compiler production",
        correct: "a",
    },
    {
        question: "What isn't correct about variables",
        a: "A variable data type must be declare before it can be used",
        b: "The value of a variable must match data the data type",
        c: "The name of variables can contain numbers",
        d: "The name of variables doesn't have to contain letters",
        correct: "d",
    },
    {
        question: "What does Indendation do in C?",
        a: "defines the value of variables",
        b: "creates loops and conditions",
        c: "Clarifies the link between control flow constructs",
        d: "none of the above",
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
if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) //Hearts are only defined for a free user
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
            currentQuiz++
        } else {
            if (Number(sessionStorage.getItem("user")) === userTypes["Premium"]) {
                let reTry = window.confirm("Incorrect Answer\nTry Again?")
                if (reTry == true) // when pressing OK
                    loadQuiz()
                else { // when pressing cancel
                    currentQuiz++
                }
            } else {
                currentQuiz++
            }
        }
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            if (score > 2) {
                let id = sessionStorage.getItem('id')
                updateUser({ cLesson1: true }, id);
                updateLessons(id);
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
               <button class="reload" onclick="location.reload()">Try again?</button>
               </div>
               `
            }
        }
    }
})

if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
    document.getElementById('status__logo').src = "./images/FREE.png";
    document.getElementById('Copy').style.visibility = 'hidden';
    document.getElementById('Download').style.visibility = 'hidden';
} else {
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
    document.getElementById("timerTitle").style.display = 'none'
    run_clock() = undefined;
}
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


var timeout

function afkToggle() {
    if (!afkFlag) {
        afkFlag = true;
        sessionStorage.setItem('afk', afkFlag);
        document.onmousemove = function() {
            clearTimeout(timeout);
            timeout = setTimeout(function() { alert("We noticed you are AFK\nTaking a break is important!\nWe are awaiting your eager return!"); }, 5000);
        }
    } else {
        afkFlag = false;
        sessionStorage.setItem('afk', afkFlag);
        clearTimeout(timeout)
        document.onmousemove = undefined;
    }
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


function Copy_text() {
    var copyText = quizData[currentQuiz].question + ' ' + quizData[currentQuiz].a + '. ' + quizData[currentQuiz].b + '. ' + quizData[currentQuiz].c + '. ' + quizData[currentQuiz].d + '. ';
    var el = document.createElement('textarea');
    el.value = copyText;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("the question was copied to the clipboard!");
}

function Download_file() {
    let downloadText = quizData[currentQuiz].question + ' ' + quizData[currentQuiz].a + '. ' + quizData[currentQuiz].b + '. ' + quizData[currentQuiz].c + '. ' + quizData[currentQuiz].d + '. ';
    // Convert the text to BLOB.
    const textToBLOB = new Blob([downloadText], { type: 'text/plain' });
    const sFileName = 'formData.txt'; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}