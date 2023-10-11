performTest();

function performTest() {
    let recipe = 'test';
    let values = null;
    let data = sqlHandler(recipe, values);
    console.log(eval(data));
}

function sqlHandler(recipe, values) {
    let tempData;
    $.ajax({url: 'general/MySqlRequests.php', method: 'POST', async: false,
        data: JSON.stringify({recipeKey: recipe, values: values}),
        success: function (response) {
            let data = response;
            tempData = data;
        }
    });
    return tempData;
}
