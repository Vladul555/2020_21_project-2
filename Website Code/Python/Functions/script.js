const Data = [{
        /*Page 1*/
        title: "Python Functions",
        mainText: "A function is a block of code which only runs when it is called.\nYou can pass data, known as parameters\ninto a function A function can return data as a result.",

    },
    {
        /*Page 2*/
        title: "Creating a Function",
        mainText: "In Python a function is defined using the keyword 'def'\n\ndef my_Function():\n print('Hello World from a Function')",

    },
    {
        /*Page 3*/
        title: "Calling a Function",
        mainText: "To call a function, use the function name followed by parenthesis",

    },
    {
        /*Page 4 */
        title: "Example",
        mainText: "def my_function():\n print('Hello from a function')\n\nmy_function()\n\nOutput: Hello from a function",

    },
    {
        /*Page 5 */
        title: "Arguments",
        mainText: "Information can be passed into functions as arguments.\nArguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate the with a comma.\n\nIn the following example the function has one argument (fname)\nWhen the function is called, we pass along a first name, which is used inside the function to print the full name.",

    },
    {
        /*Page 6 */
        title: "Example",
        mainText: "def my_function(fname):\n print(fname + 'Cohen')\n\nmy_function('Aryeh')\nmy_function('Tobias')\nmy_function('Josh')\n\nOutput:\nAryeh Cohen\nTobias Cohen\nJosh Cohen",

    },
    {
        /*Page 7 */
        title: "Parameters or Arguments?",
        mainText: "The terms parameter and argument can be used for the same thing: information that are passed into a function\n\nFrom a function's perspective:\nA parameter is the variable listed inside the parentheses in the function definition.\nAn argument is the value that is sent to the function when it is called.",
    },
    {
        /*Page 8 */
        title: "Number of Arguments",
        mainText: "By default, a function must be called with the correct number of arguments.\nMeaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.",
    },
    {
        /*Page 9 */
        title: "Example",
        mainText: "This function expects 2 arguments, and gets 2 arguments:\n\ndef my_function(fname, lname):\n print(fname + '' + lname)\n\nmy_function('Josh', 'Cohen')\n\nOutput: Josh Cohen",
    },
    {
        /*Page 10 */
        title: "However!",
        mainText: "If you try to call the function with 1 or 3 arguments, you will get an error:",
    },
    {
        /*Page 11 */
        title: "Example",
        mainText: "This function expects 2 arguments, but gets only 1:\n\ndef my_function(fname, lname):\nprint(fname + ' ' + lname)\n\nmy_function('Josh')\n\nOutput: TypeError: my_function() missing 1 required positional argument: 'lname'",
    },
    {
        /*Page 12 */
        title: "Arbitrary Arguments",
        mainText: "If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition\nThis way the function will receive a tuple of arguments, and can access the items accordingly:",
    },
    {
        /*Page 13 */
        title: "Example",
        mainText: "If the number of arguments is unknown, add a * before the parameter name:\ndef my_function(*kids):\nprint('The youngest child is ' + kids[2])\n\nmy_function('Josh','Tobias','Liz')\n\nOutput: The youngest child is Linus",
    },
    {
        /*Page 14*/
        title: "Return Values",
        mainText: "To let a function return a value, use the return statement\n\ndef my_Function(a):\nreturn 3 * a\n\n print(my_function(2))\nprint(my_function(4))\n\nOutput:\n6\n12",
    },
    {
        title: "Recursion",
        mainText: "Python also accepts function recursion, which means a defined function can call itself.\nRecursion is a common mathematical and programming concept. It means that a function calls itself.\nThis has the benefit of meaning that you can loop through data to reach a result.",
    },
    {
        title: "In This Example",
        mainText: "tri_recursion() is a function that we have defined to call itself ('recurse').\nWe use the k variable as the data, which decrements (-1) every time we recurse.\n    The recursion ends when the condition is not greater than 0 (i.e. when it is 0).",
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
function loadData() {
    if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
        let skip = document.getElementById("skip")
        skip.style.display = 'none'
    }
    if (currentData == 0)
        document.getElementById('previous').style.visibility = 'hidden';
    else
        document.getElementById('previous').style.visibility = 'visible';

    const current_Text_Data = Data[currentData]
    title.innerText = current_Text_Data.title
    mainText.innerText = current_Text_Data.mainText
}

/*Next Button changes the page content, when reaching the end a test button or reload appears */
nextBtn.addEventListener('click', () => {
    currentData++
    if (currentData < Data.length) {
        loadData()
    } else {
        intro.innerHTML = `
           <div class="header">
           <h2 class="test">You completed the theory!</h2>

           <input class="button" type="button" onClick="location.href='../Functions/FinalTest/index.html'"
                value='Start Test!'>
            <button class="button" onclick="location.reload()">Reload</button>
           </div>
           `
    }
})

/*Previous button to return and read the last page*/
previousBtn.addEventListener('click', () => {
    if (currentData > -1) {
        if (currentData != 0)
            currentData--
            loadData()
    }
})

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

if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
    document.getElementById('status__logo').src = "./images/FREE.png";
    document.getElementById('Copy').style.visibility = 'hidden';
    document.getElementById('Download').style.visibility = 'hidden';
}
else {
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
}

function Copy_text() {
    var copyText = Data[currentData].title + ' ' + Data[currentData].mainText + '. ' + Data[currentData].opt1 + '. ' + Data[currentData].opt2 + '. ' + Data[currentData].opt3 + '. ' + Data[currentData].opt4 + '. ';
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
    let downloadText = Data[currentData].title + Data[currentData].mainText + Data[currentData].opt1 + Data[currentData].opt2 + Data[currentData].opt3 + Data[currentData].opt4;
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