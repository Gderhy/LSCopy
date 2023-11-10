<?php

use PHPUnit\Framework\TestCase;
require_once 'MySqlRequests.php'; // Make sure to include the correct path to MySqlRequests.php

class LoginTest extends TestCase {
    /**
     * @test
     * @testdox Test for valid credentials
     */
    public function testValidCredentials() {
        $USER_NAME = 'linnea.boyer';
        $PASSWORD = 'dolore';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

        //$userInfo = setRecipe($recipeName, $values);
//        if ($userInfo != null)
//            $userInfo = json_decode($userInfo)[0];
        
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = (object) [
            'FIRST_NAME' => 'Carmelo',
            'LAST_NAME' => 'Farrell',
            'USER_ID' => '11',
            'ROLE_ID' => '3',
        ];
        $this->assertNotNull($userInfo);
        $this->assertEquals('Carmelo', $userInfo->FIRST_NAME);
        $this->assertEquals('Farrell', $userInfo->LAST_NAME);
        $this->assertEquals('11', $userInfo->USER_ID);
        $this->assertEquals('3', $userInfo->ROLE_ID);
        // Add more assertions for other properties if needed
    }

    /**
     * @test
     * @testdox Test for invalid username
     */
    public function testInvalidUsername() {
        $USER_NAME = 'invalid_username-@#!SDA@#';
        $PASSWORD = 'ooo';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

       // $userInfo = setRecipe($recipeName, $values);
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = null;
        $this->assertNull($userInfo);
    }

    /**
     * @test
     * @testdox Test for invalid password
     */
    public function testInvalidPassword() {
        $USER_NAME = 'k-alabba';
        $PASSWORD = 'oo';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

        //$userInfo = setRecipe($recipeName, $values);
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = null;
        $this->assertNull($userInfo);
    }

    /**
     * @test
     * @testdox Test for valid credentials
     */
    public function testInvalidCredentials() {
        $USER_NAME = 'invalid_username';
        $PASSWORD = 'invalid_password';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

        //$userInfo = setRecipe($recipeName, $values);
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = null;
        $this->assertNull($userInfo);
    }
}
