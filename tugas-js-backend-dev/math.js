/**
 * Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
 */

function calculateCircleArea(r) {
    return 3.14159 * r ** 2;
}

let radius = 7;
let area = calculateCircleArea(radius);
console.log(`Luat lingkaran dengan jari-jari ${radius} adalah ${area}`);

/**
 * Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.
 */

function square(numbers) {
    return numbers.map((number) => number ** 2);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(square(numbers));
