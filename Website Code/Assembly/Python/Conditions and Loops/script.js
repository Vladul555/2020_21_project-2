const Data = [
    { /*Page 1*/
        title: "Conditions",
        mainText: "Conditional execution in assembly language is accomplished by several looping and branching instructions. These instructions can change the flow of control in a program. Conditional execution is observed in two scenarios:\n\nUnconditional jump\n This is performed by the 'JMP' instruction. Conditional execution often involves a transfer of control to the address of an instruction that does not follow the currently executing instruction. Transfer of control may be forward, to execute a new set of instructions or backward, to re-execute the same steps.\n\nConditional jump\nThis is performed by a set of jump instructions j<condition> depending upon the condition. The conditional instructions transfer the control by breaking the sequential flow and they do it by changing the offset value in IP.",
    },
   { /*Page 2*/
    title: "CMP Instruction",
    mainText: "The CMP instruction compares two operands. It is generally used in conditional execution. This instruction basically subtracts one operand from the other for comparing whether the operands are equal or not. It does not disturb the destination or source operands. It is used along with the conditional jump instruction for decision making.\nCMP compares two numeric data fields. The destination operand could be either in register or in memory. The source operand could be a constant data, register or memory.\nSyntax: CMP destination, source",
   },
   { /*Page 3*/
    title: "Examples",
    mainText: "valid CMP use:\nComparing between Data Register AL and the number 7: CMP AL,7\nComparing between Data Registers BX and CX: CMP BX,CX\nComparing between memory cell in address SI and Data Register CL: CMP [SI],CL\n\ninvalid CMP use:\nComparing between two memory cells: CMP [SI],[DI]\nComparing between a memory cell and a number: CMP BX,4\nComparing between Data Registers of different sizes: CMP AL,BX",
   },
   { /*Page 4*/
    title: "Unconditional Jump",
    mainText: "Unconditional Jump is performed by the 'JMP' instruction. Conditional execution often involves a transfer of control to the address of an instruction that does not follow the currently executing instruction. Transfer of control may be forward, to execute a new set of instructions or backward, to re-execute the same steps.\n\nSyntax\nThe JMP instruction provides a label name where the flow of control is transferred immediately. The syntax of the JMP instruction is:\nJMP 'label'",
   },
   { /*Page 5*/
    title: "Example",
    mainText: "MOV  AX, 12 \nMOV  BX, 07\nMOV  CX, 03\nL20:\nADD  AX, 01\nADD  BX, AX\nJMP  L20 ",
   },
   { /*Page 6*/
    title: "Conditional Jump",
    mainText: "If some specified condition is satisfied in conditional jump, the control flow is transferred to a target instruction. There are numerous conditional jump instructions depending upon the condition and data.\n\nthe conditional jump instructions used on signed data used for arithmetic operations are:\n\nJE/JZ--> Jump Equal or Jump Zero uses 'Zero Flag'\nJNE/JNZ--> Jump not Equal or Jump Not Zero uses 'Zero Flag'\nJG/JNLE--> Jump Greater or Jump Not Less/Equal uses 'Overflow Flag'/'Sign Flag'/'Zero Flag'\nJGE/JNL--> Jump Greater/Equal or Jump Not Less uses 'Overflow Flag'/'Sign Flag'\nJL/JNGE--> Jump Less or Jump Not Greater/Equal uses 'Overflow Flag'/'Sign Flag'\nJLE/JNG--> Jump Less/Equal or Jump Not Greater uses 'Overflow Flag'/'Sign Flag'/'Zero Flag'\n\nThe conditional jump instructions used on unsigned data used for logical operations are:\nJE/JZ-->Jump Equal or Jump Zero uses 'Zero Flag'\nJNE/JNZ-->Jump not Equal or Jump Not Zero uses 'Zero flag'\nJA/JNBE-->Jump Above or Jump Not Below/Equal uses 'Carry Flag'/'Zero flag'\nJAE/JNB-->Jump Above/Equal or Jump Not Below uses 'Carry Flag'\nJB/JNAE-->Jump Below or Jump Not Above/Equal uses 'Carry Flag'\nJBE/JNA-->Jump Below/Equal or Jump Not Above uses 'Auxiliary Carry Flag'/'Carry Flag'\n\nconditional jump instructions that have special uses and check the value of does flags are:\nJXCZ-->Jump if CX is Zero uses 'none'\nJC-->Jump If Carry uses 'Carry Flag'\nJNC-->Jump If No Carry uses 'Carry Flag'\nJO-->Jump If Overflow uses 'Overflow Flag'\nJNO-->Jump If No Overflow uses 'Overflow Flag'\nJP/JPE-->Jump Parity or Jump Parity Even uses 'Parity Flag'\nJNP/JPO-->Jump No Parity or Jump Parity Odd uses 'Parity Flag'\nJS-->Jump Sign (negative value) uses 'Sign Flag'\nJNS-->Jump No Sign (positive value) uses 'Sign Flag'",
   },
   { /*Page 7*/
    title: "Examples",
    mainText: "Example1:\nCMP AX,BX\nJBE T1\nADD AX,10\nMOV DX,BX\nT1:\n\nExample2:\nCMP AX,BX\nJBE T1\nADD AX,10\nMOV DX,BX\n JMP T2\nT1:\nSUB AX,8\nINC DX\nT2:\n\nExample3:\nCMP	AX,BX\nJA T1\nSUB AX,8\nINC DX\n JMP T2\nT1:\nADD AX,10\nMOV DX,BX\nT2:\n\nExample4:\nCMP AX,BX\nJLE T1\nCMP CX,5\nJNE T1\nADD AX,10\nMOV DH,BL\nT1:\n\nExample5:\nCMP AX,BX\nJG T1\nCMP CX,5\nJNE T2\nT1:\nADD AX,10\nMOV DH,BL\nT2:",
   },
   { /*Page 8*/
    title: "Loops",
    mainText: "The JMP instruction can be used for implementing loops. For example, the following code snippet can be used to execute the loop-body 10 times:\nMOV CL,10\nL1:\n<Loop Body>\nDEC CL\nJNZ J1\n\nThe processor instruction set however, includes a group of loop instructions for implementing iteration. The basic LOOP instruction has the following syntax: LOOP 'label'\n\n'Label' is the target label that identifies the target instruction as in the jump instructions. The LOOP instruction assumes that the register CX contains the loop count. When the loop instruction is executed the register is decremented and the control jumps to the target label until the register value, i.e., the counter reaches the value zero.\n\nthis code snippet could be written as:\nMOV CX,10\nL1:\n<loop body>\nloop L1",
   },
   { /*Page 9*/
       title: "Examples",
       mainText: "Example1:\nCode segment\nassume cs:code, ds:code\nstart: MOV AX,code\nMOV DS,AX\nMOV BX,400H\nMOV AX,0\nMOV CX,100H\nL1: ADD AX,CX\nSUB CX,2\nJNE L1\nMOV [BX],AX\nMOV AH,4CH\nint 21H\ncode ends\nend start\n\nExample2:\ncode segment\nassume ds:code,cs:code\nstart: mov ax,code\nmov ds,ax\nmov bx,300h\nsub al,al\nmov cx,21h\nnext: add al,[bx]\ninc bx\nloop next\nmov [bx],al\nmov ah,4ch\nint 21h\ncode ends\nend start",
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

           <input class="button" type="button" onClick="location.href='/Website Code/Assembly/Python/Conditions and Loops/FinalTest/index.html'"
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