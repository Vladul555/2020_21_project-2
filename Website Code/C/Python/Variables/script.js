const Data = [{
        /*Page 1 */
        title: "Structure of code in C",
        mainText: "code in C is made out of a main function where the code exsits in and is define like so:\n''int main(){\n'code goes here.'\n}\n abave the main code are standard library functions that are define like so:\n#include <'library_function's_name'.h>",
    },
    {
        /*Page 2 */
        title: "Standard library functions",
        mainText: "C Standard library functions or simply C Library functions are inbuilt functions in C programming.",
    },
    {
        /*Page 3 */
        title: "Example",
        mainText: "If you want to use the printf() function, the header file <stdio.h> should be included like so:\n#include <stdio.h>.",
    },
    {
        /*Page 4 */
        title: "Variables",
        mainText: "Variables are containers for storing data values.\nIn C you need to declare the data type of the variable than give it a name and assign a value to it.\nThe value of a variable must coincide with the data type otherwise C will indicate an error.",

    },
    {
        /*Page 5*/
        title: "declare data types",
        mainText: "The most practical way to declare data type of variables is to define all variable of the same type in the same line of code.\nint x=5,y=17,z=34;\nfloat num1=13.5,num2=78.3,num3=42.69\nchar letter='t',sign='#',symbol='!';",
    },
    {
        /*Page 6*/
        title: "Variable Names",
        mainText: "A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume)",
    }, {
        title: "Rules for C variable names",
        mainText: "Must start with a letter or the underscore character\nCannot start with a number\nCase-sensitive (age, Age and AGE are three different variables)",
    },
    {
        /*Page 7*/
        title: "Case-Sensitive example",
        mainText: "int a = 4\nchar A = '#'\n*A will not override a",
    },
    {
        /*Page 8*/
        title: "Legal variable names",
        mainText: "char myvar = 'D'\nchar my_var = 'S'\nint _my_var = 5\nint myVar = 12\nfloat MYVAR= 17.75\nfloat myvar2 = 24.23",
    },
    {
        /*Page 9*/
        title: "illegal variable names",
        mainText: "char 2myvar = 'J'\n int my-var = 8\nfloat my var = 64.12",

    },
    {
        /*Page 10*/
        title: "Output Variables",
        mainText: "The C print statement is often used to output variables\nC uses a format specifier to print variables,the '%' character combined with a letter for the specific data type:\n%d for int Variables\n%f for float Variables\n%c for char Variables\nTo combine both text and a variable you put the text in the quotation marks of the printf() function.",
    },
    {
        /*Page 11 */
        title: "Example 1",
        mainText: "int x = 5;\n int y = 7;\n'printf(''I am %d years old'',x);'-->I am 5 years old\n'printf(''The number of days in a week is %d'',y);'-->The number of days in a week is 7",
    },
    {
        /*Page 12*/
        title: "Example 2",
        mainText: "char letter = 'a';\nprintf(''The first letter of the alphabet is %c'',letter);-->The first letter of the alphabet is 'a'\nchar sign = '@';\nprintf(''%c'',sign); --> @",

    },
    {
        /*Page 13*/
        title: "Example 3",
        mainText: "float Grade = '87.5';\nprintf(''Your grade in the test is %f'',Grade);-->Your grade in the test is 87.5\nfloat Length = 17.3;\nprintf(''The lenght of the road is %f kilometers'',Lenght); -->The lenght of the road is 17.3 kilometers",

    },
    {
        /*Page 14*/
        title: "string Variables",
        mainText: "This Variables uses the header file <string.h> and the format specifier to print string is '%s'."
    },
    {
        /*Page 15*/
        title: "Example ",
        mainText: "#include <string.h>\n\nint main(){\nchar name[] = ''Amit'';\nprintf(''My name is %s'',name)-->My name is Amit;\n}",

    },
    {
        /*Page 16*/
        title: "long and double Variables",
        mainText: "The variable long functions the same as int and The variable double functions the same as float only they have twice the memory Size.\nThe format specifier to print long is '%d'\nThe format specifier to print double is '%f'."
    },
    {
        /*Page 17*/
        title: "scanf function",
        mainText: "'scanf' is a function that used to input a value to variable when the code is actively running.\nthe syntax of the 'scanf' function is defined similar to the 'printf' function.\n inside the parentheses you put the 'format specifier' in quotation marks and outside of quotation marks the '&' sign followed by the desired variable you wants to input a value into like so:\nint num;\nscanf(''%d'',&num);"
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

           <input class="button" type="button" onClick="location.href='../Variables/FinalTest/index.html'"
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

function first_quastion() {

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
}
else{
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