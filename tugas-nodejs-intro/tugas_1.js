/**
 * Buat program Node.js sederhana yang membaca file teks dan mencetak isinya ke konsol.
 *
 */

const fs = require("fs");

fs.readFile("lorem.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
