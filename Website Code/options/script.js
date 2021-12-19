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
  updateUser(objson, sessionStorage.getItem('id')).then(value => { console.log(value) })}