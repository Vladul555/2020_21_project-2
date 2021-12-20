let users = []

function getUsers() {
    const table = document.getElementById("table");
    for (let i = table.rows.length - 1; i > 0; i--)
        table.deleteRow(i);
    printUsers().then(value => {
        users = value.data
        for (const user of users) {
            let row = table.insertRow(table.rows.length);
            let username = row.insertCell(0)
            let email = row.insertCell(1)
            let usertype = row.insertCell(2)
            let gender = row.insertCell(3)
            let numOfCourses = row.insertCell(4)
            let id = row.insertCell(5)
            username.innerHTML = user.Username;
            email.innerHTML = user.Email
            usertype.innerHTML = Object.keys(userTypes)[user.UserType]
            gender.innerHTML = user.Gender
            numOfCourses.innerHTML = user.numOfCourses
            id.innerHTML = user._id
        }
    })
}