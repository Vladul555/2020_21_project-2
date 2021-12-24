var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!");}, 30000);
}

if(sessionStorage.getItem('DarkMod')){
  flag = sessionStorage.getItem('DarkMod')
  sessionStorage.setItem('DarkMod',flag);
}

function TestdarkMode() {
if (flag == 1){
  var element = document.body;
  element.classList.toggle("dark-mode")
}
}

let lsn1 = document.getElementById("lsn1")
let lsn2 = document.getElementById("lsn2")
let lsn3 = document.getElementById("lsn3")
let lsn4 = document.getElementById("lsn4")
let lsn5 = document.getElementById("lsn5")

if (lsn1)
  lsn1.src="./images/checked.png"
if (lsn2)
  lsn2.src="./images/checked.png"
if (lsn3)
  lsn3.src="./images/checked.png"
if (lsn4)
  lsn4.src="./images/checked.png"
if (lsn5)
  lsn5.src="./images/checked.png"