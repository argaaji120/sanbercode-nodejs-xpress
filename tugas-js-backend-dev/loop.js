/**
 * Buat program yang menggunakan loop forEach untuk mencetak angka 1 sampai 10.
 */

const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

numbers.forEach((number) => {
    console.log(number);
});
