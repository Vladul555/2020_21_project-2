const Data = [{
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
        title: "if conditions",
        mainText: "The if statement evaluates the expression inside the parenthesis.\nIf the expression is evaluated to true, statements inside the body of if tested are executed.\nIf the tested expression is evaluated to false, statements inside the body of if are not executed.\n\nif(expression){\n  statement1;\n  statement2;\n}",

    },
    {
        /*Page 6 */
        title: "Examples",
        mainText: "int test=5\n\nif(test<10){\n printf(''%d'',test);\n}\n-->'5'\n\nif(test>10){\n printf(''%d'',test);\n}\n-->doesn't do anything",
    },
    {
        /*Page 7*/
        title: "Else conditions",
        mainText: "The else condition execute a statement when the 'if' expression is False.\n\nWhen the testd expression in 'if' is evaluated to True:\n??? statements inside the body of 'if' are executed.\n ??? statements inside the body of 'else' are skipped from execution.\n\nWhen the testd expression in 'if' is evaluated to False:\n??? statements inside the body of 'if' are skipped from execution\n??? statements inside the body of 'else' are executed",

    },
    {
        /*Page 8 */
        title: "Example",
        mainText: "int test=5\n\nif(test<10){\n printf(''%d is lower than 10'',test);\n}\nelse{\nprintf(''%d is not lower than 10'',test);\n}\n-->'5 is lower than 10'\n\nif(test>10){\nprintf(''%d is higher than 10'',test);\n}\nelse{\nprintf(''%d is not higher than 10'',test);\n}\n-->'5 is not higher than 10'",
    },
    {
        /*Page 9*/
        title: "Else-if conditions",
        mainText: "The 'else-if' condition execute a statement depending on the evaluation of 'if' expression and have an expression inside the parenthesis itself.\nWhen the first expression 'if' is evaluated to False and the expression in 'else if' evaluated to True C will execute the statements inside the body of 'else if'"
    },
    {
        /*Page 10 */
        title: "Example",
        mainText: "int test=7\n\nif(test>10){\n printf(''%d is higher than 10'',test);\n}\nelse if(test>5){\nprintf(''%d is lower than 10 but higher than 5'',test);\n}\n-->'7 is lower than 10 but higher than 5'",
    },
    {
        /*Page 12*/
        title: "Nested if conditions",
        mainText: "You can have 'if' condition inside an 'if' condition, this is called nested if statements",
    },
    {
        title: "Example",
        mainText: "int x = 41\nif(x > 25){\n printf(''%d is above 25'',x);\nif(x > 30){\n printf('' and also is above 30'',x);\n}\nelse{\n printf(''but isn't above 30'',x);\n}\n}\n-->x is above 25 and also is above 30",
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
    document.getElementById('Copy').style.visibility = 'hidden';
    document.getElementById('Download').style.visibility = 'hidden';
}
else{
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
}

function Copy_text() {
    var copyText = Data[currentData].title + ' ' + Data[currentData].mainText + '. ';
    var el = document.createElement('textarea');
    el.value = copyText;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function Download_file() {
    let downloadText = Data[currentData].title + ' ' + Data[currentData].mainText + '. ';
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