/**
 * This function takes a username and passowrd and return the associated user
 * info if they exists in the DB
 * 
 * @param {str} username
 * @param {str} password
 * @returns {json} user info
 */
export function getUserInfo(username, password) {
    let recipe = 'getUserInfo';
    let values = [username, password];
    
    let jsonUserInfo = sqlHandler(recipe, values);
    
    return eval(jsonUserInfo)[0];
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