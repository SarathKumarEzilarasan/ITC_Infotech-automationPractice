
//Functions to do user operations
var Action = function () {

    //Function to click a element
    this.clickElement = function (webElement) {
        webElement.click();
    }
    //Function to send values to a element
    this.sendKeysToElement = function (webElement, var1) {
        webElement.sendKeys(var1);
    }
    //Function to get value from a element
    this.getElementText = function (webElement) {
        return webElement.getText();
    }
    //Function to get count from a list
    this.getCount = function (webElement) {
        return webElement.count();
    }
    //Function to select a option in a select dropDown using a given number as option index
    this.selectDropdown = function (elementSelect, option) {
        if (option) {
            elementSelect.click();
            var options = elementSelect.all(by.tagName('option')).then(function (options) {
                options[option].click();
            });
        }
    };

}
module.exports = new Action();