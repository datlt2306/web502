// const a: number = 20;
// const b: number = 20;
// const sum = (a: number, b: number): number => {
//     if (typeof a !== "number" || typeof b !== "number") return 0;
//     return a + b
// };
// console.log(sum(a, b));
// Core type
// const myName: string = "Le Trong Dat";
// const myAge: number = 20;
// const isMarried: boolean = true;
// const myInfo: { name: string, age: number } = {
//     name: "Dat",
//     age: 20,
// }
// const showInfo = (user: { name: string, age: number }): string => {
//     return `${user.name} - ${user.age}`
// }
// console.log(showInfo(myInfo))
var arrTuple = ["Dat", 20];
var arrNumber = [1, 2, 3, 4];
var arrString = ["a", "b", "c"];
var unionType = "Thành công";
var products = [
    { id: 1, name: "Iphone 12", price: 1000 },
    { id: 3, name: "Iphone 13", price: 1000 },
];
var showProduct = function (data) {
    if (!Array.isArray(data))
        return 'Data is not array';
    return data.map(function (item) { return "\n            <div>".concat(item.name, "</div>\n        "); }).join("");
};
showProduct(products);
