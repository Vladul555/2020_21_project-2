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

function readValue(mail) {
    window.alert("An E-mail that is containing your password has been sent.\nPlease do not open that E-mail with people around you.")
    return forgotPass(mail)
}