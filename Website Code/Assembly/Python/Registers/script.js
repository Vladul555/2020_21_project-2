const Data = [{
        /*Page 1 */
        title: "About Assembly Registers",
        mainText: "Processor operations mostly involve processing data, This data can be stored in memory and accessed from thereon.\n reading data from and storing data into memory slows down the processor as it involves complicated processes of sending the data request across the control bus and into the memory storage unit and getting the data through the same channel.\nTo speed up the processor operations, the processor includes some internal memory storage locations that are called 'Registers'.\nThe registers store data elements for processing without having to access the memory. A limited number of registers are built into the processor chip.",

    },
    {
        /*Page 2 */
        title: "Processor Registers",
        mainText: "There are ten 32-bit and six 16-bit processor registers in IA-32 architecture. The registers are grouped into three categories:\n - General registers\n - Control registers\n - Segment registers\n\nThe general registers are further divided into the following groups:\n -Data registers\n - Pointer registers\n - Index registers",
    },
    {
        /*Page 3 */
        title: "Data Registers",
        mainText: "Four 32-bit data registers are used for arithmetic, logical, and other operations. These 32-bit registers can be used in three ways:\n - As complete 32-bit data registers: EAX, EBX, ECX, EDX.\n - Lower halves of the 32-bit registers can be used as four 16-bit data registers: AX, BX, CX and DX.\n - Lower and higher halves of the four 16-bit registers can be used as eight 8-bit data registers: AH, AL, BH, BL, CH, CL, DH, and DL.\n\nSome of these data registers have specific use in arithmetical operations.\nAX is the primary accumulator; it is used in input/output and most arithmetic instructions. For example, in multiplication operation, one operand is stored in EAX or AX or AL register according to the size of the operand.\nBX is known as the base register, as it could be used in indexed addressing.\nCX is known as the count register, as the ECX, CX registers store the loop count in iterative operations.\nDX is known as the data register. It is also used in input/output operations. It is also used with AX register along with DX for multiply and divide operations involving large values.",
    },
    {
        /*Page 4 */
        title: "Pointer Registers",
        mainText: "The pointer registers are 32-bit EIP, ESP, and EBP registers and corresponding 16-bit right portions IP, SP, and BP. There are three categories of pointer registers:\n\nInstruction Pointer (IP)- The 16-bit IP register stores the offset address of the next instruction to be executed. IP in association with the CS register (as CS:IP) gives the complete address of the current instruction in the code segment.\n\nStack Pointer (SP)- The 16-bit SP register provides the offset value within the program stack. SP in association with the SS register (SS:SP) refers to be current position of data or address within the program stack.\n\nBase Pointer (BP)- The 16-bit BP register mainly helps in referencing the parameter variables passed to a subroutine. The address in SS register is combined with the offset in BP to get the location of the parameter. BP can also be combined with DI and SI as base register for special addressing.",
    },
    {
        /*Page 5*/
        title: "Index Registers",
        mainText: "The 32-bit index registers, ESI and EDI, and their 16-bit rightmost portions. SI and DI, are used for indexed addressing and sometimes used in addition and subtraction. There are two sets of index pointers:\nSource Index (SI)- It is used as source index for string operations.\nDestination Index (DI)- It is used as destination index for string operations.",

    },
    {
        /*Page 6 */
        title: "Control Registers",
        mainText: "The 32-bit instruction pointer register and the 32-bit flags register combined are considered as the control registers.\nMany instructions involve comparisons and mathematical calculations and change the status of the flags and some other conditional instructions test the value of these status flags to take the control flow to other location.\n\nThe common flag bits are:\n\nOverflow Flag (OF)- It indicates the overflow of a high-order bit (leftmost bit) of data after a signed arithmetic operation.\n\nDirection Flag (DF)- It determines left or right direction for moving or comparing string data. When the DF value is 0, the string operation takes left-to-right direction and when the value is set to 1, the string operation takes right-to-left direction.\n\nInterrupt Flag (IF)- It determines whether the external interrupts like keyboard entry, etc., are to be ignored or processed. It disables the external interrupt when the value is 0 and enables interrupts when set to 1.\n\nTrap Flag (TF)- It allows setting the operation of the processor in single-step mode. The DEBUG program we used sets the trap flag, so we could step through the execution one instruction at a time.\n\nSign Flag (SF)- It shows the sign of the result of an arithmetic operation. This flag is set according to the sign of a data item following the arithmetic operation. The sign is indicated by the high-order of leftmost bit. A positive result clears the value of SF to 0 and negative result sets it to 1.\n\nZero Flag (ZF)- It indicates the result of an arithmetic or comparison operation. A nonzero result clears the zero flag to 0, and a zero result sets it to 1.\n\nAuxiliary Carry Flag (AF)- It contains the carry from bit 3 to bit 4 following an arithmetic operation; used for specialized arithmetic. The AF is set when a 1-byte arithmetic operation causes a carry from bit 3 into bit 4.\n\nParity Flag (PF)- It indicates the total number of 1-bits in the result obtained from an arithmetic operation. An even number of 1-bits clears the parity flag to 0 and an odd number of 1-bits sets the parity flag to 1.\n\nCarry Flag (CF)- It contains the carry of 0 or 1 from a high-order bit (leftmost) after an arithmetic operation. It also stores the contents of last bit of a shift or rotate operation.",
    },
    {
        /*Page 7*/
        title: "Segment Registers",
        mainText: "Segments are specific areas defined in a program for containing data, code and stack. There are three main segments:\nCode Segment- It contains all the instructions to be executed. A 16-bit Code Segment register or CS register stores the starting address of the code segment.\nData Segment- It contains data, constants and work areas. A 16-bit Data Segment register or DS register stores the starting address of the data segment.\nStack Segment- It contains data and return addresses of procedures or subroutines. It is implemented as a 'stack' data structure. The Stack Segment register or SS register stores the starting address of the stack.",

    },
    {
        /*Page 8 */
        title: "Data Movement Instructions",
        mainText: "The mov instruction copies the data item referred to by its second operand into the location referred to by its first operand. While register-to-register moves are possible, direct memory-to-memory moves are not. In cases where memory transfers are desired, the source memory contents must first be loaded into a register, then can be stored to the destination memory address.",
    },
    {
        /*Page 9 */
        title: "Example",
        mainText: "Assigning the value '600' in base Data register 'BX': MOV BX,600H\n inputting the value in memory base Data register 'BX' into primary accumulator register AL: MOV AL,[BX]\nAssigning the value '605' into Index Register 'SI': MOV SI,605H\ninputting the value in memory that his address is in 'AL' into Index Register 'SI': MOV [SI],AL",
    },
    {
        /*Page 10 */
        title: "Operators byte ptr and word ptr ",
        mainText: "The 'byte ptr' and word ptr' commands are used to assign value to address of Data register without using Index Register.\nExample1: MOV byte ptr[BX],34h \nExample2: MOV word ptr[BX],1234h. value '34' will go to address of 'bx' and value '12'will go to address of 'bx+1'.",
    },
    {
        /*Page 11 */
        title: "Arithmetic Instructions",
        mainText: "Assembly Language allows us to perform basic unsigned integer arithmetic operations. These operations are:\n\nThe INC Instruction\nThe INC instruction is used for incrementing an operand by one. It works on a single operand that can be either in a register or in memory.\nThe INC instruction has the following syntax: INC destination.\n\nThe DEC Instruction\nThe DEC instruction is used for decrementing an operand by one. It works on a single operand that can be either in a register or in memory.\nThe DEC instruction has the following syntax: DEC destination\n\nThe SUB instruction\nThe SUB instruction are used for performing simple subtraction of binary data in byte, word and doubleword size for subing 8-bit, 16-bit or 32-bit operands, respectively.\nThe SUB instruction have the following syntax: SUB destination, source\n\nThe ADD instruction\nThe ADD instruction are used for performing simple addition of binary data in byte, word and doubleword size for adding 8-bit, 16-bit or 32-bit operands, respectively.\nThe ADD instruction have the following syntax: ADD destination, source ",
    },
    {
        /*Page 12*/
        title: "Syntax of code segments",
        mainText: "To run the Assembly program in TD first you open the segment by using 'code segment' followed by 'assume cs:code, ds:code' then starting the program itself by 'start:' and copying the address of code to register DS after that the body of the program followed by the command to exit to 'DOS' then end the segment by 'code ends' and exiting the program with 'end start'.\nExample:\n\ncode segment\nassume cs:code,ds:code\nstart: mov ax,code\nmov ds,ax\n'Program Body'\nmov ah,4ch\nint 21h\ncode ends\nend start"
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

           <input class="button" type="button" onClick="location.href='FinalTest/index.html'"
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
    //document.getElementById('Download').style.visibility = 'hidden';
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