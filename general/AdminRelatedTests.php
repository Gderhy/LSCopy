<?php

use PHPUnit\Framework\TestCase;

require_once 'MySqlRequests.php'; // Make sure to include the correct path to MySqlRequests.php

class AdminRelatedTests extends TestCase {

    /**
     * @test
     */
    public function testUpdateBroker() {
        // Define valid data for updating a broker
        $BROKER_ID = '1'; // Replace with a valid broker ID
        $FIRST_NAME = 'Updated First Name';
        $LAST_NAME = 'Updated Last Name';
        $PHONE_NUM = '555-555-5555';
        $EMAIL = 'updated_email@example.com';
        $USER_NAME = 'updated_username';
        $PASSWORD = 'updated_password';
        $STATUS = '2'; // Replace with the desired status (e.g., 1 for "Active")
        // Create an array of updated data values
        $values = [
            $FIRST_NAME,
            $LAST_NAME,
            $PHONE_NUM,
            $EMAIL,
            $USER_NAME,
            $PASSWORD,
            $STATUS,
            $BROKER_ID,
        ];

        // Specify the recipe name for updating a broker
        $recipeName = 'updateBroker';

        // Update the broker data and get the result
        $updateResult = setRecipe($recipeName, $values);

        // Assert that the result is not null, indicating a successful update
        $this->assertNotNull($updateResult);

        // If you have more specific assertions or validations for the updated broker data, add them here.
    }
}
