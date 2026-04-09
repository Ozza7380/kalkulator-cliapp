const prompt = require("prompt-sync")();

console.log("=== KALKULATOR SEDERHANA ===");

while (true) {
    console.log("\nMenu:");
    console.log("1. Hitung");
    console.log("0. Keluar");

const menu = prompt("Pilih: ");

if (menu === "0") {
    console.log("Terimakasih!");
    break;
}

if (menu === "1") {
    const a = Number(prompt("Angka pertama: "));
    const b = Number(prompt("Angka kedua: "));
    const op = prompt("Operator (+ - * /)");

    let hasil;

    if (op === "+") {
        hasil = a+b;
    } else if (op === "-") {
        hasil = a-b
    } else if (op === "*") {
        hasil = a*b
    } else if (op === "/") {
        if (b === 0) {
            console.log("Tidak bisa dibagi 0!!")
            continue;
        }
        hasil = a/b;
    } else {
        console.log("Operator tidak valid!!");
        continue;
    }

    console.log("Hasil: ", hasil);
  } else {
    console.log("Menu tidak valid!")
 }
}
