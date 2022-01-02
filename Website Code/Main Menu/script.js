if (sessionStorage.getItem('DarkMod')) {
    flag = sessionStorage.getItem('DarkMod')
    sessionStorage.setItem('DarkMod', flag);
}

function hideSettings() {
    if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
        let setting = document.getElementById("setting")
        setting.style.display = 'none'
    }
}

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

let alertMsg = [
    { txt: "Tired of not enough content\nSign up now and be a premium user!" },
    { txt: "Have you heard of our premium user?\nIt's full of new courses!" },
    { txt: "Keep losing all your heart containers\nB-U-Y P-R-E-M-I-U-M N-O-W-!" },
]

let currentTxt = 0
let premium = false

function alertMin() {

    if (currentTxt >= alertMsg.length) {
        currentTxt = 0
    }
    currentTxtData = alertMsg[currentTxt]
    alert(currentTxtData.txt)
    currentTxt++
}

if (premium) { alertMin(); }
setInterval(alert5min, 60 * 1000);

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

function checkID() {
    if (Number(sessionStorage.getItem("user")) === userTypes["Premium"]) {
        document.getElementById("disUp").classList.add("disabled");
        document.getElementById("upgrade").style.textDecorationLine = "line-through";
        document.getElementById("upgrade").disabled = true;
    }
}