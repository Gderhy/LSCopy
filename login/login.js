import {getUserInfo} from './import_data.js';




document.getElementById('btn_login').addEventListener('click', function() {
   console.log(getUserInfo('mathias12', 'placeat')); 
});