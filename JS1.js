// Penggunaan if, else, dan nested if
let nilai = 75;

if (nilai >= 80) {
    console.log("Selamat! Anda lulus dengan nilai A.");
} else if (nilai >= 70) {
    console.log("Anda lulus dengan nilai B.");
} else {
    console.log("Anda harus belajar lebih keras. Nilai C.");
}

// Penggunaan switch case
let hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari ini adalah hari kerja.");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari ini adalah hari libur.");
        break;
    default:
        console.log("Hari ini adalah hari biasa.");
}

// Penggunaan for statement
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// Penggunaan while
let angka = 1;
while (angka <= 5) {
    console.log("Angka: " + angka);
    angka++;
}

// Penggunaan do while
let x = 1;
do {
    console.log("Nilai x: " + x);
    x++;
} while (x <= 5);

// Penggunaan function
function tambah(a, b) {
    return a + b;
}

let hasil = tambah(3, 5);
console.log("Hasil penambahan: " + hasil);
