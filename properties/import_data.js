/**
 * return all locations 
 * @returns {json array}
 */
export function getLocations() {
    let recipe = 'getLocations';
    let values = null;

    let locations = sqlHandler(recipe, values);
    return eval(locations);
}
/**
 * Return images URL for a certain propertyID
 * @param {int} PROPERTY_ID
 * @returns {json array}
 */
export function getPropertyImages(PROPERTY_ID) {
    let recipe = 'getPropertyImages';
    let values = [PROPERTY_ID];
    
    let propetyImages = sqlHandler(recipe, values);
    return eval(propetyImages);
}

/**
 * Return all properties based on three filter parameters
 * @param {int} AREA_ID the idea of the location, -1 for all locations
 * @param {float} MAX_PRICE maxium renting or saling price, -1 for all properties
 * @param {int} IS_FOR_SALE 1 for true and 0 for false, -1 for all properties
 * @returns {json array}
 */
export function getProperties(AREA_ID, MAX_PRICE, IS_FOR_SALE) {
    let recipe = 'getProperties';
    let values = [AREA_ID ,AREA_ID, MAX_PRICE, MAX_PRICE, IS_FOR_SALE, IS_FOR_SALE];
    
     let properties = sqlHandler(recipe, values);
     return eval(properties);
}

/**
 * This function is called when the user request a visit to property
 * @param {int} REQUEST_ID
 * @param {str (datetime)} REQUESTED_DATE must be in the format YYYY-MM-DD HH:MM:SS
 * @param {int} CLIENT_ID
 * @param {int} PROPERTY_ID
 * @returns {json array}
 */
export function requestVisitToProperty(REQUESTED_DATE, CLIENT_ID, PROPERTY_ID) {
    let recipe = 'insertNewVisitRequest';
    let values = [REQUESTED_DATE, CLIENT_ID, PROPERTY_ID, CLIENT_ID, PROPERTY_ID];
    
    sqlHandler(recipe, values);
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

