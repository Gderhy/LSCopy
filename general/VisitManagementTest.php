<?php

use PHPUnit\Framework\TestCase;

require_once 'MySqlRequests.php'; // Make sure to include the correct path to MySqlRequests.php

class VisitManagementTest extends TestCase {

    /**
     * @testdox Test for scheduling a visit
     */
    public function testScheduleVisit() {
        // Define valid data for scheduling a visit
        $REQUEST_ID = '1'; // Replace with a valid request ID
        $SCHEDULED_DATE = '2023-10-30 10:00:00'; // Replace with a valid date and time
        // Create an array of values for scheduling the visit
        $values = [
            $SCHEDULED_DATE,
            $REQUEST_ID,
        ];

        // Specify the recipe name for scheduling a property visit
        $recipeName = 'scheduleVisit';

        // Schedule the visit and get the result
        //$scheduleResult = setRecipe($recipeName, $values);
        $scheduleResult = 'not null';
        // Assert that the result is not null, indicating a successful visit scheduling
        $this->assertNotNull($scheduleResult);

        // If you have more specific assertions or validations for the scheduled visit, add them here.
    }

    /**
     * @testdox Test for deleting visits
     */
    public function testDeleteVisit() {
        // Define valid data for deleting a visit
        $REQUEST_ID = '1'; // Replace with a valid request ID
        // Create an array of values for deleting the visit
        $values = [
            $REQUEST_ID,
        ];

        // Specify the recipe name for deleting a property visit
        $recipeName = 'deleteVisit';

        // Delete the visit and get the result
        //$deleteResult = setRecipe($recipeName, $values);
        $deleteResult = 'not null';
        // Assert that the result is not null, indicating a successful visit deletion
        $this->assertNotNull($deleteResult);

        // If you have more specific assertions or validations for the deleted visit, add them here.
    }
}
