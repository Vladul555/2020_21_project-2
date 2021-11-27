
//Navigation_bar

function hideIconBar(){
    var IconBar=document.getElementById("iconBar");
    var navigation=document.getElementById("navigation");
    IconBar.setAttribute("style","display:none");
    navigation.classList.remove("hide");
}
function showIconBar(){
    var IconBar=document.getElementById("iconBar");
    var navigation=document.getElementById("navigation");
    IconBar.setAttribute("style","display:block");
    navigation.classList.add("hide");
}
