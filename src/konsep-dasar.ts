// Konsep Dasar di Typescript
// - Functions
// function add(a: number, b: number): number {
//   return a + b;
// }

// let sum = add(11, 10);
// console.log(sum);

// function echo(message: string): void {
//   console.log(message.toUpperCase());
// }

// echo("Halo Dunia");

// let sum = (x: number, y: number): number => {
//   return x + y;
// };

// console.log(sum(10, 20)); // output 30

//   - Parameter Optional dan Default

// function multiply(a: number, b: number, c?: number): number {
//     if (typeof c != "undefined") {
//         return a * b * c;
//     }

//     return a * b;
// }

// console.log(`Hasil 1: ${multiply(1, 2, 3)}`);
// console.log(`Hasil 2: ${multiply(1, 2)}`);

// function applyDiscount(price: number, discount: number = 0.05): number {
//   return price * (1 - discount);
// }

// console.log(applyDiscount(100)); // output 95
// console.log(applyDiscount(100, 0.1)); // output 90


//   - Parameter Rest

// function getTotal(...numbers: number[]): number {
//   let total = 0;
//   numbers.forEach((num) => (total += num));
//   return total;
// }

// console.log(getTotal()); // output 0
// console.log(getTotal(10, 20)); // output 30
// console.log(getTotal(10, 20, 30)); // output 60

//   - Never

// function error(message: string): never {
//   throw new Error(message);
// }
// // atau
// function infiniteLoop(): never {
//   while (true) {
    
//   }
// }

// - Statement Control Flow
//   - if
//   - switch case

// let targetId = "btnDelete";
// switch (targetId) {
//   case "btnUpdate":
//     console.log("Update");
//     break;
//   case "btnDelete":
//     console.log("Delete");
//     break;
//   case "btnNew":
//     console.log("New");
//     break;
//   default:
//     console.log("Tidak Ada");
//     break;
// } // output “Delete”

//   - Perulangan for

// for (let i = 0; i < 5; i++) {
//   // do something
//   console.log(`Nilai: ${i}`);
// }

//   - Perulangan while

//   - break dan continue

let numbers = [1, 4, 9, 16, 25, 36, 49];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == 16) {
    continue; // lanjut ke iterasi berikutnya saat bernilai 16
  }

  if (numbers[i] == 36) {
    break; // hentikan perulangan saat bernilai 36
  }

  console.log(numbers[i]);
} // output 1, 4, 9, 25