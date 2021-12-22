const Data = [
   { /*Page 1*/
    title: "Python Loops",
    mainText: "Within Python we have 2 primite kinds of loop commands:\n\n\nWhile and For loops  ",
   },
   { /*Page 2*/
    title: "The While Loop",
    mainText: "With the while loop we can execute a set of statements as long as the condition remains True.\n Imagine you have to print the numbers from 1 to 6\n using a loop would be more simple to acomplish the task rather than writing the same line of code over and over again",
   },
   { /*Page 3*/
    title: "Example",
    mainText: "Print i as long as i is less than 4:\ni=1\nwhile i < 4:\n print(i,end=' ')\n i+=1\n\nOutput: 1 2 3 4",
   },
   { /*Page 4*/
    title: "The Break Statement",
    mainText: "With the 'Break' statement we can stop the loop iterations even if the while condition is True",
   },
   { /*Page 5*/
    title: "Example",
    mainText: "Exit the loop when i is 2:\ni=0\nwhile i < 5\n print(i,end=' ')\nif i == 2\n break\ni+=1\n\nOutput: 1 2",
   },
   { /*Page 6*/
    title: "The Continue Statement",
    mainText: "With the 'Continue' statement we can stop the current iteration,and continue with the next:",
   },
   {/*Page 7*/
       title: "Example",
       mainText: "i=0\nWhile i < 5\ni+=1\nif i == 3\n continue\nprint(i,end=' ')\n\nOutput: 1 2 4 5",
   },
   {/*Page 8*/
       title: "The Else Statement",
       mainText: "With the 'Else' Statement we can run a block of code once when the condition no longer is True",
   },
   {/*Page 9*/
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

           <input class="button" type="button" onClick="location.href='../Conditions and Statements/FinalTest/index.html'"
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