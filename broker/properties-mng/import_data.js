/**
 * This document import and export data to the database for the property management
 * page
 * @type js
 */
const user = JSON.parse(localStorage.getItem('user'));

if (user?.ROLE_ID !== "2") {

    alert("Not authorized.")
    window.location.href = "/LuckySeven/login";
}

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
                                  PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, IMG_LINK) {

    let recipe = 'insertNewProperty';
    let values = [BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE];
    
    sqlHandler(recipe, values);
    
    linkImageToProperty(IMG_LINK);
    setCoverImage();
}

/**
 *
 * @param {int} COVER_IMG_ID // you can get it after inserting image to property
 * see getPropertyImages and linkImageToProperty functions
 * @param {string} DESCRIPTION
 * @param {int} AREA_ID
 * @param {string} ADDRESS
 * @param {string} POSTAL
 * @param {string} YEAR
 * @param {int} PARKING_COUNT
 * @param {int} BATH_COUNT
 * @param {int} ROOMS_COUNT
 * @param {int} TYPE_ID
 * @param {float} PRICE
 * @param {int} IS_FOR_SALE // 1 for true and 0 for false
 * @param {string} STATUS //SOLD, DELETED, ON HOLD ALL UPPERCASE
 * @returns {undefined}
 */
export function updateProperty(COVER_IMG_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
                               PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS, PROPERTY_ID) {


    let recipe = 'updateProperty';
    let values = [COVER_IMG_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
        PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS, PROPERTY_ID];

    console.log(sqlHandler(recipe, values));
}

/**
 * Adding images to a certain property
 * @param {str} IMG_LINK
 * @param {int} PROPERTY_ID
 * @returns {undefined}
 */
export function linkImageToProperty(IMG_LINK) {
    let recipe = 'linkImageToProperty';
    let values = [IMG_LINK];

    sqlHandler(recipe, values);
    
}
/**
 * Setting a property cover image to the latest image
 * @param {int} PROPERTY_ID
 * @returns {undefined}
 */
export function setCoverImage(PROPERTY_ID) {
    let recipe = 'setCoverImage';
    let values = null;

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
