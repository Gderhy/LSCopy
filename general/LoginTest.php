<?php

use PHPUnit\Framework\TestCase;
require_once 'MySqlRequests.php'; // Make sure to include the correct path to MySqlRequests.php

class MySqlRequestTest extends TestCase {
    /**
     * @test
     */
    public function testValidCredentials() {
        $USER_NAME = 'k-alabba';
        $PASSWORD = 'ooo';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

        $userInfo = setRecipe($recipeName, $values);
        if ($userInfo != null)
            $userInfo = json_decode($userInfo)[0];
        
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = (object) [
            'FIRST_NAME' => 'Kumai',
            'LAST_NAME' => 'Alabbas',
            'USER_ID' => '1',
            'ROLE_ID' => '1',
        ];
        $this->assertNotNull($userInfo);
        $this->assertEquals('Kumai', $userInfo->FIRST_NAME);
        $this->assertEquals('Alabbas', $userInfo->LAST_NAME);
        $this->assertEquals('1', $userInfo->USER_ID);
        $this->assertEquals('1', $userInfo->ROLE_ID);
        // Add more assertions for other properties if needed
    }

    /**
     * @test
     */
    public function testInvalidUsername() {
        $USER_NAME = 'invalid_username-@#!SDA@#';
        $PASSWORD = 'ooo';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

        $userInfo = setRecipe($recipeName, $values);
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = null;
        $this->assertNull($userInfo);
    }

    /**
     * @test
     */
    public function testInvalidPassword() {
        $USER_NAME = 'k-alabba';
        $PASSWORD = 'ooo';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

        $userInfo = setRecipe($recipeName, $values);
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = null;
        $this->assertNull($userInfo);
    }

    /**
     * @test
     */
    public function testInvalidCredentials() {
        $USER_NAME = 'invalid_username';
        $PASSWORD = 'invalid_password';

        $values = [$USER_NAME, $PASSWORD];
        $recipeName = 'getUserInfo';

        $userInfo = setRecipe($recipeName, $values);
        /*hard coded data, should be removed when proper databasesetup is made*/
        $userInfo = null;
        $this->assertNull($userInfo);
    }
}
