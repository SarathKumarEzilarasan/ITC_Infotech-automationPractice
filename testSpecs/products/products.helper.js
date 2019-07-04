let actions = require('../../Utilities/actions.js');
let locator = require('../../Utilities/locator.json');

var productPage = function () {

    this.searchQuery = element(by.css(locator[0].search_query_css));
    this.searchButton = element(by.css(locator[0].searchButton_css));
    this.searchResult = element(by.css(locator[0].searchResult_css));
    this.moreButton = element(by.css(locator[0].moreButton));
    this.productName = element.all(by.css(locator[0].productName_css));
    this.productPrice = element(by.css(locator[0].productPrice_css));
    this.addRemoveButton = element.all(by.css(locator[0].addRemoveButton_css));
    this.quantity = element(by.css(locator[0].quantity_css));
    this.addToCart = element(by.css(locator[0].addToCart_css));
    this.successText = element.all(by.css(locator[0].successText_css));
    this.proceedToCheckOut = element(by.css(locator[0].proceedToCheckOut_css));
    this.totalPrice = element.all(by.css(locator[0].totalPrice_css)).get(2);
    this.proceedTo = element.all(by.css(locator[0].proceedTo_css)).get(0);
    this.proccedToAddr = element(by.css(locator[0].proccedToAddr_css));
    this.processCarrier = element(by.css(locator[0].processCarrier_css));
    this.acceptCheckBox = element(by.css(locator[0].accept_css));
    this.paymentModule = element.all(by.css(locator[0].paymentModule_css)).get(1);
    this.confirmOrder = element(by.css(locator[0].confirmOrder_css));
    this.successAlert = element(by.css(locator[0].successAlert_css));
    this.home = element(by.css(locator[0].home_css));
    this.myOrder = element(by.css(locator[0].myOrders_css));
    this.orderList = element.all(by.css(locator[0].orderList_css));







}
module.exports = new productPage();
