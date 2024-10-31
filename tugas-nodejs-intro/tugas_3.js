/**
 * Buat modul Node.js yang mengekspor fungsi untuk menjumlahkan dua angka, dan impor modul tersebut di file lain.
 */

const myModule = require("./my_module.js");

let num1 = 25;
let num2 = 50;

console.log(myModule.sum(num1, num2));
