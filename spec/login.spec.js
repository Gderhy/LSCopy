import {getUserInfo} from '/LuckySeven/login/import_data.js';


describe('getUserInfo', function () {
    it('should return user information when valid credentials are provided', function () {
        // Define your test data (USER_NAME and PASSWORD)
        const USER_NAME = 'k-alabba';
        const PASSWORD = 'ooo';


        // Call the function you want to test
        const userInfo = getUserInfo(USER_NAME, PASSWORD);
        console.log(userInfo);
        // Expectations
        expect(userInfo).toBeDefined();
        expect(userInfo.FIRST_NAME).toEqual('Kumai');
        expect(userInfo.LAST_NAME).toEqual('Alabbas');
        expect(userInfo.USER_ID).toEqual('1');
        expect(userInfo.ROLE_ID).toEqual('1');
        // Add more expectations for other properties
    });

    it('should return null when invalid username is provided', function () {
        // Define your test data (invalid USER_NAME and PASSWORD)
        const USER_NAME = 'invalid_username-@#!SDA@#';
        const PASSWORD = 'ooo';

        // Call the function you want to test
        const userInfo = getUserInfo(USER_NAME, PASSWORD);

        // Expectations
        expect(userInfo).toBeNull();
    });
    
    it('should return null when invalid password is provided', function () {
        // Define your test data (invalid USER_NAME and PASSWORD)
        const USER_NAME = 'k-alabba';
        const PASSWORD = '123';

        // Call the function you want to test
        const userInfo = getUserInfo(USER_NAME, PASSWORD);

        // Expectations
        expect(userInfo).toBeNull();
    });
    
    it('should return null when invalid credentials are provided', function () {
        // Define your test data (invalid USER_NAME and PASSWORD)
        const USER_NAME = 'invalid_username';
        const PASSWORD = 'invalid_password';

        // Call the function you want to test
        const userInfo = getUserInfo(USER_NAME, PASSWORD);

        // Expectations
        expect(userInfo).toBeNull();
    });
});
