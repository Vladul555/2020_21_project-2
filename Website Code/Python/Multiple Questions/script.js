const quizData = [
    {
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

const quiz= document.getElementById('quiz')
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
           quiz.innerHTML = `
           <div  class="quiz-header">
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button class="reload" onclick="location.reload()">Reload</button>
           </div>
           `
       }
    }
})