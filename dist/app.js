"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 10;
const b = 30;
const myName = "Le Trong Dat";
const myAge = 20; // union
const status = true;
const myObj = { id: 1, name: "Dat" };
const numberArr = [1, 3, 3, 4];
const stringArr = ["a", "b", "c"];
const objectArr = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
function display(result) {
    document.querySelector('#root').innerHTML = result;
}
function sum(numA, numB, callback) {
    const result = numA + numB;
    callback(result);
    // return numA + numB;
}
sum(10, 20, display);
//# sourceMappingURL=app.js.map