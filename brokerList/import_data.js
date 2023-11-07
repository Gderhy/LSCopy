
import {implementNavbar} from '/LuckySeven/Navbar/navbar.js'
const user = JSON.parse(localStorage.getItem('user'));



/**
 * This is the js that you will need to import.
 * Please respect the importation syntax:
 * import {getAllBrokers} from './import_data.js';
 * Make sure all your js files are of type module in your index.php
 * @returns {data}
 */

/**
 * This function will return all the brokers
 * @returns {array of jsons}
 */
export function getAllBrokers() {
    let brokers = sqlHandler('getAllBrokers', null);

    brokers = eval(brokers);

    return brokers;
}

function sqlHandler(recipe, values) {
    let tempData;
    $.ajax({url: '../general/MySqlRequests.php', method: 'POST', async: false,
        data: {recipeKey: recipe, values: values},
        success: function (response) {
            let data = response;
            tempData = data;
        }
    });
    return tempData;
}


