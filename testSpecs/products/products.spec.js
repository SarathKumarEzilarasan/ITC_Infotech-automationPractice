let productPage = require('./products.helper.js');
let actions = require('../../Utilities/actions.js');
let EC = protractor.ExpectedConditions;
let testData = require('../../testData/testData.json');
var using = require('jasmine-data-provider');
let loginPage=require('../loginPage/loginPage.helper.js');


describe('Test Products', function () {
    using(testData.InvalidProductData, function (data, description) {
        it(description, function () {
            actions.sendKeysToElement(productPage.searchQuery, data.searchData);
            actions.clickElement(productPage.searchButton);
            expect(actions.getElementText(productPage.searchResult)).toContain(data.expected);
            actions.clickElement(productPage.home);
        })
    })
    using(testData.validProductData, function (data, description) {
        it(description, function () {
            actions.sendKeysToElement(productPage.searchQuery, data.searchData);
            actions.clickElement(productPage.searchButton);
            expect(actions.getElementText(productPage.searchResult)).not.toContain(data.failText);
        })
        it("Should validate the product detail and add the product to cart", function () {
            actions.clickElement(productPage.moreButton);
            actions.sendKeysToElement(productPage.quantity, data.quantity);
            actions.clickElement(productPage.addToCart);
            browser.sleep(5000);
            expect(actions.getElementText(productPage.successText.get(data.textIndex))).toEqual(data.expect);
            expect(actions.getElementText(productPage.successText.get(parseInt(data.textIndex + 1)))).toContain(data.quantity);
            actions.clickElement(productPage.proceedToCheckOut);
            actions.clickElement(productPage.proceedTo);
            actions.clickElement(productPage.proccedToAddr);
            actions.clickElement(productPage.acceptCheckBox);
            actions.clickElement(productPage.processCarrier);
            actions.clickElement(productPage.paymentModule);
            actions.clickElement(productPage.confirmOrder);
            expect(actions.getElementText(productPage.successAlert)).toEqual(data.successText);
        })
        using(testData.validTestData, function (data) {
            it("Should validate the order history after logOut", function () {
                actions.clickElement(loginPage.signOutButton);
                actions.clickElement(loginPage.signInLink);
                actions.sendKeysToElement(loginPage.getUserName(), data.userName);
                actions.sendKeysToElement(loginPage.getPassword(), data.password);
                actions.clickElement(loginPage.getSignInButton());
                expect(loginPage.getSessionName().isPresent()).toBeTruthy();
                actions.clickElement(productPage.myOrder);
                expect(actions.getCount(productPage.orderList)).not.toEqual(0);
            })
        })
    })
})