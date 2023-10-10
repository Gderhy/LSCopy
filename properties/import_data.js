getProperties(2, 6000, 0);

function getProperties(area, maxPrice, isForSale) {
    let recipe = 'getProperties';
    let values = [area, area, maxPrice, maxPrice, isForSale, isForSale];
    
    console.log(sqlHandler(recipe, values));
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
