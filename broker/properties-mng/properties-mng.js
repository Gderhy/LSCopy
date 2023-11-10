import {getLocations, insertNewProperty} from './import_data.js';
import {changeLoginInNav} from '../../login/loginNAV.js';


changeLoginInNav();
document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || parseInt(user.ROLE_ID) !== 2) {
        alert('Access denied. Redirecting to homepage.');
        window.location.href = '../../login/';
    }
    let locations = getLocations();
    let selectElement = document.getElementById('select_area_id');
    console.log(locations);

    locations.forEach(function (location) {
        let option = document.createElement('option');
        option.value = location.AREA_ID;
        option.textContent = location.NAME;
        selectElement.appendChild(option);
    });
});


document.getElementById('addProperty').addEventListener('submit', function (event) {
    event.preventDefault();

    let BROKER_ID = JSON.parse(localStorage.getItem('user')).ROLE_ID;
    let DESCRIPTION = document.getElementById('DESCRIPTION').value;
    let AREA_ID = document.getElementById('AREA_ID').value;
    let ADDRESS = document.getElementById('ADDRESS').value;
    let POSTAL = document.getElementById('POSTAL').value;
    let YEAR = document.getElementById('YEAR').value;
    let PARKING_COUNT = document.getElementById('PARKING_COUNT').value;
    let BATH_COUNT = document.getElementById('BATH_COUNT').value;
    let ROOMS_COUNT = document.getElementById('ROOMS_COUNT').value;
    let TYPE_ID = document.getElementById('TYPE_ID').value;
    let PRICE = document.getElementById('PRICE').value;
    let IS_FOR_SALE = document.getElementById('IS_FOR_SALE').value;


    console.log(BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE);

    insertNewProperty(BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE);

});
  