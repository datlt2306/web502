
const a: number = 10;
const b: number = 20;

const sum = (a: number, b: number): number => {
    return a + b;
};
console.info(sum(a, b));

// Object
interface TypeInfo { name: string, age: number };
const info: TypeInfo = { name: "Dat", age: 30 };
const showInfo = (info: TypeInfo): TypeInfo => {
    return info;
}
showInfo(info);
// Array

interface IProduct {
    name: string;
    price: number;
}
const arrNumber: number[] | string[] = [1, 2, 3, 4, 5];
const products: IProduct[] = [
    { name: "A", price: 10 }
]
console.log(arrNumber);
