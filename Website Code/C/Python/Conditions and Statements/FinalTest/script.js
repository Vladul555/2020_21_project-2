const quizData = [{
        question: "You are given the code segment:\n int A = 50,B = 70;\nWhich of those expression will return True?",
        a: "A > B",
        b: "B != A",
        c: "B <= A",
        d: "A == B",
        correct: "b",
    },
    {
        question: "You are given the code segment:\n int x = 10,y = 7,z =5;\nWhich of those logical expressions will return False?",
        a: "(x<y || y>z)",
        b: "(x>=z && y>=z)",
        c: "(x!=z && y<=x)",
        d: "(x==y || !z)",
        correct: "d",
    },
    {
        question: "Which of those is a proper syntax for an 'if' expression that prints out 'Hello World'.\nint A=57,B=32,c=5;",
        a: "if(A == B){\nprint(''Hello World'');\n}",
        b: "if(C != A){\nprintf(''Hello World'');\n}",
        c: "if(A <=B||B>C){\nprintf(''Hello World'');\n}",
        d: "if(A>C && B>C){\nprintf(Hello World);\n}",
        correct: "c",
    },
    {
        question: "Which of those code segments execute the statements of 'else'?\nfloat A=37.23,B=52.64",
        a: "if(A == B){\nprintf(''%d equles %d'',A,B);\n}\nelse{\nprintf(''%d does not equals %d'',A,B);\n}",
        b: "if(B != A){\nprintf(''%d does not equals %d'',B,A);\n}\nelse{\nprintf(''%d equles %d'',B,A);\n}",
        c: "if(A >B||B>0){\nprintf(''%d and %d are numbers'',A,B);\n}\nelse{\nprintf(''%d is smaller than 0 and %d is smaller than %d'',B,A,B);\n}",
        d: "if(A<B && B>50){\nprintf(''%d is smaller than %d and %d bigger than 50'',A,B,B);\n}\nelse{\nprintf(''%d is smaller than %d and smaller than 50'',B,A);\n}",
        correct: "a",
    },
    {
        question: "which of those code segments execute the statements of 'else-if'?\nint x=30,y=12,z=25;",
        a: "if(x == y){\nprintf(''%d equles %d'',x,y);\n}\nelse if(y==z){\nprintf(''%d equals %d'',y,z);\n}",
        b: "if(y<=z){\nprintf(''%d is smaller than or equle to %d'',y,z);\n}\nelse if(x>=y){\nprintf(''%d is larger than or equle to %d'',x,y);\n}",
        c: "if(x>z||y=z){\nprintf(''%d is bigger than %d and/or %d equles %d'',x,z,y,z);\n}\nelse if(x!=z){\nprintf(''%d does not equals %d'',x,z);\n}",
        d: "if(x!=z&&y<z){\nprintf(''%d does not equals %d and %d is smaller than %d'',x,z,y,z);\n}\nelse if(y>=z){\nprintf(''%d larger than or equle to %d'',y,z);\n}",
        correct: "b",
    },
    {
        question: "which statement is correct about 'Nested if' conditions?",
        a: "'Nested if' is an 'if' condition that execute their statemets when the expression is evaluated False",
        b: "'Nested if' is a collection of 'if' conditions.",
        c: "'Nested if' an 'if' condition that exists insade an 'else' expression",
        d: "'nested if' is an 'if' condition that have 'if' conditions inside of it.",
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
                updateUser({ cLesson3: true }, id);
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

if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
    document.getElementById('status__logo').src = "./images/FREE.png";
    document.getElementById('Copy').style.visibility = 'hidden';
    document.getElementById('Download').style.visibility = 'hidden';
} else {
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
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