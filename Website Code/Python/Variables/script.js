const Data = [
    {
        /*Page 1 */
        title: "Variables",
        mainText: "Variables are containers for storing data values\nPython has no command for declaring a variable\nA variable is created the moment you first assign a value to it",

    },
    {
        /*Page 2 */
        title: "Example 1",
        mainText: "x = 5\n y = 'John'\nprint(x) = 5\nprint(y) = John",
    },
    {
        /*Page 3*/
        title: "Example 2",
        mainText: "x = 4 --> x is of type int\nx = 'Sally' --> x is of type str\nprint(x) --> Sally",
 
    },
    {
        /*Page 4*/
        title: "Case-Sensitive",
        mainText: "a = 4\nA = 'Sally'\n#A will not override a",
    },
    {
        /*Page 5*/
        title: "Casting",
        mainText: "If you want to specify the data type of a variable, this can be done with casting",
    }
  
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

           <input class="button" type="button" onClick="location.href='#'"
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