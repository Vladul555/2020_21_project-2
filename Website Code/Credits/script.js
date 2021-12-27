var timeout;
document.onmousemove = function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() { alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!"); }, 30000);
}


let alertMsg = [
    { txt: "Tired of not enough content\nSign up now and be a premium user!" },
    { txt: "Have you heard of our premium user?\nIt's full of new courses!" },
    { txt: "Keep losing all your heart containers\nB-U-Y P-R-E-M-I-U-M N-O-W-!" },
]

let currentTxt = 0
let premium = false

function alert5min() {

    if (currentTxt >= alertMsg.length) {
        currentTxt = 0
    }
    currentTxtData = alertMsg[currentTxt]
    alert(currentTxtData.txt)
    currentTxt++
}

if (premium) { alert5min(); }
setInterval(alert5min, 5 * 60 * 1000);

if (sessionStorage.getItem('DarkMod'))
    flag = sessionStorage.getItem('DarkMod')
sessionStorage.setItem('DarkMod', flag);


function TestdarkMode() {
    if (flag == 1) {
        var element = document.body;
        element.classList.toggle("dark-mode")
    }
}