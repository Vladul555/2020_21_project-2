const url = "http://localhost:3000";

function createUser(user) {
    return axios.post(url + "/user", user);
}

function updateUser(user, id) {
    return axios.put(url + "/user/" + id, user);
}

function deleteUser(id) {
    return axios.del(url + "/user/" + id);
}

function printUsers() {
    return axios.get(url + "/user");
}

function printUser(id) {
    return axios.get(url + "/user/" + id);
}

function updateCourses(id) {
    return axios.put(url + "/user/" + id + "/course");
}

function login(user, pass) {
    return axios.post(url + "/user/login", {
        Username: user,
        Password: pass
    })
}

const userTypes = { "Free": 0, "Premium": 1, "Admin": 2 }