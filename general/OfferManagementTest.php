<?php

use PHPUnit\Framework\TestCase;

require_once 'MySqlRequests.php'; // Make sure to include the correct path to MySqlRequests.php

class OfferManagementTest extends TestCase {

    /**
     * @testdox Test for getting offers
     * @test
     */
    public function testGetOffers() {
        // Define search criteria
        $BROKER_ID = '105';
        // Create an array of search criteria values
        $values = [
            $BROKER_ID
        ];

        // Specify the recipe name for offers
        $recipeName = 'getBrokerOffers';

        // Retrieve offers based on the search criteria
        $offers = setRecipe($recipeName, $values);
//        $offers = 'not null';
        // Assert that the result is not null and, if needed, perform more specific validations on the retrieved offers.
        $this->assertNotNull($offers);
    }

    /**
     * @testdox Test for updating offers
     * @test
     */
    public function testUpdateOffer() {
        // Specify the recipe name for updating the offer
        $recipeName = 'updateOffer';
        $STATUS = 3; //can be any integer value
        $OFFER_ID = 1;
        $values = [
            $STATUS,
            $OFFER_ID
        ];

        //updating the offer
        $offerUpdatedResponse = setRecipe($recipeName, $values);
//        $offerUpdatedResponse = 'not null';
        // Assert that the result is not null and, if needed, perform more specific validations on the offer has been updated
        $this->assertNotNull($offerUpdatedResponse);
    }

    /**
     * @testdox Test for inserting new offer
     * @test
     */
    public function testInsertOffer() {
        // Specify the recipe name for inserting offer
        $recipeName = 'insertOffer';
        
        $FROM_BROKER_ID = 1; //can be any integer value that exists
        $PROPERTY_ID = 1;
        $DESCRIPTION = 'THIS OFFER IS INSERTED FROM A TEST CASE';
        $values = [
            $FROM_BROKER_ID,
            $PROPERTY_ID,
            $DESCRIPTION
        ];
        // inserting the offer
        $offerInsertResponse = setRecipe($recipeName, $values);
//        $offerInsertResponse = 'not null';
        // Assert that ther offer has been inserted
        $this->assertNotNull($offerInsertResponse);
    }
}
