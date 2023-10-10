<?php
$RECIPES = [
   'getUserInfo' => "SELECT FIRST_NAME,
                     USER_ID,
                     LAST_NAME,
                     PHONE_NUM,
                     EMAIL,
                     ROLE_ID,
                     STATUS
              FROM luckyseven.tbl_user
              WHERE USER_NAME = '?-?' AND PASSWORD = '?-?';",
    /*
     * USER QUERRIES HERE
     */
   'test' => "SELECT * FROM luckyseven.tbl_user;",
    /*
     * admin QUERRIES HERE
     */
   'getAllBrokers' => "SELECT 
                        USER_ID,
                        FIRST_NAME,
                        LAST_NAME,
                        PHONE_NUM,
                        EMAIL,
                        USER_NAME,
                        PASSWORD,
                        CASE WHEN STATUS = 1 THEN 'ACTIVE'
                        WHEN STATUS = 2 THEN 'SUSPENDED'
                        WHEN STATUS = 3 THEN 'DELETED' END AS STATUS
                        FROM luckyseven.tbl_user
                 WHERE ROLE_ID = 2",
    'insertNewBroker' => "INSERT INTO luckyseven.tbl_user (USER_ID, FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD, ROLE_ID, STATUS)
                            SELECT IFNULL(MAX(USER_ID), 0) + 1, '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', 2, 1
                            FROM luckyseven.tbl_user;",
    
    'updateBroker' => "UPDATE luckyseven.tbl_user
                        SET FIRST_NAME = '?-?',
                            LAST_NAME = '?-?',
                            PHONE_NUM = '?-?',
                            EMAIL = '?-?',
                            USER_NAME = '?-?',
                            PASSWORD = '?-?',
                            STATUS = '?-?'
                        WHERE USER_ID = '?-?';",
    
    'updateBrokerStatus' => "UPDATE luckyseven.tbl_user
                            SET STATUS = '?-?'
                            WHERE USER_ID = '?-?';",
    /*
     * Properties Mangement
     */
        'getBrokerProperties' => "
        SELECT
		P.PROPERTY_ID,
		PT.NAME AS PROPERTY_TYPE,
		L.NAME AS LOCATION_NAME,
		L.CITY AS LOCATION_CITY,
		L.PROVINCE AS LOCATION_PROVINCE,
		L.COUNTRY AS LOCATION_COUNTRY,
		P.DESCRIPTION,
		P.ADDRESS,
		P.YEAR,
		P.PARKING_COUNT,
		P.BATH_COUNT,
		P.ROOMS_COUNT,
		P.PRICE,
		PI.IMG AS COVER_IMAGE,
		P.IS_FOR_SALE
	FROM
		luckyseven.tbl_property P
	LEFT JOIN
		luckyseven.tbl_property_type PT ON P.TYPE_ID = PT.TYPE_ID
	LEFT JOIN
		luckyseven.tbl_location L ON P.AREA_ID = L.AREA_ID
	LEFT JOIN
		luckyseven.tbl_property_img PI ON P.COVER_IMG_ID = PI.IMG_ID
	WHERE BROKER_ID = '?-?';",
    /*
     * Properties Search
     */
    'getProperties' => "
        SELECT
		P.PROPERTY_ID,
		PT.NAME AS PROPERTY_TYPE,
		L.NAME AS LOCATION_NAME,
		L.CITY AS LOCATION_CITY,
		L.PROVINCE AS LOCATION_PROVINCE,
		L.COUNTRY AS LOCATION_COUNTRY,
		P.DESCRIPTION,
		P.ADDRESS,
		P.YEAR,
		P.PARKING_COUNT,
		P.BATH_COUNT,
		P.ROOMS_COUNT,
		P.PRICE,
		PI.IMG AS COVER_IMAGE,
		P.IS_FOR_SALE
	FROM
		luckyseven.tbl_property P
	LEFT JOIN
		luckyseven.tbl_property_type PT ON P.TYPE_ID = PT.TYPE_ID
	LEFT JOIN
		luckyseven.tbl_location L ON P.AREA_ID = L.AREA_ID
	LEFT JOIN
		luckyseven.tbl_property_img PI ON P.COVER_IMG_ID = PI.IMG_ID
	WHERE
		(P.AREA_ID = '?-?' OR '?-?' = -1)
		AND (P.PRICE <= '?-?' OR '?-?' = -1)
		AND (P.IS_FOR_SALE = '?-?' OR '?-?' = -1);",
    'getPropertyTypes' => 'SELECT * FROM luckyseven.tbl_property_type;',
    'getLocations' => 'SELECT * FROM luckyseven.tbl_location',
    
    'insertNewProperty' => "INSERT INTO luckyseven.tbl_property (PROPERTY_ID, BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
            PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS)
            VALUES (SELECT IFNULL(MAX(PROPERTY_ID), 0) + 1, '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', 1);",
    
    'updateProperty' => "UPDATE luckyseven.tbl_property
                            SET
                                COVER_IMG_ID = '?-?',
                                DESCRIPTION = '?-?',
                                AREA_ID = '?-?',
                                ADDRESS = '?-?',
                                POSTAL = '?-?',
                                YEAR = '?-?',
                                PARKING_COUNT = '?-?',
                                BATH_COUNT = '?-?',
                                ROOMS_COUNT = '?-?',
                                TYPE_ID = '?-?',
                                PRICE = '?-?',
                                IS_FOR_SALE = '?-?',
                                STATUS = '?-?'
                            WHERE
                                PROPERTY_ID = '?-?';",
    'linkImageToProperty' => "INSERT INTO luckyseven.tbl_property_img (IMG_ID, IMG, PROPERTY_ID)
                                VALUES (SELECT IFNULL(MAX(IMG_ID), 0) + 1, '?-?', '?-?');",
    'getPropertyImages' => "SELECT IMG_ID, IMG
                            FROM tbl_property_img
                            WHERE PROPERTY_ID = '?-?';"
];

