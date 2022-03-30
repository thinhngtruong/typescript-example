"use strict";
var STATE;
(function (STATE) {
    STATE[STATE["available"] = 0] = "available";
    STATE[STATE["soldOut"] = 1] = "soldOut";
    STATE[STATE["saleOff"] = 2] = "saleOff";
})(STATE || (STATE = {}));
var Phone = /** @class */ (function () {
    function Phone(name, price, star, colors, state) {
        this.name = name;
        this.price = price;
        this.star = star;
        this.colors = colors;
        this.state = state;
    }
    Phone.prototype.toString = function () {
        console.log(this.name + ' ' + this.price + ' ' + this.star + ' ' + this.state);
    };
    Phone.brand = 'Apple';
    return Phone;
}());
var phone = new Phone('Iphone 13 promax', 9000000, 4, [
    'white',
    'red',
    'blue'
], STATE.saleOff);
phone.toString();
console.log(Phone.brand);
