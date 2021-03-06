const Data = [{
        /*Page 1 */
        title: "Introduction To Pyton",
        mainText: "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.",
        opt1: "● Python is used in Software Development",
        opt2: "● Python is used in Web Development",
        opt3: "● Python is used in Mathematics",
        opt4: "● Python is used in System Scripting",
    },
    {
        /*Page 2 */
        title: "What can Python do?",
        mainText: "Find out some of the top uses for Python, as we explore why it’s such a popular and diverse programming language.",
        opt1: "● Python can connect to database systems. It can also read and modify files",
        opt2: "● Python can be used to handle big data and perform complex mathematics.",
        opt3: "● Python can be used on a server to create web applications and alongside software to create workflows.",
        opt4: "● Python can be used for rapid prototyping, or for production-ready software development.",
    },
    {
        /*Page 3*/
        title: "Why Python?",
        mainText: "The python language is one of the most accessible programming languages available.",
        opt1: "● Python has syntax that allows developers to write programs with fewer lines than some other programming languages.",
        opt2: "● Python has simplified syntax and not complicated, which gives more emphasis on natural language.",
        opt3: "● Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.",
        opt4: "● Python has a simple syntax similar to the English language.",
    },
    {
        /*Page 4*/
        title: "Indendation",
        mainText: "Python uses indentation to indicate a block of code.indentation in Python is very important.",
        opt1: "● You have to use the same number of spaces in the same block of code, otherwise Python will give you an error",
        opt2: "● The number of spaces is up to you as a programmer, but it has to be at least one",
        opt3: "● Python will give you an error if you skip the indentation",
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
const skip = document.getElementById('skip')

let currentData = 0
if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
    skip.style.display = 'none'
    document.getElementById('status__logo').src = "./images/FREE.png";
    document.getElementById('Copy').style.visibility = 'hidden';
    document.getElementById('Download').style.visibility = 'hidden';
} else {
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
}

loadData()

function loadData() {
    if (currentData == 0) {
        document.getElementById('previous').style.visibility = 'hidden';
    } else {
        document.getElementById('previous').style.visibility = 'visible';
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
    if (currentData < Data.length) {
        loadData()
    } else {
        intro.innerHTML = `
           <div class="header">
           <h2 class="test">You completed the theory!</h2>

           <input class="button" type="button" onClick="location.href='/Website Code/Python/Multiple Questions/index.html'"
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
        const sFileName = 'formData.txt'; // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        } else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
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