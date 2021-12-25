const Data = [
    {
        /*Page 1 */
        title: "C assignment operators",
        mainText: "C supports the usual assignment operators from mathematics.\nEquals:  == \nNot Equals: != \nLess than: <\nLess than or equal to: <=\nGreater than: >\nGreater than or equal to: >=\n\nThese conditions can be used in several ways most commonly betwen two variable in 'if statements' and loops, those conditions will mostly returns the value '1' if Ture or '0' if False",

    },
    {
        /*Page 2 */
        title: "Examples",
        mainText: "int a = 2, b;\n((b = 2) == a)-->1\n\nint x=2;\nint y = (x>5)+1;-->(0+1)=1\n\nchar name1[] = ''John'',name2[]==''vlad'';\n(name1!=name2)-->1",
    },
    {
        /*Page 3 */
        title: "Logical operators",
        mainText: "C uses logical operators to create complicated logical expressions between 2 conditions that use assignment operators, these logical operators are:\n\n'OR' operator that return the value '1' if at least one of the conditions is ture.\n'OR' operator symbolized by '||'.\n\n'AND' operator that return the value '1' if both of the conditions is ture.\n'AND' operator symbolized by '&&'.\n\n'NOT' operator that return the value '1' if the conditions is false.\n'NOT' operator symbolized by '!'.",
    },
    {
        /*Page 4 */
        title: "Examples",
        mainText: "int a=5, b=3, c=0;\n(a>b || c>b)-->T||F-->1\n(a>b && c>b)-->T&&F-->0\n(a!=2 || !c)-->T||F-->1",
    },
    {
        /*Page 5*/
        title: "if statement",
        mainText: "The if statement evaluates the expression inside the parenthesis.\nIf the test expression is evaluated to true, statements inside the body of if are executed.\nIf the test expression is evaluated to false, statements inside the body of if are not executed.\n\nif(expression){\n  statement1;\n  statement2;\n}",

    },
    {
        /*Page 6 */
        title: "Examples",
        mainText: "int test=5\nif(test<10){\n printf(''%d'',test)\n}\n-->'5'\n\nif(test>10){\n printf(''%d'',test)\n}\n-->doesn't do anything",
    },
    {
        /*Page 3*/
        title: "Else statement",
        mainText: "The elif keyword is pythons way of saying 'if the previous conditions were not true, then try this condition'",

    },
    {
        /*Page 4*/
        title: "Example",
        mainText: "int a=5, b=3, c=0;\n(a>b || c>b)-->T||F-->1\n(a>b && c>b)-->T&&F-->0\nif x > y: print('x is greater than y)\nelif x == y: print('x and y are euqal')\n\nIn this example a is equal to b, so the first condition is not true, but the elif condition is true, so we print to screen that 'a and b are equal'",
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

if (Number(sessionStorage.getItem("user")) === userTypes["Free"]){
    document.getElementById('status__logo').src = "./images/FREE.png";
   // document.getElementById('Copy').style.visibility = 'hidden';
}
else{
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
}

function Copy_text() {
    var copyText = Data[currentData].title + ' ' + Data[currentData].mainText + '. ';
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

