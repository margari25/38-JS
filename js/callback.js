console.clear();
function sum(a, b, callback) {
    const ats = a + b;

    callback(ats);
}

const numbers = [
    [2, 4],
    [7, 9],
    [-8, 16],
];

for (const nums of numbers) {
    const [pirmas, antras] = nums;

    sum(
        pirmas,
        antras,
        (atsakymas) => {
            console.log(`${pirmas} + ${antras} = ${atsakymas}`)
        }
    );
}