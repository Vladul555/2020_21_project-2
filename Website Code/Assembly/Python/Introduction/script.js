const Data = [{
        /*Page 1 */
        title: "What is Assembly Language?",
        mainText: "Each personal computer has a microprocessor that manages the computer's arithmetical, logical, and control activities.",
        opt1: "● Assembly is a low-level language designed for a specific family of processors that represents various instructions in symbolic code and a more understandable form.",
        opt2: "● Each family of processors has its own set of instructions for handling various operations such as getting input from keyboard, displaying information on screen and performing various other jobs. These set of instructions are called 'machine language instructions'.",
        opt3: "● A processor understands only machine language instructions, which are strings of 1's and 0's.",
        opt4: "● Machine language is too obscure and complex for using in software development.",
    },
    {
        /*Page 2 */
        title: "Advantages of Assembly Language",
        mainText: "Having an understanding of assembly language makes one aware of the advantages of using assembly language.",
        opt1: "● Assembly allows hardware-specific complex jobs in an easier way",
        opt2: "● Assembly requires less memory and execution time.",
        opt3: "● Assembly is suitable for time-critical jobs.",
        opt4: "● Assembly is most suitable for writing interrupt service routines and other memory resident programs.",
    },
    {
        /*Page 3*/
        title: "Basic Features of PC Hardware",
        mainText: "The main internal hardware of a PC consists of processor, memory, and registers.",
        opt1: "● Registers are processor components that hold data and address.",
        opt2: "● To execute a program the system copies it from the external device into the internal memory, The processor executes the program instructions.",
        opt3: "● The fundamental unit of computer storage is a 'bit' it could be ON (1) or OFF (0) and a group of 8 related bits makes a byte on most of the modern computers.",
        opt4: "● A processor supports the following data sizes:\n- Word: a 2-byte data item\n- Doubleword: a 4-byte (32 bit) data item\n- Doubleword: a 4-byte (32 bit) data item\n- Paragraph: a 16-byte (128 bit) area\n- Kilobyte: 1024 bytes\n- Megabyte: 1,048,576 bytes",
    },
    {
        /*Page 4*/
        title: "Binary Number System",
        mainText: "Every number system uses positional notation, each position in which a digit is written has a different positional value.\nEach position is power of the base, which is 2 for binary number system and these powers begin at 0 and increase by 1.\nThe following table shows the positional values for an 8-bit binary number.",
        opt1: "Bit number: 0 ,Position value: 1, Bit value 1\nBit number: 1 ,Position value:2, Bit value 1\nBit number: 2 ,Position value: 4, Bit value 1\nBit number: 3 ,Position value: 8, Bit value 1\nBit number: 4 ,Position value: 16, Bit value 1\nBit number: 5 ,Position value: 32, Bit value 1\nBit number: 6 ,Position value: 64, Bit value 1\nBit number: 7 ,Position value: 128, Bit value 1",
        opt2: "\nThe value of a binary number is based on the presence of 1 'bits' and their positional value.\nthe value of a given binary number is:\n1 + 2 + 4 + 8 +16 + 32 + 64 + 128 = 255",
        opt3: "",
        opt4: "",
    },
    {
        /*Page 5*/
        title: "Hexadecimal Number System",
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

           <input class="button" type="button" onClick="location.href='/Website Code/Assembly/Python/Multiple Questions/index.html'"
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
if (sessionStorage.getItem('afk') == "false")
    afkFlag = false;
else
    afkFlag = true;
sessionStorage.setItem('afk', afkFlag)

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
    //document.getElementById('Download').style.visibility = 'hidden';
}
else{
    document.getElementById('status__logo').src = "./images/PRO.png";
    document.getElementById('Copy').style.visibility = 'visible';
    document.getElementById('Download').style.visibility = 'visible';
}

function Copy_text() {
    var copyText = Data[currentData].title + Data[currentData].mainText + Data[currentData].opt1 + Data[currentData].opt2 + Data[currentData].opt3 + Data[currentData].opt4;
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