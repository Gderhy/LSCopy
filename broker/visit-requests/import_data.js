/**
 * This document import and export data to the database for the visit requests
 * page
 * @type js
 */
const user = JSON.parse(localStorage.getItem('user'));

if (user?.ROLE_ID !== "2") {

    alert("Not authorized.")
    window.location.href = "/LuckySeven/login";
}

/**
 * Return the visits requests for the properties posted by a certain broker
 * @param {int} brokerID
 * @returns {json array}
 */
export function getBrokerVisitRequests(BROKER_ID) {
    let recipe = 'getVisitsRequests';
    let values = [BROKER_ID];

    let requests = sqlHandler(recipe, values);
    return eval(requests);
}

/**
 * This function takes a data and a requestID and assign the given date to the given
 * visit request
 * @param {str (datetime)} DATE MUST BE IN THE FORMAT (YYYY-MM-DD HH:MM:SS)
 * @param {int} REQUEST_ID
 * @returns {json array}
 */
export function scheduleVisit(DATE, REQUEST_ID) {
    let recipe = 'scheduleVisit';
    let values = [DATE, REQUEST_ID];

    sqlHandler(recipe, values);
}

/**
 * Deleting a visit request
 * @param {int} REQUEST_ID
 * @returns {undefined}
 */
export function deleteVisit(REQUEST_ID) {
    let recipe = 'deleteVisit';
    let values = [REQUEST_ID];

    sqlHandler(recipe, values);
}

export function sqlHandler(recipe, values) {
    let tempData;
    $.ajax({
        url: '../../general/MySqlRequests.php', method: 'POST', async: false,
        data: {recipeKey: recipe, values: values},
        success: function (response) {
            let data = response;
            tempData = data;
        }
    });
    return tempData;
}
