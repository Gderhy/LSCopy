
const user = JSON.parse(localStorage.getItem('user'));

if (user?.ROLE_ID !== "1") {

    alert("Not authorized.")
    window.location.href = "/LuckySeven/login";
}


/**
 * This function will return all the brokers
 * @returns {array of jsons}
 */

// console.log(getAllBrokers()); //uncomment to test data importation
// console.log(suspendBroker(999));

/**
 * This is the function that you will need to import.
 * Please respect the importation syntax:
 * import {getAllBrokers} from './import_data.js';
 * Make sure all your js files are of type module in your index.php
 * @returns {data}
 */
export function getAllBrokers() {
    let brokers = sqlHandler('getAllBrokers', null);

    brokers = eval(brokers);

    return brokers;
}


// Function to add a new broker
export function addNewBroker(FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD) {
    let recipe = 'insertNewBroker';
    let values = [FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD];

    return sqlHandler(recipe, values);
}

/**
 *
 * @param {type} FIRST_NAME
 * @param {type} LAST_NAME
 * @param {type} PHONE_NUM
 * @param {type} EMAIL
 * @param {type} USER_NAME
 * @param {type} PASSWORD
 * @param {type} STATUS
 * @param {type} USER_ID
 * @returns {undefined}
 */
export function updateBroker(FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD, STATUS, USER_ID) {
    let recipe = 'updateBroker';
    switch (STATUS) {
        case 'DELETED':
            STATUS = 3;
            break;
        case 'SUSPENDED':
            STATUS = 2;
            break;
        default:
            STATUS = 1;
            break;
    }

    let values = [FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD, STATUS, USER_ID];

    sqlHandler(recipe, values);
    return 4;
}

/**
 * @param {int} USER_ID //you should have it from getAllBrokers function
 * @returns {data}
 */


// Delete broker
export function deleteBroker(USER_ID) {
    let recipe = 'updateBrokerStatus';
    let values = [3, USER_ID]; //3 int code for deleted

    sqlHandler(recipe, values);
}

/**
 * @param {int} USER_ID //you should have it from getAllBrokers function
 * @returns {data}
 */

// Suspend user from access
export function suspendBroker(USER_ID) {
    let recipe = 'updateBrokerStatus';
    let values = [2, USER_ID]; //2 int code for suspended

    sqlHandler(recipe, values);
}

function sqlHandler(recipe, values) {
    let tempData;
    $.ajax({
        url: '../general/MySqlRequests.php', method: 'POST', async: false,
        data: {recipeKey: recipe, values: values},
        success: function (response) {
            let data = response;
            tempData = data;
        }
    });
    return tempData;
}


