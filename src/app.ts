export {}

type Product = {
    id: number;
    name: string;
    status?: boolean // required
}
// tsc --init
// target: "es2018"
// baseUrl: './src'
// ourDir: './dist'
// gõ câu lệnh : tsc --watch
const a: number = 20;
const b: number = 20;
const name: string | number = 20; // union
const age: number = 20;
const status: boolean = true;
const info: Product = { id: 1, name: 'a'};
const stringArr: string[] = ["a","b","c"];
const numberArr: number[] = [1,2,3,4];
const objectArr: Product[] = [{id: 1}, {id: 2}]

function sum(numA: number, numB: number): number{
    return numA + numB;
    // return numA + numB;
}

sum(a,b);
// tsc --watch ten_file