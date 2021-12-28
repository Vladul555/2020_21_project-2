const Data = [{
        /*Page 1 */
        title: "Python Conditions and If statements",
        mainText: "Python supports the usual logical conditions from mathematics\nEquals: a == b\nNot Equals: a != b\nLess than: a < b\nLess than or equal to: a <= b\nGreater than: a > b\nGreater than or equal to: a >= b\n\nThese conditions can be used in several ways most commonly in 'if statements' and loops\nAn 'if statement' is written by using the if keyword",

    },
    {
        /*Page 2 */
        title: "Examples",
        mainText: "x = 50\ny = 20\nif x > y: print(x is greater than y)\n\na = 'John'\nb = 2.0\nif type(a) != type(b): print(variables are of different types) ",
    },
    {
        /*Page 3*/
        title: "Elif",
        mainText: "The elif keyword is pythons way of saying 'if the previous conditions were not true, then try this condition'",

    },
    {
        /*Page 4*/
        title: "Example",
        mainText: "x = 55\ny = 23\nif x > y: print('x is greater than y)\nelif x == y: print('x and y are euqal')\n\nIn this example a is equal to b, so the first condition is not true, but the elif condition is true, so we print to screen that 'a and b are equal'",
    },
    {
        /*Page 5*/
        title: "Else",
        mainText: "The Else keyword catches anything which isn't caught by the preceding conditions",
    },
    {
        /*Page 6*/
        title: "Example",
        mainText: "x = 99\ny = 89\nif y > x: print('y is greater than x')\nelif x == y: print('x and y are equal)\nelse: print('x is greater than y\n\nIn this example a is greater than b, so the first condition is not true, also the elif condition is not true, so we go to the else condition and print to screen that 'a is greater than b'"
    },
    {
        /*Page 7*/
        title: "You can also have an else without the elif",
        mainText: "x = 500\ny = 250\nif y > x: print('y is greater than x')\nelse: print('y is not greater than x')",
    },
    {
        /*Page 8*/
        title: "And",
        mainText: "The 'and' keyword is a logical operator, and is used to combine conditional statements",
    },
    {
        /*Page 9*/
        title: "Example",
        mainText: "x = 200\ny = 33\nz = 500\nif x > y and z > x: print('both conditions are True')",
    },
    {
        /*Page 10*/
        title: "Or",
        mainText: "The 'or' keyword is a logical operator, and is used to combine conditional statments",
    },
    {
        /*Page 11*/
        title: "Example",
        mainText: "x = 200\ny = 33\nz = 500\nif x > y or z > x: print('both conditions are True')",
    },
    {
        /*Page 12*/
        title: "Nested if",
        mainText: "You can have if statements inside if statements, this is called nested if statements",
    },
    {
        title: "Example",
        mainText: "x = 41\nif x > 25: print('x is above 25')\nif x > 30: print('x is above 30')\nelse: print('x isn't above 30')",
    },
    {
        title: "Pass Statement",
        mainText: "if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error",
    },
    {
        title: "Example",
        mainText: "x = 33\ny = 200\nif y > x: pass",
    },
];

/*my elements in JS need to be connected to id's in HTML to function*/
const intro = document.getElementById('intro')
const title = document.getElementById('title')
const mainText = document.getElementById('mainText')
const nextBtn = document.getElementById('next')
const previousBtn = document.getElementById('previous')

let currentData = 0
let skip = document.getElementById('skip')
if (Number(sessionStorage.getItem("user")) === userTypes["Free"])
    skip.style.display = 'none'
loadData()

/*function loads new data for each page of the theory*/
function loadData() {

    {
        if (currentData == 0) {
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
    if (currentData < Data.length) {
        loadData()
    } else {
        intro.innerHTML = `
           <div class="header">
           <h2 class="test">You completed the theory!</h2>

           <input class="button" type="button" onClick="location.href='../Conditions and Statements/FinalTest/index.html'"
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
    //document.getElementById('Copy').style.visibility = 'hidden';
} else {
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
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