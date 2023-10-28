<?php

use PHPUnit\Framework\TestCase;

require_once 'MySqlRequests.php'; // Make sure to include the correct path to MySqlRequests.php

class PropertySearchTest extends TestCase {

    /**
     * @testdox Test for getting properties
     * @test
     */
    public function testGetProperties() {
        // Define search criteria
        $AREA_ID = '2'; // Replace with a valid area ID, or use -1 for any
        $MAX_PRICE = '300000'; // Replace with a maximum price, or use -1 for any
        $FOR_SALE = '1'; // 1 for "For Sale", -1 for any
        // Create an array of search criteria values
        $values = [
            $AREA_ID,
            $AREA_ID, // Use the same value twice if you want to search for "any"
            $MAX_PRICE,
            $MAX_PRICE, // Use the same value twice if you want to search for "any"
            $FOR_SALE,
            $FOR_SALE, // Use the same value twice if you want to search for "any"
        ];

        // Specify the recipe name for retrieving properties
        $recipeName = 'getProperties';

        // Retrieve properties based on the search criteria
        $properties = setRecipe($recipeName, $values);

        // Assert that the result is not null and, if needed, perform more specific validations on the retrieved properties.
        $this->assertNotNull($properties);
    }

    /**
     * @testdox Test for getting properties types
     * @test
     */
    public function testGetPropertyTypes() {
        // Specify the recipe name for retrieving property types
        $recipeName = 'getPropertyTypes';

        // Retrieve the list of property types
        $propertyTypes = setRecipe($recipeName, null);

        // Assert that the result is not null and, if needed, perform more specific validations on the retrieved property types.
        $this->assertNotNull($propertyTypes);
    }

    /**
     * @testdox Test for getting locations
     * @test
     */
    public function testGetLocations() {
        // Specify the recipe name for retrieving locations
        $recipeName = 'getLocations';

        // Retrieve the list of locations
        $locations = setRecipe($recipeName, null);

        // Assert that the result is not null and, if needed, perform more specific validations on the retrieved locations.
        $this->assertNotNull($locations);

        // Example: Check if the number of retrieved locations matches expectations.
        $this->assertCount(10, json_decode($locations));
    }
}
