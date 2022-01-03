const quizData = [
    {
        question: "Which statement about Assembly Variables is correct?",
        a: "In Assembly Declaring a variable name may start with a digit",
        b: "Define assembler directive is used for allocation of storage space",
        c: "Variables slows down the processor operations",
        d: "Variables get initialized on their own",
        correct: "b",
    },
    {
        question: "Which isn't an attribute of Variables",
        a: "the definition of a variable can be done after it's used",
        b: "First character of variable name can't be a number",
        c: "variable name can Contains spacing;",
        d: "Variables don't have to be initialized",
        correct: "c",
    },
    {
        question: "Which statement about  define directives is incorrect?",
        a: "Each byte of character is stored as its ASCII value in Binary",
        b: "Each decimal value is automatically converted to its 16-bit binary equivalent.",
        c: "Negative numbers are converted to its 2's complement representation",
        d: "Processor uses the little-endian byte ordering",
        correct: "a",
    },
    {
        question: "Which syntax is the corret way to create a variable?",
        a: "Total db 750h",
        b: "number DW 243556334;",
        c: "real number1 DD 1.234;",
        d: "Array 	dw 	1, 2, 3, 4, 5 ",
        correct: "d",
    },
    {
        question: "What is correct about String variables",
        a: "Every data type have their own format specifier to print variables",
        b: "C variable names are case sensitive",
        c: "strings are variables that contains a Sequence of characters",
        d: "To use the printf() function you must have the header file <stdio.h> included",
        correct: "c",
    },
    {
        question: "What isn't correct about Array variables",
        a: "Every data type have their own format specifier to print variables",
        b: "C variable names are case sensitive",
        c: "strings are variables that contains a Sequence of characters",
        d: "To use the printf() function you must have the header file <stdio.h> included",
        correct: "b",
    },
    {
        question: "Determine the correct Syntax to define multiple variables in the same line of code",
        a: "int x = 5, y =13, z=24;",
        b: "int x = 5 = y =17 z=32;",
        c: "char x ==2, y ==15, z==38;",
        d: "you cannot assign multiple variables in the same line of code",
        correct: "a",
    },
    {
        question: "Determine wich is the correct Syntax to print Variables",
        a: "printf(%c,int_variable);",
        b: "printf==int_variable",
        c: "printf(%c,Char_variable);",
        d: "printf(''%c'',char_variable);",
        correct: "d",
    },
    {
        question: "What isn't correct about string variables",
        a: "Data type of string is char and their own format specifier to print variables is '%s'",
        b: "String variables don't need to includ a header file",
        c: "String variable names must and end with Brackets",
        d: "The value of string variables must be in quotation marks",
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
var heart
if (localStorage.getItem("heart")){
    heart = localStorage.getItem("heart")
}
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
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           if (score > 4){
                quiz.innerHTML = `
               <div  class="quiz-header">
               <h2>You answered ${score}/${quizData.length} questions correctly\nYOU PASSED! 😀</h2>
               <button class="reload" onclick="location.href='/Website Code/Courses/index.html'">Return To Courses</button>
               </div>
               `
           }
           else{
               heart--
               if (heart > 0) {
                   localStorage.setItem("heart",heart)
                   quiz.innerHTML = `
                   <div  class="quiz-header">
                   <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                   <h2>You Haven't Passed 😔,Reamining hearts left ${heart}</h2>
                   <button class="reload" onclick="location.reload()">Reload</button>
                   </div>
                   `
               }
               else {
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
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!");}, 30000);
}

function first_quastion() {
    
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

if (Number(sessionStorage.getItem("user")) === userTypes["Free"]){
    document.getElementById('status__logo').src = "./images/FREE.png";
    //document.getElementById('Copy').style.visibility = 'hidden';
    //document.getElementById('Download').style.visibility = 'hidden';
}
else{
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
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

function Download_file() {
    let downloadText = quizData[currentQuiz].question + ' ' + quizData[currentQuiz].a + '. ' + quizData[currentQuiz].b + '. ' + quizData[currentQuiz].c + '. ' + quizData[currentQuiz].d + '. ' ;
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