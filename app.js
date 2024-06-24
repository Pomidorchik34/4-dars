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
const products = [
  { name: "PC", price: 1000, mavjud: true },
  { name: "Phone", price: 700, mavjud: false },
  { name: "Plansheet", price: 500, mavjud: false },
  { name: "laptop", price: 800, mavjud: true },
];
let product = "PC";
product.forEach((value) => {
  if (value.name == product) {
    if (value.mavjud == true) {
      console.log(value.price);
    } else {
      console.log(false);
    }
  }
});
