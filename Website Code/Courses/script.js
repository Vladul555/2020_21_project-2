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

function hidePremiumCourses(){
  if (Number(sessionStorage.getItem("user")) === userTypes["Free"]){
      let asm = document.getElementById("asm")
      asm.style.display = 'none'
      let C = document.getElementById('C')
      C.style.display = 'none'
  }
}

