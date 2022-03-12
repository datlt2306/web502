export {};

const a: number = 10;
const b: number = 30;

// Khai b
// type User = {
//     id: number;
//     name: string
// }
interface User{
    id: number, // required
    name: string// required
    status?: boolean // required optional chaining
}
    
const myName: string = "Le Trong Dat";
const myAge : number | string = 20; // union
const status: boolean = true;
const myObj: User = {id: 1, name: "Dat"};


const numberArr: number[] = [1,3,3,4];
const stringArr: string[] = ["a","b","c"];
const objectArr: User[] = [{id: 1, name: "A"}, {id: 2, name: "B"}];

function display(result: number){
    document.querySelector('#root').innerHTML = result;
}

function sum(numA: number, numB:number, callback: (result: number) => void): void{
    const result = numA + numB;
    callback(result)
    // return numA + numB;
}
sum(10,20, display)


const person = {
    name: "Dat";
}




const show = <T, U>(a: T, b: U): [T,U] => {
    return [a, b];
}
show(10,"20");
show("Le","Dat");

type Product = {
    id: number,
    name: string
}
const getProducts = <T extends Product>(products: T[]) => {
    const result = products.map(item => `<div>${item.name}</div>`)
}
getProducts([{id: 1, name:"A"}, {id: 2, name: "B"}]);