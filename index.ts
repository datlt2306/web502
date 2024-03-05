
const a: string = 10;
const b: number = 20;

const sum = (a: number, b: number): number => {
    return a + b;
};
console.info(sum(a, b));

// Object
const info: { name: string, age: number } = { name: "Dat", age: 30 };
const showInfo = (info: { name: string, age: number }): { name: string, age: number } => {
    return info;
}
showInfo(info);
// Array
const arrNumber: number[] = [1, 2, 3, 4, 5];
const products: { name: string, price: number }[] = [
    { name: "A", price: 10 }
]

console.log(arrNumber);
