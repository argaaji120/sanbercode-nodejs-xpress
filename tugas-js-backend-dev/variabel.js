/**
 * Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
 */

const thisConst = "this is const";
var thisVar = "this is var";
let thisLet = "this is let";

console.log("const content: ", thisConst);
console.log("var content: ", thisVar);
console.log("let content: ", thisLet);

// thisConst = "var content changed"; // TypeError: Assignment to constant variable.
thisVar = "var content changed";
thisLet = "let content changed";

console.log("var content (now): ", thisVar);
console.log("let content (now): ", thisLet);

/**
 * Buat program yang mencakup semua tipe data primitif dan non-primitif, serta menggunakan operator aritmatika dan perbandingan.
 */

let text = "Hello, World!"; // String
let number = 100; // Number
let isValid = true; // Boolean
let data = null; // Null
let notDefined; // Undefined
let person = { name: "Tom", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array

let a = 10;
let b = 5;
let sum = a + b; // 15
let difference = a - b; // 5
let product = a * b; // 50
let quotient = a / b; // 2
let remainder = a % b; // 0\

let x = 10;
let y = "10";

console.log(x == y); // true (loose equality)
console.log(x === y); // false (strict equality)
console.log(x != y); // false
console.log(x !== y); // true
console.log(x > 5); // true
console.log(x <= 10); // true
