// 5-OY 4-DARS
let res;

// 1
// const students = [
//   { name: "Alice", age: 21, overball: [98, 67, 89] },
//   { name: "John", age: 23, overball: [98, 87, 67] },
//   { name: "Burger", age: 18, overball: [98, 70, 89] },
// ];
// let sum1;
// let sum2;
// let sum3;
// students[0].overball.reduce((sum, value) => {
//   sum1 = sum1 + value;
// });
// students[1].overball.reduce((sum, value) => {
//   sum2 = sum2 + value;
// });
// students[2].overball.reduce((sum, value) => {
//   sum3 = sum3 + value;
// });
// if (sum1 > sum2) {
//   console.log(students[0]);
// } else if (sum1 > sum3) {
//   console.log(students[0]);
// } else if (sum1 < sum2) {
//   console.log(students[1]);
// } else if (sum2 < sum3) {
//   console.log(students[2]);
// }

// 2
// const products = [
//   { name: "PC", price: 1000, mavjud: true },
//   { name: "Phone", price: 700, mavjud: false },
//   { name: "Plansheet", price: 500, mavjud: false },
//   { name: "laptop", price: 800, mavjud: true },
// ];
// let product = "PC";
// product.forEach((value) => {
//   if (value.name == product) {
//     if (value.mavjud == true) {
//       console.log(value.price);
//     } else {
//       console.log(false);
//     }
//   }
// });

// 3
// let matem = 0;
// let fizik = 0;
// let info = 0;
// const students = [
//   { ism: "Ali", yosh: 20, fanlari: ["Matematika", "Fizika"] },
//   { ism: "Vali", yosh: 21, fanlari: ["Matematika", "Informatika"] },
//   { ism: "Sami", yosh: 22, fanlari: ["Fizika", "Rus tili"] },
// ];
// students.forEach((value) => {
//   if (value.fanlari.includes("Matematika")) {
//     matem++;
//   }
//   if (value.fanlari.includes("Fizika")) {
//     fizik++;
//   }
//   if (value.fanlari.includes("Informatika")) {
//     info++;
//   }
// });
// console.log("informatika", info, "matematika", matem, "fizika", fizik);

// 4
// const workers = [
//   { ism: "Ali", lavozim: "Dasturchi", maosh: 2000 },
//   { ism: "Vali", lavozim: "Dizayner", maosh: 1800 },
//   { ism: "Sami", lavozim: "Dasturchi", maosh: 2200 },
//   { ism: "Qodir", lavozim: "Loyiha boshqaruvchisi", maosh: 2500 },
// ];
// let richWorkers = [];
// workers.forEach((value) => {
//   if (value.maosh > 2000) {
//     richWorkers.push(value);
//   }
// });
// console.log(richWorkers);

// 5
// const products = [
//   { nom: "Kompyuter", kategoriya: "Elektronika", narx: 1000 },
//   { nom: "Telefon", kategoriya: "Elektronika", narx: 700 },
//   { nom: "Stol", kategoriya: "Mebel", narx: 200 },
//   { nom: "Stul", kategoriya: "Mebel", narx: 600 },
//   { nom: "Lampochka", kategoriya: "Elektronika", narx: 10 },
// ];
// let narxlar = [];
// products.forEach((value) => {
//   narxlar.push(value.narx);
// });
// narxlar = narxlar.sort((a, b) => a - b);
// let center = narxlar.length / 2;
// console.log(narxlar[Math.trunc(center)]);
