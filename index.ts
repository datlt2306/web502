export { };
const a: number = 10;
const b: number = 20;

const sum = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return 0;
    return a + b;
};
console.log(sum(a, b));
