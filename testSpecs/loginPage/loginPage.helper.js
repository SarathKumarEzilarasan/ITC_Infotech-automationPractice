let actions = require('../../Utilities/actions.js');
let locator = require('../../Utilities/locator.json');

var loginPage = function () {

    this.signInLink = element(by.css(locator[0].signInLink_css));
    let firstName = element(by.css(locator[0].firstName_css));
    let lastName = element(by.css(locator[0].lastName_css));
    let password = element(by.css(locator[0].password_css));
    let address = element(by.css(locator[0].address_css));
    let city = element(by.css(locator[0].city_css));
    let state = element(by.css(locator[0].state_css));
    let postalCode = element(by.css(locator[0].postcode_css));
    let mobileNo = element(by.css(locator[0].mobileNumber_css));
    let registerButton = element(by.css(locator[0].register_css));
    let emailIdRegister = element(by.css(locator[0].emailAddressCreate_css));
    let userName = element(by.css(locator[0].emailAddress_css));
    let createButton = element(by.css(locator[0].createAccount_css));
    let signInButton = element(by.css(locator[0].signIn_css));
    let sessionUserName = element(by.css(locator[0].sessionUserName_css));
    this.signOutButton = element(by.css(locator[0].signOutButton_css));
    let errors = element.all(by.css(locator[0].errors_css));

    //Getter to get the element
    this.getUserName = function () {
        return userName;
    }
    //Getter to get the element
    this.getPassword = function () {
        return password;
    }
    //Getter to get the element
    this.getSignInButton = function () {
        return signInButton;
    }

    //Getter to get the element
    this.getErrors = function () {
        return errors;
    }
    //Getter to get the element
    this.getSessionName = function () {
        return sessionUserName;
    }
     //Getter to get the element
     this.getCreateButton = function () {
        return createButton;
    }
    //Getter to get the element
    this.getEmailIdRegister = function () {
        return emailIdRegister;
    }

    //Function to sign up
    this.signUp = function (fName, lName, passwordVal, cityVal, stateVal, postalVal, mobileVal, emailVal) {
        actions.sendKeysToElement(emailIdRegister, emailVal);
        actions.clickElement(createButton);
        actions.sendKeysToElement(firstName, fName); actions.sendKeysToElement(lastName, lName); actions.sendKeysToElement(password, passwordVal);
        actions.sendKeysToElement(address, cityVal); actions.sendKeysToElement(city, cityVal); actions.sendKeysToElement(postalCode, postalVal);
        actions.sendKeysToElement(mobileNo, mobileVal);
        actions.selectDropdown(state, stateVal);
        actions.clickElement(registerButton);
        expect(actions.getElementText(sessionUserName)).toEqual(fName + " " + lName);
        actions.clickElement(this.signOutButton);
    }
}
module.exports = new loginPage();