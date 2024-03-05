var a = 20;
var b = 20;
var sum = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number")
        return 0;
    return a + b;
};
console.log(sum(a, b));
// Core type
var myName = "Le Trong Dat";
var myAge = 20;
var isMarried = true;
var myInfo = {
    name: "Dat",
    age: 20
};
var showInfo = function (user) {
    return "".concat(user.name, " - ").concat(user.age);
};
console.log(showInfo(myInfo));
