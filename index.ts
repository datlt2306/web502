const a: number = 20;
const b: number = 20;

const sum = (a: number, b: number): number => {
    if (typeof a !== "number" || typeof b !== "number") return 0;
    return a + b
};
console.log(sum(a, b));


// Core type

const myName: string = "Le Trong Dat";
const myAge: number = 20;
const isMarried: boolean = true;
const myInfo: { name: string, age: number } = {
    name: "Dat",
    age: 20,
}
const showInfo = (user: { name: string, age: number }): string => {
    return `${user.name} - ${user.age}`
}
console.log(showInfo(myInfo))