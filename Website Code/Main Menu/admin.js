let users = []

function getUsers() {
    document.getElementById("table").style.visibility = 'visible';
    document.getElementById("table").style.alignSelf = "center";
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
            let banStat = row.insertCell(6)
            username.innerHTML = user.Username;
            email.innerHTML = user.Email
            usertype.innerHTML = Object.keys(userTypes)[user.UserType]
            gender.innerHTML = user.Gender
            numOfCourses.innerHTML = user.numOfCourses
            id.innerHTML = user._id
            banStat.innerHTML = user.bannedStatus
        }
    })
}

function ShowField() {
    document.getElementById("id").style.visibility = 'visible';
    document.getElementById("delbut").style.visibility = 'visible';
}

function ShowFieldBan() {
    document.getElementById("id").style.visibility = 'visible';
    document.getElementById("banbut").style.visibility = 'visible';
}

function ShowFieldUnban() {
    document.getElementById("id").style.visibility = 'visible';
    document.getElementById("unbanbut").style.visibility = 'visible';
}

function ShowFieldUpdate() {
    document.getElementById("id").style.visibility = 'visible';
    document.getElementById("newType").style.visibility = 'visible';
    document.getElementById("upbut").style.visibility = 'visible';
}


function deleteUserAdmin(id) {
    for (const user of users)
        if (user._id === id)
            if (user.UserType !== userTypes["Admin"])
                deleteUser(id);
            else
                window.alert("You cannot delete other Admin users.")
}

function banUserAdmin(id) {
    for (const user of users) {
        if (user._id === id && !user.bannedStatus)
            if (user.UserType !== userTypes["Admin"])
                banUser(id)
            else
                window.alert("You cannot ban other Admin users.")
        else if (user.bannedStatus)
            window.alert("This user is already banned.")
    }
}

function updateUserAdmin(id) {
    for (const user of users)
        if (user._id === id) {
            let UserType = document.getElementById('newType').value;
            let objson;
            if (UserType === "Admin")
                if (window.confirm("You are about to upgrade a user to become an Admin status.\nPlease confrim to continue.") === true) {
                    objson = { UserType: userTypes[UserType] }
                } else null;
            else
                objson = { UserType: userTypes[UserType] }
            if (objson !== null)
                updateUser(objson, id);
        }
}

function unbanUserAdmin(id) {
    for (const user of users) {
        if (user._id === id) {
            if (user.bannedStatus) {
                unbanUser(id)
                return
            } else
                window.alert("This user is not banned.")
        }
    }
}


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