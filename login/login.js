import {getUserInfo} from './import_data.js';


document.getElementById('login-form').addEventListener('submit', function(event) {
   event.preventDefault();

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
let user = getUserInfo(username, password);

   if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      
      switch(parseInt(user.ROLE_ID)) {
         case 1: 
            window.location.href = '../admin/';
            break;
         case 2: 
            window.location.href = '../broker/';
            break;
         default:
            window.location.href = '../FrontEnd-Rough/';
        
    }
}  else {
    alert('Username or password is incorrect');
}
});  