<?php

use PHPUnit\Framework\TestCase;
require_once 'MySqlRequests.php'; // Make sure to include the correct path to MySqlRequests.php

class BrokerPropertiesMngTest extends TestCase {
    /**
     * @test
     */
    public function testInsertNewProperty() {
        // Define valid property data to insert
        $BROKER_ID = '1'; // Replace with a valid broker ID
        $DESCRIPTION = 'THIS PROPERTY IS INSERTED FROM TEST CASE';
        $AREA_ID = '2'; // Replace with a valid area ID
        $ADDRESS = '123 Elm Street';
        $POSTAL = '12345';
        $YEAR = '2020';
        $PARKING_COUNT = '2';
        $BATH_COUNT = '2';
        $ROOMS_COUNT = '3';
        $TYPE_ID = '3'; // Replace with a valid property type ID
        $PRICE = '250000';
        $IS_FOR_SALE = '1'; // 1 for "For Sale"
        $STATUS = '1'; // 1 for "Active"

        // Create an array of property data values
        $values = [
            $BROKER_ID,
            $DESCRIPTION,
            $AREA_ID,
            $ADDRESS,
            $POSTAL,
            $YEAR,
            $PARKING_COUNT,
            $BATH_COUNT,
            $ROOMS_COUNT,
            $TYPE_ID,
            $PRICE,
            $IS_FOR_SALE,
            $STATUS,
        ];

        // Specify the recipe name for inserting a new property
        $recipeName = 'insertNewProperty';

        // Insert the new property and get the result
        $propertyResult = setRecipe($recipeName, $values);
//        $propertyResult = 'rand'; //to be deleted when proper DB structure is made
        // Assert that the result is not null, indicating a successful insertion
        $this->assertNotNull($propertyResult);

        // If you have more specific assertions or validations for the inserted property, add them here.
    }
}
