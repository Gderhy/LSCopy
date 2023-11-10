export function changeLoginInNav(){

    const user = JSON.parse(localStorage.getItem('user'));

    if(!user) return;

    // Changing Login/Register in nav bar to `${user.USER_NAME}`
    const a = document.getElementById('nav-login/register');
    a.innerText = `${user.USER_NAME}`;



}