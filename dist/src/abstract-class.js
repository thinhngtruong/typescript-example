"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telephone = /** @class */ (function () {
    function Telephone(name) {
        this.name = name;
    }
    return Telephone;
}());
var MobileType;
(function (MobileType) {
    MobileType[MobileType["Android"] = 0] = "Android";
    MobileType[MobileType["iOS"] = 1] = "iOS";
})(MobileType || (MobileType = {}));
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    Mobile.prototype.sendMessage = function () {
        console.log('Send message');
    };
    Mobile.prototype.call = function () {
        console.log('Call');
    };
    return Mobile;
}(Telephone));
var mobile = new Mobile('Iphone 13 promax', MobileType.iOS);
