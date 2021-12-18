start = document.getElementById("start")
buttons = document.getElementsByClassName("buttons")
menu = document.getElementsByClassName("menu")

function pressStart() {
    if (start == 0){
        
        start = 1
    }
}

var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!");}, 30000);
}