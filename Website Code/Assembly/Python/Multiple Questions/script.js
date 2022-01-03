const quizData = [{
        question: "which statement about Assembly is correct?",
        a: "Assembly is a low-level language designed for a specific family of processors",
        b: "Assembly language is used to develop databases",
        c: "Assembly is a mid-level structured oriented programming language",
        d: "Assembly is used in System Scripting",
        correct: "a",
    },
    {
        question: "which statement isn't an advantage of Assembly?",
        a: "Assembly allows hardware-specific complex jobs",
        b: "Assembly requires less memory and execution time",
        c: "Assembly can be used to handle big data and perform complex mathematics",
        d: "Assembly is suitable for time-critical jobs",
        correct: "c",
    },
    {
        question: "What isn't correct about PC Hardware",
        a: "Registers are processor components that hold data and address",
        b: "A processor supports only one type of data size",
        c: "To execute a program the system copies it from the external device into the internal memory",
        d: "The fundamental unit of computer storage is a 'bit' ",
        correct: "b",
    },
    {
        question: "What is the Binary definition of the number 53?",
        a: "101101",
        b: "1101001",
        c: "011010",
        d: "110101",
        correct: "d",
    },
    {
        question: "What is the Hexadecimal definition of the number 100 ?",
        a: "A3B",
        b: "64",
        c: "1F4",
        d: "8CD1",
        correct: "b",
    },
    {
        question: "What is the Binary definition of the Hexadecimal number 8CD1 ?",
        a: "1111 1010 1101 1000",
        b: "1101 0110 0011 0101",
        c: "1000 1100 1101 0001",
        d: "0110 0110 1100 1010",
        correct: "c",
    },
    {
        question: "What is the Hexadecimal definition of the Binary number 1111101011011000 ?",
        a: "FAD8",
        b: "3A6C",
        c: "1FEA",
        d: "F39B",
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
if (localStorage.getItem("heart")) {
    heart = localStorage.getItem("heart")
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
            if (score > 5) {
                quiz.innerHTML = `
               <div  class="quiz-header">
               <h2>You answered ${score}/${quizData.length} questions correctly\nYOU PASSED! 😀</h2>
               <button class="reload" onclick="location.href='/Website Code/Courses/index.html'">Return To Courses</button>
               </div>
               `
            } else {
                heart--
                if (heart > 0) {
                    localStorage.setItem("heart", heart)
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
if (sessionStorage.getItem('afk') == "false")
    afkFlag = false;
else
    afkFlag = true;
sessionStorage.setItem('afk', afkFlag)

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
if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
    document.getElementById('status__logo').src = "./images/FREE.png";
    //document.getElementById('Copy').style.visibility = 'hidden';
    d//ocument.getElementById('Download').style.visibility = 'hidden';
}
else{
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
}     
function Copy_text() {
    var copyText = quizData[currentQuiz].question + ' ' + quizData[currentQuiz].a + '. ' + quizData[currentQuiz].b + '. ' + quizData[currentQuiz].c + '. ' + quizData[currentQuiz].d + '. ';
    var el = document.createElement('textarea');
    el.value = copyText;
    el.setAttribute('readonly', '');
    // el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("the question was copied to the clipboard!");
}

function Download_file() {
    var downloadText = quizData[currentQuiz].question + ' ' + quizData[currentQuiz].a + '. ' + quizData[currentQuiz].b + '. ' + quizData[currentQuiz].c + '. ' + quizData[currentQuiz].d + '. ' ;
    // Convert the text to BLOB.
    const textToBLOB = new Blob([downloadText], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}