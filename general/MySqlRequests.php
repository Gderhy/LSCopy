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
    'insertNewUser' => "INSERT INTO luckyseven.tbl_user (USER_ID, FIRST_NAME, LAST_NAME, PHONE_NUM, EMAIL, USER_NAME, PASSWORD, ROLE_ID, STATUS)
                            SELECT IFNULL(MAX(USER_ID), 0) + 1, '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', 3, 1
                            FROM luckyseven.tbl_user;",
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
		P.IS_FOR_SALE,
        P.AREA_ID,
        P.POSTAL,
        P.STATUS
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
		P.IS_FOR_SALE,
                USR.FIRST_NAME,
                USR.LAST_NAME,
                USR.PHONE_NUM,
                USR.EMAIL
	FROM
		luckyseven.tbl_property P
	LEFT JOIN
		luckyseven.tbl_property_type PT ON P.TYPE_ID = PT.TYPE_ID
	LEFT JOIN
		luckyseven.tbl_location L ON P.AREA_ID = L.AREA_ID
	LEFT JOIN
		luckyseven.tbl_property_img PI ON P.COVER_IMG_ID = PI.IMG_ID
	LEFT JOIN
		luckyseven.tbl_user USR ON USR.USER_ID = P.BROKER_ID
	WHERE
		(P.AREA_ID = '?-?' OR '?-?' = -1)
		AND (P.PRICE <= '?-?' OR '?-?' = -1)
		AND (P.IS_FOR_SALE = '?-?' OR '?-?' = -1)
                AND (P.BROKER_ID = '?-?' OR '?-?' = -1)
                AND P.STATUS = 1;",
    'getPropertyTypes' => 'SELECT * FROM luckyseven.tbl_property_type;',
    'getLocations' => 'SELECT * FROM luckyseven.tbl_location',
    'insertNewProperty' => "INSERT INTO luckyseven.tbl_property (PROPERTY_ID, BROKER_ID, DESCRIPTION, AREA_ID, ADDRESS, POSTAL, YEAR,
            PARKING_COUNT, BATH_COUNT, ROOMS_COUNT, TYPE_ID, PRICE, IS_FOR_SALE, STATUS)
            SELECT IFNULL(MAX(PROPERTY_ID), 0) + 1, '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', '?-?', 1
            FROM luckyseven.tbl_property;",
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
                                SELECT IFNULL(MAX(IMG_ID), 0) + 1, '?-?', '?-?'
                                FROM luckyseven.tbl_property_img;",
    'getPropertyImages' => "SELECT IMG_ID, IMG
                            FROM tbl_property_img
                            WHERE PROPERTY_ID = '?-?';",
    'insertNewVisitRequest' => "INSERT INTO luckyseven.tbl_property_visit (REQUEST_ID, REQUESTED_DATE, CLIENT_ID, PROPERTY_ID, STATUS)
                                SELECT IFNULL(MAX(REQUEST_ID), 0) + 1, '?-?', '?-?', '?-?', 1
                                FROM luckyseven.tbl_property_visit
                                WHERE NOT EXISTS (
                                    SELECT 1
                                    FROM luckyseven.tbl_property_visit
                                    WHERE CLIENT_ID = '?-?' AND PROPERTY_ID = '?-?'
                                );",
    'scheduleVisit' => "UPDATE luckyseven.tbl_property_visit
                        SET STATUS = 2,
                        SCHEDULED_DATE = '?-?'
                        WHERE REQUEST_ID = '?-?';",
    'deleteVisit' => "UPDATE luckyseven.tbl_property_visit
                        SET STATUS = 3
                        WHERE REQUEST_ID = '?-?';",
    'getVisitsRequests' => "SELECT
                        P.PROPERTY_ID,
                        PT.NAME AS PROPERTY_TYPE,
                        L.NAME AS LOCATION_NAME,
                        L.CITY AS LOCATION_CITY,
                        L.PROVINCE AS LOCATION_PROVINCE,
                        L.COUNTRY AS LOCATION_COUNTRY,
                        P.DESCRIPTION,
                        P.ADDRESS,
                        P.YEAR,
                        P.PRICE,
                        PI.IMG AS COVER_IMAGE,
                        P.IS_FOR_SALE,
                        V.REQUEST_ID,
                        CASE WHEN V.STATUS = 1 THEN 'NEW'
							WHEN V.STATUS = 2 THEN 'SCHEDULED'
                            WHEN V.STATUS = 3 THEN 'DELETED'
						END AS STATUS,
                        V.REQUESTED_DATE,
                        V.SCHEDULED_DATE,
                        CONCAT(U.FIRST_NAME, ' ', U.LAST_NAME) AS CLIENT_NAME,
                        U.PHONE_NUM AS CLIENT_PHONE,
                        U.EMAIL AS CLIENT_EMAIL
                FROM luckyseven.tbl_property_visit V
                LEFT JOIN
                        luckyseven.tbl_property P ON P.PROPERTY_ID = V.PROPERTY_ID
                LEFT JOIN
                        luckyseven.tbl_property_type PT ON P.TYPE_ID = PT.TYPE_ID
                LEFT JOIN
                        luckyseven.tbl_location L ON P.AREA_ID = L.AREA_ID
                LEFT JOIN 
                        luckyseven.tbl_property_img PI ON P.COVER_IMG_ID = PI.IMG_ID
                LEFT JOIN
                        luckyseven.tbl_user U ON U.USER_ID = V.CLIENT_ID
                WHERE P.BROKER_ID = '?-?'",
    
    'getBrokerOffers' => "SELECT OFFER_ID,
		FROM_BROKER_ID,
		OFFER.PROPERTY_ID,
		NOTE, 
		OFFER.STATUS,
		PROPERTY.DESCRIPTION,
		PROPERTY.ADDRESS,
		PROPERTY.POSTAL,
		PROPERTY.PRICE,
        CONCAT(FROM_USER.FIRST_NAME, ' ', FROM_USER.LAST_NAME) AS FROM_BROKER_NAME
        FROM luckyseven.tbl_property_offer OFFER
        LEFT JOIN luckyseven.tbl_property PROPERTY ON OFFER.PROPERTY_ID = PROPERTY.PROPERTY_ID
        LEFT JOIN luckyseven.tbl_user FROM_USER ON OFFER.FROM_BROKER_ID = FROM_USER.USER_ID
        WHERE PROPERTY.BROKER_ID = '?-?'",
    'updateOffer' => "UPDATE luckyseven.tbl_property_offer
                      SET STATUS = '?-?'
                      WHERE OFFER_ID = '?-?';",
    'insertOffer' => "INSERT INTO luckyseven.tbl_property_offer (OFFER_ID, FROM_BROKER_ID, PROPERTY_ID, NOTE, STATUS)
                   SELECT IFNULL(MAX(OFFER_ID), 0) + 1, '?-?', '?-?', '?-?', 1
                   FROM luckyseven.tbl_property_offer;"
];

$importedRecipeKey = isset($_POST['recipeKey']) ? $_POST['recipeKey'] : null; // Check if 'recipeKey' key exists
$importedValues = isset($_POST['values']) ? $_POST['values'] : null; // Check if 'recipeKey' key exists

if ($importedRecipeKey !== null) {
    $importedValues = $_POST['values']; // array of values to replace ?-?
    setRecipe($importedRecipeKey, $importedValues);
} else {
    // Handle the case when 'recipeKey' is not defined in the POST data
    echo "The 'recipeKey' is not defined in the POST data.";
}

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
    return executeQuery($str);
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
    $serverName = "127.0.0.1"; // Change this to your MySQL server name
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
        return null;
    }
    
    if (is_bool($result)) {
        return true;
    }
    // Fetch and encode the results as JSON
    if ($result->num_rows > 0) {
        $rows = array();
        while ($row = $result->fetch_assoc()) {
            $rows[] = clean($row);
        }
        echo json_encode($rows);
        return json_encode($rows);
    } else {
        echo "null";
        return null;
    }

    // Close the MySQL connection
    $conn->close();
}

function clean($string) {
    return array_map('utf8_encode', $string); // Removes special chars.
}

?>