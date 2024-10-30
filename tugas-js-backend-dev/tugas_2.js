/**
 * Tolong jelaskan dengan caramu sendiri tentang kode berikut ini:
 */

function sumOfNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

const result = sumOfNumbers(1, 2, 3, 4, 5);
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`);

/**
 * Tujuan utama dari kode diatas adalah untuk menjumlahkan seluruh argumen yang dimasukkan ke dalam parameter fungsi sumOfNumbers
 *
 * Fungsi sumOfNumbers menggunakan rest parameter yang memungkinkan sebuah fungsi menerima argumen dalam jumlah banyak.
 * Semua argumen yang diterima fungsi tersebut akan dimasukkan ke dalam array.
 *
 * Di dalam fungsi sumOfNumbers menggunakan fungsi reduce untuk mengeksekusi nilai pada setiap element array numbers dan
 * mengembalikannya dalam sebuah nilai saja.
 *
 * Ilustrasi reduce pada kode di atas:
 * ------------------------------------------------------------------------------------------
 * |    callback    |   total   |   number  |   index   |       numbers     |     return    |
 * |----------------|-----------|-----------|-----------|-------------------|---------------|
 * |        1       |       0   |       1   |       0   |   [1, 2, 3, 4, 5] |   0 + 1 = 1   |
 * |        2       |       1   |       2   |       1   |   [1, 2, 3, 4, 5] |   1 + 2 = 3   |
 * |        3       |       3   |       3   |       2   |   [1, 2, 3, 4, 5] |   3 + 3 = 6   |
 * |        4       |       6   |       4   |       3   |   [1, 2, 3, 4, 5] |   6 + 4 = 10  |
 * |        5       |      10   |       5   |       4   |   [1, 2, 3, 4, 5] |  10 + 5 = 15  |
 * ------------------------------------------------------------------------------------------
 */
