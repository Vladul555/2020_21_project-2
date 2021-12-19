function updateStatus() {
  if (sessionStorage.getItem('id')) {
      updateUser({ UserType: true }, sessionStorage.getItem('id')).then(value => { window.location.href = "../Main Menu/" })
  } else {
      alert('Login!!');
  }
}

var timeout;
document.onmousemove = function(){
  clearTimeout(timeout);
  timeout = setTimeout(function(){alert("We noticed you are AFk\nTaking a break is important!\nWe are awaiting your eager return!");}, 30000);
}