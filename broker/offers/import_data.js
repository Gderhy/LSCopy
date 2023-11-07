/**
 * This document import and export data to the database for the visit requests
 * page
 * @type js
 */
 const user = JSON.parse(localStorage.getItem('user'));
 
 if(user?.ROLE_ID !== "2"){

     alert("Not authorized.")
     window.location.href = "/LuckySeven/login";
 }
/**
 * Return the visits requests for the properties posted by a certain broker
 * @param {int} brokerID
 * @returns {json array}
 */
export function getBrokerOffers(BROKER_ID) {
    let recipe = 'getBrokerOffers';
    let values = [BROKER_ID];

    let requests = sqlHandler(recipe, values);
    return eval(requests);
}

/**
 * Please use the following in you select element:
 *      NEW OFFER STATUS is 1
 *      ACCEPTED STATUS is 2
 *      DELETED/DENIED STATUS is 3
 * @param {str} offerStatus a string with the status of the offer
 * @returns {undefined}
 */
export function updateOffer(offerStatus, offerId) {
    let recipe = 'updateOffer';
    let status = offerStatus;
    let values = [status, offerId];
    
    sqlHandler(recipe, values)
}

export function sqlHandler(recipe, values) {
    let tempData;
    $.ajax({url: '../../general/MySqlRequests.php', method: 'POST', async: false,
        data: {recipeKey: recipe, values: values},
        success: function (response) {
            let data = response;
            tempData = data;
        }
    });
    return tempData;
}
