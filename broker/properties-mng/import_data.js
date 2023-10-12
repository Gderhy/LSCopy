/**
 * This document import and export data to the database for the property management
 * page
 * @type js
 */

/**
 * Return the properties of a specific broker id
 * @param {int} brokerID
 * @returns {json array}
 */
export function getBrokerProperties(BROKER_ID) {
    let recipe = 'getBrokerProperties';
    let values = [BROKER_ID];

    let properties = sqlHandler(recipe, values);
    return eval(properties);
}

/**
 * return all property types (condo, house, etc)
 * @returns {json array}
 */
export function getPropertyTypes() {
    let recipe = 'getPropertyTypes';
    let values = null;

    let propertyTypes = sqlHandler(recipe, values);
    return eval(propertyTypes);
}

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
 * @param {type} PROPERTY_ID
 * @returns {json array}
 */
export function getPropertyImages(PROPERTY_ID) {
    let recipe = 'getPropertyImages';
    let values = [PROPERTY_ID];
    
    let propetyImages = sqlHandler(recipe, values);
    return eval(propetyImages);
}

/**
 * insert new property to the db
 * @param {int} BROKER_ID //you should have it in local storage once logged in
 * @param {str} DESCRIPTION
 * @param {int} AREA_ID
 * @param {str} ADDRESS
 * @param {str} POSTAL
 * @param {int} YEAR
 * @param {int} PARKING_COUNT
 * @param {float} BATH_COUNT
 * @param {int} ROOMS_COUNT
 * @param {int} TYPE_ID
 * @param {int} PRICE
 * @param {int} IS_FOR_SALE // 1 for true and 0 for false
 * @returns void
 */
export function insertNewProperty(BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE) {

    let recipe = 'insertNewProperty';
    let values = [BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE];
    
    sqlHandler(recipe, values);
}

/**
 * 
 * @param {int} COVER_IMG_ID // you can get it after inserting image to property
 * see getPropertyImages and linkImageToProperty functions
 * @param {str} DESCRIPTION
 * @param {int} AREA_ID
 * @param {str} ADDRESS
 * @param {str} POSTAL
 * @param {str} YEAR
 * @param {int} PARKING_COUNT
 * @param {int} BATH_COUNT
 * @param {int} ROOMS_COUNT
 * @param {int} TYPE_ID
 * @param {float} PRICE
 * @param {int} IS_FOR_SALE // 1 for true and 0 for false
 * @param {str} STATUS //SOLD, DELETED, ON HOLD ALL UPPERCASE
 * @returns {undefined}
 */
export function updateProperrty(COVER_IMG_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS, PROPERTY_ID) {
            
    switch (STATUS) {
        case 'SOLD':
            STATUS = 4;
        case 'DELETED':
            STATUS = 3;
            break;
        case 'ON HOLD':
            STATUS = 2;
            break;
        default:
            STATUS = 1;
            break;
    }
    
    let recipe = 'updateProperty';
    let values = [COVER_IMG_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS, PROPERTY_ID];
    
    sqlHandler(recipe, values);
}

/**
 * Adding images to a certain property
 * @param {str} IMG_LINK
 * @param {int} PROPERTY_ID
 * @returns {undefined}
 */
export function linkImageToProperty(IMG_LINK, PROPERTY_ID) {
    let recipe = 'linkImageToProperty';
    let values = [IMG_LINK, PROPERTY_ID];
    
    sqlHandler(recipe, values);
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
