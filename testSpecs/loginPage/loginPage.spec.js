let url = getUrl();
let loginPage = require('./loginPage.helper.js');
let actions = require('../../Utilities/actions.js');
let EC = protractor.ExpectedConditions;
let testData = require('../../testData/testData.json');
var using = require('jasmine-data-provider');


describe('Test Login page', function () {
    using(testData.validTestDataSignUp, function (data) {
        beforeAll(function () {
            browser.get(url);
            browser.wait(EC.presenceOf(loginPage.signInLink.getText()), 5000);
            actions.clickElement(loginPage.signInLink);
            loginPage.signUp(data.firstName, data.lastName, data.password, data.city, data.state, data.postalCode, data.mobileNo, data.userName);
        })
    })
    using(testData.validTestData, function (data) {
        it("Should throw error when trying to create a account with existing user name", function () {
            actions.sendKeysToElement(loginPage.getEmailIdRegister(), data.userName);
            actions.clickElement(loginPage.getCreateButton());
            expect(loginPage.getErrors().isPresent()).toBeTruthy();
        })
    })

    using(testData.InvalidTestData, function (data, description) {
        it(description, function () {
            actions.clickElement(loginPage.signInLink);
            actions.sendKeysToElement(loginPage.getUserName(), data.userName);
            actions.sendKeysToElement(loginPage.getPassword(), data.password);
            actions.clickElement(loginPage.getSignInButton());
            expect(actions.getElementText(loginPage.getErrors().get(0))).toEqual(data.expected);
        })
    })
    using(testData.validTestData, function (data, description) {
        it(description, function () {
            actions.clickElement(loginPage.signInLink);
            actions.sendKeysToElement(loginPage.getUserName(), data.userName);
            actions.sendKeysToElement(loginPage.getPassword(), data.password);
            actions.clickElement(loginPage.getSignInButton());
            expect(loginPage.getSessionName().isPresent()).toBeTruthy();
        })
    })
})