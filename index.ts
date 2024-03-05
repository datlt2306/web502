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
const arrTuple: [string, number] = ["Dat", 20];
const arrNumber: number[] = [1, 2, 3, 4];
const arrString: string[] = ["a", "b", "c"];
const unionType: "Thành công" | "Thất bại" = "Thành công";


// type product: 
type TypeProduct = {
    id: number
    name: string,
    price: number
}
const products: TypeProduct[] = [
    { id: 1, name: "Iphone 12", price: 1000 },
    { id: 3, name: "Iphone 13", price: 1000 },
]

const showProduct = (data: TypeProduct[]): string => {
    if (!Array.isArray(data)) return 'Data is not array';
    return data.map((item: TypeProduct) => `
            <div>${item.name}</div>
        `).join("")
}
showProduct(products);

