const Data = [
    { /*Page 1*/
        title: "what are C Loops?",
        mainText: "In C programming a loop is used to repeat a block of code until the specified condition is met.\nIn this tutorial, you will learn to create for loop in C programming with the help of examples.",
    },
   { /*Page 2*/
    title: "types of C Loops",
    mainText: "In C language there are 3 kinds of loop commands:\n'For' loops, 'While' loops, and 'do-while' loops.",
   },
   { /*Page 3*/
    title: "'For' Loops syntax",
    mainText: "The syntax of the for loop is:\nfor (initialization; testExpression; updateStatement){\n'statements inside the body of loop'\n}",
   },
   { /*Page 4*/
    title: "How does the 'for' loops works?",
    mainText: "● The 'initialization' statement is executed only once.\n● Then the 'test' expression is evaluated, If the test expression is evaluated to 'False' the loop is terminated.\n● However if the 'test' expression is evaluated 'True' the statements inside the body of the for loop are executed, and the 'update' expression is updated.\n● The test expression is evaluated again.\n\nThis process goes on until the test expression is false. When the test expression is false, the loop terminates.",
   },
   { /*Page 5*/
    title: "Example",
    mainText: "#include <stdio.h>\n\nint main(){\nint i;\nfor (i = 1; i < 11; ++i){\nprintf(''%d '',i);\n}\nreturn 0;\n}\n-->'1 2 3 4 5 6 7 8 9 10'",
   },
   { /*Page 6*/
    title: "'While' loops syntax",
    mainText: "while (testExpression){\n'the body of the loop'\n}",
   },
   { /*Page 7*/
    title: "How does the 'While' loops works",
    mainText: "● The 'while' loop evaluates the 'testExpression' inside the parentheses\n● If testExpression is evaluated 'True' the statements inside the body of 'while' loop are executed, then the 'testExpression' is evaluated again.\n● The process goes on until 'testExpression' is evaluated to false.\n● If 'testExpression' is 'False', the loop is terminates",
   },
   { /*Page 8*/
    title: "Example",
    mainText: "#include <stdio.h>\n\nint main(){\nint i = 1;\nwhile (i <= 5){\nprintf(''%d\n'', i);\n++i;\n}\nreturn 0;\n}\n\noutput:\n'1\n2\n3\n4\n5'",
   },
   { /*Page 9*/
       title: "'do-while' loops",
       mainText: "The 'do-while' loop is similar to the 'while' loop with one important difference. The body of 'do-while' loop is executed at least once, only then the test expression is evaluated.",
   },
   { /*Page 10*/
       title: "'do-While' loops syntax",
       mainText: "do{\n'the body of the loop'\n}\nwhile (testExpression);",
   },
   { /*Page 11*/
    title: "How does the 'do-While' loops works",
    mainText: "● The body of 'do-while' loop is executed once and then the 'testExpression' is evaluated.\n● If 'testExpression' is 'True', the body of the loop is executed again and 'testExpression' is evaluated once more.\n● This process goes on until 'testExpression' becomes 'False'\n● If 'testExpression' is 'False' the loop is terminates",
   },
   { /*Page 12*/
    title: "Example",
    mainText: "#include <stdio.h>\n\nint main(){\nint i = 1;\nwhile (i <= 5){\nprintf(''%d\n'', i);\n++i;\n}\nreturn 0;\n}\n\noutput:\n'1\n2\n3\n4\n5'",
   },
   { /*Page 8*/
    title: "The Break Statement",
    mainText: "With the 'Break' statement we can stop the loop iterations even if the while condition is True",
   },
   { /*Page 9*/
    title: "Example",
    mainText: "Exit the loop when i is 2:\ni=0\nwhile i < 5\n print(i,end=' ')\nif i == 2\n break\ni+=1\n\nOutput: 1 2",
   },
   { /*Page 10*/
    title: "The Continue Statement",
    mainText: "With the 'Continue' statement we can stop the current iteration,and continue with the next:",
   },
   {/*Page 11*/
       title: "Example",
       mainText: "i=0\nWhile i < 5\ni+=1\nif i == 3\n continue\nprint(i,end=' ')\n\nOutput: 1 2 4 5",
   },
   {/*Page 12*/
       title: "The Else Statement",
       mainText: "With the 'Else' Statement we can run a block of code once when the condition no longer is True",
   },
   {/*Page 13*/
    title: "Example",
    mainText: "Prints a message once the condition is False\n\ni=1\nwhile i < 6\nprint(i,end=' ')\ni+=1\n else:\nprint('i' is no longer less than 6 loop iterations finished)\n\nOutput: 1 2 3 4 5 6\ni is no longer less than 6",
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
    skip.style.display= 'none'
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

           <input class="button" type="button" onClick="location.href='../Loops/FinalTest/index.html'"
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
    var copyText = Data[currentData].title + ' ' +  Data[currentData].mainText +'. ';
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