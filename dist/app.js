"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
];
function show(products) {
    console.log(products);
    // products.map(item: { id: number, name: string} => item.name);
}
show(products);
