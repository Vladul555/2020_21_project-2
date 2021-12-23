const Data = [
    {
        /*Page 1 */
        title: "Introduction To C",
        mainText: "C is a popular programming language, developed by Dennis Ritchie at AT&T Bell Labs, the USA, between 1969 and 1973." ,
        opt1: "● C is used in general-purpose programming",
        opt2: "● C is a mid-level structured oriented programming language",
        opt3: "● C is used to develop system application software.",
        opt4: "● C has been written in assembly language",
    },
    {
        /*Page 2 */
        title: "What can C do?",
        mainText: "Find out some of the top uses for C, as we explore why it is such a popular programming language.",
        opt1: "● C language is used for developing system applications.",
        opt2: "● C language is used to develop databases, It can also read and modify files.",
        opt3: "● C language is used in developing an operating system",
        opt4: "● C language is used for compiler production",
    },
    {
        /*Page 3*/
        title: "Why C?",
        mainText: "C language is one of the most accessible programming languages available.",
        opt1: "● C is the building block for many other programming languages.",
        opt2: "● Programs written in C are highly portable.",
        opt3: "● C have Several standard functions that can be used to develop programs.",
        opt4: "● The modular structure makes code debugging, maintenance, and testing easier.",
    },
    {
        /*Page 4*/
        title:"Indendation",
        mainText: "C uses indentation of blocks of code to convey program structure. Indendation of code in C is very important.",
        opt1: "● You have to use the same number of spaces in the same block of code, otherwise C will give you an error",
        opt2: "● The number of spaces is up to you as a programmer, but it has to be at least one",
        opt3: "● every line/operation of code ends with ';'",
        opt4: "● Indendation is used to clarify the link between control flow constructs such as conditions or loops.",
    },
    {
        /*Page 5*/
        title: "Variables",
        mainText: "Variables are containers for storing data values.",
        opt1: "● Variables in C are composed by 3 thing. a data type, a name, and a value.",
        opt2: "● To create a variable in C you must first declare the data type, give the variable a name then assign a value to it.",
        opt3: "● The name of variables must contain letters, it can also have numbers but it can't only be composed of them.",
        opt4: "● The value of the variable must match data the type otherwise C will give you an error.",
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

           <input class="button" type="button" onClick="location.href='/Website Code/C/Multiple Questions/index.html'"
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