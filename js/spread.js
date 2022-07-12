/*
konstantos + kintamieji = KINTAMIEJI (atminties lasteles)
konstantos: const
kintamieji: let, var
primityvus: number, string, boolean, bigint
kompleksiniai: array, object
*/

const a = [3, 4];
console.log('A:', a);

const b = [...a]; //ispreadinam - sukuriam klona be rysio su 'a', kad a ir b neturetu rysio ir 'a' neperasytume//
console.log('B:', b);

b[0] = 33;
console.log('B:', b);

b[1] = 44;
b.push(55);
console.log('B:', b);

console.log('A:', a);

// let a = 5;      // 1kg
// let b = a;      // 1kg
// const c = [ ................. ];      // 10_000kg
// const d = c;                          // 1kg

// b = 7;
// console.log(b);
// console.log(a);



// 2 budas kaip  sukurti kopija
const marks = [1, 2, 3, 4];
const marksCopy = [];

for (const mark of marks) {
    marksCopy.push(mark);
}

console.log(marks);
console.log(marksCopy);

marks[0] = 1000;

console.log(marks);
console.log(marksCopy);


function greet(name) {
    return `Hello,  ${name} how are you doing today?`;
    console.log(name.toString());

};
