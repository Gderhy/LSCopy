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

export function getProperties(area, maxPrice, isForSale) {
    let recipe = 'getProperties';
    let values = [area, area, maxPrice, maxPrice, isForSale, isForSale];
    
     let properties = sqlHandler(recipe, values);
     return eval(properties);
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

