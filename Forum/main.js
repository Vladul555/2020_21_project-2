
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

//Coment

function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.setAttribute("style", "display:block;");
}

function hideComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.setAttribute("style", "display:none;");
}