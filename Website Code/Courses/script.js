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

function hidePremiumCourses() {
    if (Number(sessionStorage.getItem("user")) === userTypes["Free"]) {
        let asm = document.getElementById("asm")
        asm.style.display = 'none'
        let C = document.getElementById('C')
        C.style.display = 'none'
    }
}

let crs1 = document.getElementById("crs1")
let crs2 = document.getElementById("crs2")
let crs3 = document.getElementById("crs3")

function checkIfPassed() {
    let id = sessionStorage.getItem('id')
    printUser(id).then(user => {
        user = user.data
        if (user.PyLesson1 && user.PyLesson2 && user.PyLesson3 && user.PyLesson4 && user.PyLesson5)
            updateUser({ PyPass: true }, id)
        if (user.cLesson1 && user.cLesson2 && user.cLesson3 && user.cLesson4)
            updateUser({ cPass: true }, id)
        if (user.AsmLesson1 && user.AsmLesson2 && user.AsmLesson3 && user.AsmLesson4)
            updateUser({ AsmPass: true }, id)
    })
}

function coursesXV() {
    let id = sessionStorage.getItem('id')
    checkIfPassed()
    printUser(id).then(user => {
        user = user.data
        if (user.PyPass)
            crs1.src = './images/checked.png'
        if (user.cPass)
            crs2.src = './images/checked.png'
        if (user.AsmPass)
            crs3.src = './images/checked.png'
    })
}