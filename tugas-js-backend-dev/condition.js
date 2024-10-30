/**
 * Buat program yang meminta input dari pengguna dan menggunakan struktur if else untuk menentukan apakah angka tersebut genap atau ganjil.
 */

const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Input Angka: ");

if (number % 2 == 0) console.log(`${number} merupakan angka Genap`);
else console.log(`${number} merupakan angka Ganjil`);

/**
 * Buat program yang menggunakan switch untuk mencetak nama hari berdasarkan nomor hari (1 untuk Senin, 2 untuk Selasa, dst.).
 */

let dayName;
let dayNumber = parseInt(prompt("Input Nomor Hari (1-7): "));

switch (dayNumber) {
    case 1:
        dayName = "Senin";
        break;

    case 2:
        dayName = "Selasa";
        break;

    case 3:
        dayName = "Rabu";
        break;

    case 4:
        dayName = "Kamis";
        break;

    case 5:
        dayName = "Jumat";
        break;

    case 6:
        dayName = "Sabtu";
        break;

    case 7:
        dayName = "Minggu";
        break;

    default:
        break;
}

console.log(`Hari ${dayName}`);
