import {getUserInfo, addNewUser} from './import_data.js';


document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let user = getUserInfo(username, password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));

        switch (parseInt(user.ROLE_ID)) {
            case 1:
                window.location.href = '../admin/';
                break;
            case 2:
                window.location.href = '../broker/properties-mng';
                break;
            default:
                window.location.href = '../properties/';

        }
    } else {
        alert('Username or password is incorrect');
    }
});

document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('fName').value;
    let lastName = document.getElementById('lName').value;
    let phoneNum = document.getElementById('phone').value;
    let email = document.getElementById('new-email').value;
    let username = document.getElementById('newUser').value;
    let password = document.getElementById('new-password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please re-enter.');

        // Clear the password fields
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
        return;
    }

    addNewUser(firstName, lastName, phoneNum, email, username, password);
    alert('User added successfully');
    window.location.href = '../properties/';


});


function changeLoginInNav(){

    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) return;

    // Changing Login/Register in nav bar to `${user.USER_NAME}`
    const a_login = document.getElementById('nav-login/register');
    a.innerText = `${user.USER_NAME}`;



}
