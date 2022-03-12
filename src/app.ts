export  {};

type Product = {
    id: number, name: string
}
const products: Product[] = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
]
function show<T extends Product[]>(products: T): void{
    const result = products.map(item => `<div>${item.name}</div>`);
    
}

show(products);

type TCallBack = {
    (result: number) : void
}
function sum(a: number, b: number, callback: TCallBack) : number{
    return a + b;
}