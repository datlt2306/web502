export {};
import { sum } from 'function/function';
type Product = {
    id: number,
    name: string,
    price: number
}

type Product2 = {
    id: number,
    name: string,
    status: boolean
}

type MergeType = Product | Product2;

const a: number = 10;
const b: number = 20;
const myName: string | number = "Le Trong Dat";
const myAge : number = 20;
const myStatus: boolean = true;
const myObj: Product = { id: 1, name: "Dat", price: 20};
const arrNumber: number[] = [1,2,3,4];
const arrString: string[] = ["a","b","c"];
const arrObj: MergeType[] = [
    {id: 1, name: "San pham A", price: 20},
    {id: 1, name: "San pham A", status: true}
]



sum(a, b)
