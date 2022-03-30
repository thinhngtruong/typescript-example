"use strict";
function viewProfile(people) {
    console.log(people.name + ' ' + people.age);
}
viewProfile({ name: 'Thinh', age: 25 });
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.run = function () {
        console.log('Cat run');
    };
    Cat.prototype.eat = function (food) {
        console.log('Cat eat ' + food);
    };
    return Cat;
}());
var cat = new Cat('Meow', 1);
cat.run();
cat.eat('meat');