$importedRecipeKey = $_POST['recipeKey']; //the key of the SQL recipe

$importedValues = $_POST['values']; //array of values to replace ?-? in recipe

setRecipe($importedRecipeKey, $importedValues);

/**
 * @param str $recipeName
 * @param array $values
 * 
 * Plugging in the needed values in the recipe and calls sendData() with
 * the updated recipe
 * 
 * This works for reading and writing data in SQL tables
 */
function setRecipe($recipeName, $values) {
    $str = $GLOBALS['RECIPES'][$recipeName];
    if (gettype($values) == 'array') { //making sure that values is an array
        for ($i = 0; $i < count($values); $i++) {
            $values[$i] = str_replace("'", "''", $values[$i]); //replacing values containing ' to avoid errors in sql
            $str = str_replace_first('?-?', $values[$i], $str);
        }
    }
    executeQuery($str);
}
/**
 * @param str $search //string to be replaced
 * @param str $replace //string to replace $search
 * @param str $subject //Whole string
 * @return str //str after replacement
 * this function replaces the first occurrence of a substring with another
 * substring in a specific string
 * 
 */

function str_replace_first($search, $replace, $subject) {
    $search = '/' . preg_quote($search, '/') . '/';
    return preg_replace($search, $replace, $subject, 1);
}

/**
 * @param type $recipe
 * This functions takes the recipe and returns an array to be treated in 
 * JS. 
 */
function executeQuery($recipe) {
    $serverName = "localhost"; // Change this to your MySQL server name
    $userName = "root"; // Change this to your MySQL username
    $password = "luckyseven"; // Change this to your MySQL password
    $dbName = "luckyseven"; // Change this to your MySQL database name

    // Create a connection to MySQL
    $conn = new mysqli($serverName, $userName, $password, $dbName);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL query
    $sql = $recipe;

    // Execute the query
    $result = $conn->query($sql);

    // Check for errors
    if (!$result) {
        $errorMessage = $conn->error;
        $response = array(
            'response' => $errorMessage
        );
        echo json_encode($response);
        return;
    }

    // Fetch and encode the results as JSON
    if ($result->num_rows > 0) {
        $rows = array();
        while ($row = $result->fetch_assoc()) {
            $rows[] = clean($row);
        }
        echo json_encode($rows);
    } else {
        echo "null";
    }

    // Close the MySQL connection
    $conn->close();
}

function clean($string) {
   return array_map('utf8_encode', $string); // Removes special chars.
}
?>