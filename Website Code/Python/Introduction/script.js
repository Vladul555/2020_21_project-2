const Data = [
    {
        /*Page 1 */
        title: "Introduction To Pyton",
        mainText: "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991." ,
        opt1: "Software Development",
        opt2: "Web Development",
        opt3: "Mathematics",
        opt4: "System Scripting",
    },
    {
        /*Page 2 */
        title: "What can Python do?",
        mainText: "Find out some of the top uses for Python, as we explore why it’s such a popular and diverse programming language.",
        opt1: "Python can connect to database systems. It can also read and modify files",
        opt2: "Python can be used to handle big data and perform complex mathematics.",
        opt3: "Python can be used on a server to create web applications and alongside software to create workflows.",
        opt4: "Python can be used for rapid prototyping, or for production-ready software development.",
    },
    {
        /*Page 3*/
        title: "Why Python?",
        mainText: "The python language is one of the most accessible programming languages available.",
        opt1: "Python has syntax that allows developers to write programs with fewer lines than some other programming languages.",
        opt2: "Python has simplified syntax and not complicated, which gives more emphasis on natural language.",
        opt3: "Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.",
        opt4: "Python has a simple syntax similar to the English language.",
    },
];

const intro = document.getElementById('intro')
const title = document.getElementById('title')
const mainText = document.getElementById('mainText')
const option1 = document.getElementById('opt1')
const option2 = document.getElementById('opt2')
const option3 = document.getElementById('opt3')
const option4 = document.getElementById('opt4')
const nextBtn = document.getElementById('button')

let currentData = 0

loadData()

function loadData(){

    const current_Text_Data = Data[currentData]

    title.innerText = current_Text_Data.title
    mainText.innerText = current_Text_Data.mainText
    option1.innerText = current_Text_Data.opt1
    option2.innerText = current_Text_Data.opt2
    option3.innerText = current_Text_Data.opt3
    option4.innerText = current_Text_Data.opt4
}

nextBtn.addEventListener('click', () => {
       currentData++
       if(currentData < Data.length) {
           loadData()
       } 
       else {
           intro.innerHTML = `
           <div class="header">
           <h2 class="test">You completed the theory!</h2>

           <input class="button" type="button" onClick="location.href='/Python/Multiple Questions/index.html'"
                value='Start Test!'>
           </div>
           `
       }
})

