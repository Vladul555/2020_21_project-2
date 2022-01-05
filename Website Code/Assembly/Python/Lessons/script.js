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

let lsn1 = document.getElementById("lsn1")
let lsn2 = document.getElementById("lsn2")
let lsn3 = document.getElementById("lsn3")
let lsn4 = document.getElementById("lsn4")

function AsmLessonsXV() {
    let id = sessionStorage.getItem('id')
    printUser(id).then(user => {
        user = user.data
        if (user.AsmLesson1)
            lsn1.src = "./images/checked.png"
        if (user.AsmLesson2)
            lsn2.src = "./images/checked.png"
        if (user.AsmLesson3)
            lsn3.src = "./images/checked.png"
        if (user.AsmLesson4)
            lsn4.src = "./images/checked.png"
    })
}