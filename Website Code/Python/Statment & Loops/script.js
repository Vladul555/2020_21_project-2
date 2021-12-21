const Data = [
    {
        /*Page 1 */
        title: "Variables",
        mainText: "Variables are containers for storing data values\nPython has no command for declaring a variable\nA variable is created the moment you first assign a value to it",

    },
    {
        /*Page 2 */
        title: "Example 1",
        mainText: "x = 5\n y = 'John'\nprint(x) = 5\nprint(y) = John",
    },
    {
        /*Page 3*/
        title: "Example 2",
        mainText: "x = 4 --> x is of type int\nx = 'Sally' --> x is of type str\nprint(x) --> Sally",
 
    },
    {
        /*Page 4*/
        title: "Case-Sensitive",
        mainText: "a = 4\nA = 'Sally'\n#A will not override a",
    },
    {
        /*Page 5*/
        title: "Casting",
        mainText: "If you want to specify the data type of a variable, this can be done with casting\nx = str(3) --> # x will be '3'\ny = int(3) --> # y will be 3\nz = float(3) --> # z will be 3.0",
    },
    {
        title: "Variable Names",
        mainText: "A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume)",
    },
    {
        title: "Rules for Python variable names",
        mainText: "Must start with a letter or the underscore character\nCannot start with a number\nCase-sensitive (age, Age and AGE are three different variables)",
    },
    {
        title: "Example 1",
        mainText: "Legal variable names\nmyvar = 'John'\nmy_var = 'John\n_my_var = 'John'\nmyVar = 'John'\nMYVAR = 'John'\nmyvar2 = 'John'",
    },
    {
        title: "Example 2",
        mainText: "illegal variable names\n2myvar = 'John'\nmy-var = 'John\nmy var = 'John'",

    },
    {
        title: "Output Variables",
        mainText: "The Python print statement is often used to output variables\nTo combine both text and a variable\nPython uses the + character\nYou can also use the + character to add a variable to another variable",
    },
    {
        title: "Example 1",
        mainText: "x = 'awesome'\nprint('Python is' + x) --> Python is\ny = 'Python is'\nprint(y+x) --> Python is awesome",
    },
    {
        title: "Example 2",
        mainText: "However If you try to combine a string and a number\nPython will give you an error\nx = 5\ny = 5\nprint(x+y) --> TypeError unsupported type for + 'int' and 'str'",
    },
    {
        title: "Global Variables",
        mainText: "Variables that are created outside of a function are known as global variables\nGlobal variables can be used both inside and outside functions",
    },
    {
        title: "Example 1",
        mainText: "x = 'awesome'\n   def myFunc():\n   print('Python is' + x)\nmyFunc()\nOutput: Python is awesome",
    },
    
  ];

/*my elements in JS need to be connected to id's in HTML to function*/
const intro = document.getElementById('intro')
const title = document.getElementById('title')
const mainText = document.getElementById('mainText')
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

           <input class="button" type="button" onClick="location.href='../Variables/FinalTest/index.html'"
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