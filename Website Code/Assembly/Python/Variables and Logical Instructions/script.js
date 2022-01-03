const Data = [{
        /*Page 1 */
        title: "Variables in Assembly",
        mainText: "NASM provides various define directives for reserving storage space for variables. The define assembler directive is used for allocation of storage space. It can be used to reserve as well as initialize one or more bytes.",
    },
    {
        /*Page 2 */
        title: "About Assembly Variables",
        mainText: "●like in other programing languages in Assembly you can create variables and define them ourselves.\n●the definition of a variable can be done after it's used.\n●First character of variable can be the sign '$', '@', Bottom dividing line, or some other symbols but it can't be a number\n●variable name can Contains numbers and some symbols but not spacing\n● the definition of a variable will include a name and size.\n●A variable dosen't need to be initialized when it's defined.",
    },
    {
        /*Page 3 */
        title: "Defining variables ",
        mainText: "The syntax for storage allocation statement for initialized data is:\nVariable_name Variable_type Values/Memory allocation\n\nvariable-name is the identifier for each storage space. The assembler associates an offset value for each variable name defined in the data segment. There are five basic forms of the define directive:\nDB-->Define Byte allocates 1 byte\nDW-->Define Word allocates 2 bytes\nDD-->Define Doubleword allocates 4 bytes\nDQ-->Define Quadword allocates 8 bytes\nDT-->Define Ten Bytes allocates 10 bytes",
    },
    {
        /*Page 4 */
        title: "Examples",
        mainText: "A1 	DB 	7\nnumber DW 12345\nbig_number DQ 123456789\nMone DW ?\nreal_number1 DD 1.234\nTotal DT 750H",

    },
    {
        /*Page 5 */
        title: "About defined directive",
        mainText: "●Each byte of character is stored as its ASCII value in hexadecimal.\n●Each decimal value is automatically converted to its 16-bit binary equivalent and stored as a hexadecimal number.\n●Processor uses the little-endian byte ordering.\n●Negative numbers are converted to its 2's complement representation.\n●Short and long floating-point numbers are represented using 32 or 64 bits, respectively.",

    },
    {
        /*Page 6*/
        title: "OFFSET",
        mainText: "offset operator return the first address of a given variable.\nExemple:\nvariable A1 is defined in the data segment like so:\nA1 DW 2\nRegistration order that causes the 'word' address to load in to Register BX:\nMOV BX,offset A1 ",
    },
    {
        /*Page 7*/
        title: "structure of data segment",
        mainText: "Assembly Program structure for data segment is like so\ndata segment\nincome BD ?\nsum BD ?\ndata ends",
    },
    {   /*Page 8*/
        title: "Exemple for Code",
        mainText: "data segment\n addr dw 300h\nnatun db 25h\ndata ends\ncode segment\nassume ds:data,cs:code\nstart: mov ax,data\nmov ds,ax\nmov cx,20h\nmov bx,addr\nmov al,natun\nnext: mov [bx],al\ninc bx\nloop next\nmov ah,4ch\nint 21h\ncode ends\nstart ends",
    },
    {   /*Page 9*/
        title: "String variable",
        mainText: "strings are variables that contains a Sequence of characters.\nThe variable length strings can have as many characters as required. Generally, we specify the length of the string by either of the two ways:\n- Explicitly storing string length\n- Using a sentinel character\n\nWe can store the string length explicitly by using the '$' location counter symbol that represents the current value of the location counter.\nfor example:\nHELLO DB 'hello, world$'",
    },
    {
        /*Page 10*/
        title: "String Instructions",
        mainText: "Each string instruction may require a source operand, a destination operand or both.\nFor 16-bit segments, however, the SI and the DI registers are used to point to the source and destination, respectively.\nThere are five basic instructions for processing strings, They are:\n● MOVS - This instruction moves 1 Byte, Word or Doubleword of data from memory location to another.\n● LODS - This instruction loads from memory. If the operand is of one byte, it is loaded into the AL register, if the operand is one word, it is loaded into the AX register.\n● STOS - This instruction stores data from register (AL or AX) to memory.\n● CMPS - This instruction compares two data items in memory. Data could be of a byte size, word or doubleword.\n● SCAS - This instruction compares the contents of a register (AL or AX) with the contents of an item in memory.",
    },
    {   /*Page 11*/
        title: "Exemple for Code",
        mainText: "data segment\nstring db 'abcdef$'\ndata ends\ncode segment\nassume ds:data,cs:code\nstart: mov ax,data\nmov ds,ax\nmov bx,offset string\nmov si,bx\nnext: mov al,[si]\ncmp al,'$'\nje cont\ninc si\njmp next\ncont: dec si\nagain: mov al,[bx]\nmov ah,[si]\nmov [bx],ah\nmov [si],al\ninc bx\ndec si\ncmp bx,si\njb again\nmov ah,4ch\nint 21h\ncode ends\nstart ends",
    },
    {
        /*Page 12*/
        title: "Array variables ",
        mainText: "Arrays are a series of memory cells, you can Refer to Each one as a variable that Share the same name of array with it's index in array.\nlike so: ARR[0] for the first memory cell, ARR[1] for the second memory cell, and so on.\n\nTo initialize Array and it's memory cells the name and data definition directive as you were a Regular variables but with the values Separated by commas.\nFor Exemple: ARR1 DB 7, 8, 9",
    },
    {   /*Page 13*/
        title: "Exemple for Code",
        mainText: "data segment\nARR1 DB 31H, 32H, 33H, 34H, 35H, 36H, 37H, 38H, 39H\nARR2 DB 9 DUP (?)\ndata ends\ncode segment\nassume ds:data,cs:code\nstart: mov ax,data\nmov ds,ax\nmov si,0\nCPYLOOP: MOV AL,ARR1[SI]\nMOV ARR2[si],AL\nINC SI\nCMP SI,9\nJNE CPYLOOP\nMOV AH,4CH\nint 21H\ncode ends\nstart ends",
    },
    {
        /*Page 14*/
        title: "Logical Instructions",
        mainText: "The processor instruction set provides the instructions AND, OR, XOR, TEST, and NOT Boolean logic, which tests, sets, and clears the bits according to the need of the program.\n\nThe format for these instructions are:\nAND instruction: AND operand1, operand2\nOR instruction: OR operand1, operand2\nXOR instruction: XOR operand1, operand2\nTEST instruction: TEST operand1, operand2\nNOT instruction: NOT operand1\n\nThe first operand in all the cases could be either in register or in memory. The second operand could be either in register/memory or an immediate value. However, memory-to-memory operations are not possible. These instructions compare or match bits of the operands and set the CF, OF, PF, SF and ZF flags",
    },
    {
        /*Page 15*/
        title: "AND Instruction",
        mainText: "The AND instruction is used for supporting logical expressions by performing bitwise AND operation. The bitwise AND operation returns 1, if the matching bits from both the operands are 1, otherwise it returns 0.\n\nExemples:\n- nullifing the 7th Bit: AND al,01111111B\n- nullifing Registers 'al': AND al,0",
    },
    {
        /*Page 16*/
        title: "OR Instruction",
        mainText: "OR instruction is used for supporting logical expression by performing bitwise OR operation. The bitwise OR operator returns 1, if the matching bits from either or both operands are one. It returns 0, if both the bits are zero.\n\nFor example:\nOperand1: 0101\nOperand2: 0011\nOR Operand1,Operand2\n\nThe OR operation can be used for setting one or more bits. For example, let us assume the AL register contains 0011 1010, you need to set the four low-order bits, you can OR it with a value 0000 1111\nOR AL,0FH",
    },
    {
        /*Page 17*/
        title: "XOR Instruction",
        mainText: "The XOR instruction implements the bitwise XOR operation. The XOR operation sets the resultant bit to 1, if and only if the bits from the operands are different. If the bits from the operands are same ,both 0 or both 1, the resultant bit is cleared to 0.\nExample:\nMOV Operand1,0101\nMOV Operand2,0011\nXOR Operand1,Operand2\n-->Operand1: 0110",

    },
    {
        /*Page 18*/
        title: "TEST Instruction",
        mainText: "TEST instruction works same as the AND operation, but unlike AND instruction, it does not change the first operand. So, if we need to check whether a number in a register is even or odd, we can also do this using the TEST instruction without changing the original number.\n\nExemple:\nTEST AL,01H\nJZ EVEN_NUMBER",

    },
    {
        /*Page 19*/
        title: "NOT Instruction",
        mainText: "The NOT instruction implements the bitwise NOT operation. NOT operation reverses the bits in an operand. The operand could be either in a register or in the memory.\n\nFor example:\nOperand1: 0101 0011\nNOT Operand1\nOperand1: 1010 1100"
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