function updateStatus() {
    if (sessionStorage.getItem('id')) {
        updateUser({ UserType: true }, sessionStorage.getItem('id')).then(value => { window.location.href = "../Main Menu/" })
    } else {
        alert('Login!!');
    }
}