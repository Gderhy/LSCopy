//performTest();

function performTest() {
    let recipe = 'test';
    let values = null;
    let data = sqlHandeler(recipe, values);
    console.log(eval(data));
}

function sqlHandeler(recipe, values) {
    let tempData;
    $.ajax({url: 'general/MySqlRequests.php', method: 'POST', async: false,
        data: {recipeKey: recipe, values: values},
        success: function (response) {
            let data = response;
            tempData = data;
        }
    });
    return tempData;
}
