/**
 * Buatlah function yang mempunyai parameter / argument object tasks
 * kemudian return value nya berupa string (gunakan teknik string literal).
 */

function showTask(task) {
    let status = task.isDone ? "Sudah Dikumpulkan" : "Belum Dikumpulkan";
    return `Nama Tugas: ${task.title}\nDeskripsi Tugas: ${task.description}\nWaktu Pengumpulan: ${task.startTime} s/d ${task.endTime}\nStatus: ${status}`;
}

let myTask = {
    title: "Javascript untuk Backend Developer",
    description: "Tugas harian ke-2 dari kelas bootcamp NodeJS Backend Development with Xpress",
    startTime: "29 Oktober 2024 06:00:00 WIB",
    endTime: "30 Oktober 2024 23:59:00 WIB",
    isDone: true,
};

console.log(showTask(myTask));
