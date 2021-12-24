var flag = 0; //lightmode if 0 darkmode if 1
if (sessionStorage.getItem('DarkMod'))
    flag = sessionStorage.getItem('DarkMod')
sessionStorage.setItem('DarkMod', flag);

function updateUserOps() {
    let Password = document.getElementById('pass').value;
    let FullName = document.getElementById('fname').value;
    let Username = document.getElementById('username').value;
    let Email = document.getElementById('mail').value;
    Gender = document.getElementById("m").checked ? document.getElementById("m").value : document.getElementById("f").checked ? document.getElementById("f").value : document.getElementById("nb").checked ? document.getElementById("nb").value : null;
    let info = {
        FullName,
        Username,
        Email,
        Password,
        Gender
    }
    let objson = {}
    for (const [field, value] of Object.entries(info)) {
        console.log(`field ${field} value ${value}`)
        if (value.length !== 0 && value !== null) {
            console.log("adding")
            objson[field] = value
        }
    }
    console.log(objson)
    updateUser(objson, sessionStorage.getItem('id')).then(value => { console.log(value) })
}

var timeout;
document.onmousemove = function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() { alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!"); }, 30000);
}

function darkMode() {
    var content = document.getElementById("drkBtn");
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (flag == 0){
      content.innerText = "Dark Mode is ON";
      flag = 1;
      sessionStorage.setItem('DarkMod',flag);
    }
    else{
      content.innerText = "DarkMode";
      flag = 0;
      sessionStorage.setItem('DarkMod',flag);
    }
  }

function TestdarkMode() {
    if (flag == 1) {
        var element = document.body;
        element.classList.toggle("dark-mode")
    }
}