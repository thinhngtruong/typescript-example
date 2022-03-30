"use strict";
function view(x) {
    return x;
}
console.log(view('Hello world'));
console.log(view(100));
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.viewInfo = function (info) {
        console.log(info);
    };
    return Computer;
}());
Computer.viewInfo(['Dell', 'Apple', 'Asus']);
