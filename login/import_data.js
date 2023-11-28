/**
 * This function takes a username and passowrd and return the associated user
 * info if they exists in the DB
 *
 * @param {str} username
 * @param {str} password
 * @returns {json} user info
 */
export function getUserInfo(USER_NAME, PASSWORD) {
    let recipe = 'getUserInfo';
    let values = [USER_NAME, PASSWORD];

    let jsonUserInfo = sqlHandler(recipe, values);

    let evaluatedData = eval(jsonUserInfo);
    if (evaluatedData && Array.isArray(evaluatedData) && evaluatedData.length > 0) {
        return evaluatedData[0];
    } else {
        return null;
    }
}

export function userExists(USER_NAME) {
    let recipe = 'userExists';
    let values = [USER_NAME];

    let jsonUserInfo = sqlHandler(recipe, values);

    let evaluatedData = eval(jsonUserInfo);
    if (evaluatedData && Array.isArray(evaluatedData) && evaluatedData.length > 0) {
        return evaluatedData[0];
    } else {
        return null;
    }
}

// Function to add a new user
export function addNewUser(FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD) {
    let recipe = 'insertNewUser';
    let values = [FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD];

    return sqlHandler(recipe, values);
}

export function sqlHandler(recipe, values) {
    let tempData;
    $.ajax({
        url: '../general/MySqlRequests.php', method: 'POST', async: false,
        data: {recipeKey: recipe, values: values},
        success: function (response) {
            let data = response;
            tempData = data;
        }
    });
    return tempData;
}