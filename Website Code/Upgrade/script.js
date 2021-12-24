function updateStatus() {
    if (sessionStorage.getItem('id')) {
        updateUser({ UserType: userTypes["Premium"] }, sessionStorage.getItem('id')).then(value => { window.location.href = "../Main Menu/index.html" })
    } else {
        alert('Login!!');
        window.location.href = "../../login-screen/Login.html"
    }
}

var timeout;
document.onmousemove = function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() { alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!"); }, 30000);
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