const Data = [
    {
        /*Page 1 */
        title: "Introduction To C",
        mainText: "C is a popular programming language. It was created by Guido van Rossum, and released in 1991." ,
        opt1: "● C is used in Software Development",
        opt2: "● C is used in Web Development",
        opt3: "● C is used in Mathematics",
        opt4: "● C is used in System Scripting",
    },
    {
        /*Page 2 */
        title: "What can C do?",
        mainText: "Find out some of the top uses for C, as we explore why it’s such a popular and diverse programming language.",
        opt1: "● C can connect to database systems. It can also read and modify files",
        opt2: "● C can be used to handle big data and perform complex mathematics.",
        opt3: "● C can be used on a server to create web applications and alongside software to create workflows.",
        opt4: "● C can be used for rapid prototyping, or for production-ready software development.",
    },
    {
        /*Page 3*/
        title: "Why C?",
        mainText: "The python language is one of the most accessible programming languages available.",
        opt1: "● C has syntax that allows developers to write programs with fewer lines than some other programming languages.",
        opt2: "● C has simplified syntax and not complicated, which gives more emphasis on natural language.",
        opt3: "● C runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.",
        opt4: "● C has a simple syntax similar to the English language.",
    },
    {
        /*Page 4*/
        title:"Indendation",
        mainText: "C uses indentation to indicate a block of code.indentation in C is very important.",
        opt1: "● You have to use the same number of spaces in the same block of code, otherwise C will give you an error",
        opt2: "● The number of spaces is up to you as a programmer, but it has to be at least one",
        opt3: "● C will give you an error if you skip the indentation",
        opt4: "",
    },
    {
        /*Page 5*/
        title: "Variables",
        mainText: "Variables are containers for storing data values.",
        opt1: "● A variable is created the moment you first assign a value to it",
        opt2: "● Variables do not need to be declared with any particular type, and can even change type after they have been set",
        opt3: "● You can get the data type of a variable with the type() function",
        opt4: "",
    }

];

/*my elements in JS need to be connected to id's in HTML to function*/
const intro = document.getElementById('intro')
const title = document.getElementById('title')
const mainText = document.getElementById('mainText')
const option1 = document.getElementById('opt1')
const option2 = document.getElementById('opt2')
const option3 = document.getElementById('opt3')
const option4 = document.getElementById('opt4')
const nextBtn = document.getElementById('next')
const previousBtn = document.getElementById('previous')

let currentData = 0

loadData()

/*function loads new data for each page of the theory*/
function loadData(){
{
    if (currentData == 0){
        document.getElementById('previous').style.visibility = 'hidden';
    } else {
        document.getElementById('previous').style.visibility = 'visible';
    }
}
   
    const current_Text_Data = Data[currentData]
    title.innerText = current_Text_Data.title
    mainText.innerText = current_Text_Data.mainText
    option1.innerText = current_Text_Data.opt1
    option2.innerText = current_Text_Data.opt2
    option3.innerText = current_Text_Data.opt3
    option4.innerText = current_Text_Data.opt4
}

/*Next Button changes the page content, when reaching the end a test button or reload appears */
nextBtn.addEventListener('click', () => {
       currentData++
       if(currentData < Data.length) {
           loadData()
       } 
       else {
           intro.innerHTML = `
           <div class="header">
           <h2 class="test">You completed the theory!</h2>

           <input class="button" type="button" onClick="location.href='/Website Code/C/Python/Multiple Questions/index.html'"
                value='Start Test!'>
            <button class="button" onclick="location.reload()">Reload</button>
           </div>
           `
       }
})

/*Previous button to return and read the last page*/
previousBtn.addEventListener('click', () => {
    if(currentData > -1) {
        if(currentData != 0)
            currentData--
        loadData()  
    } 
})

var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!");}, 30000);
}

function first_quastion() {
    
}