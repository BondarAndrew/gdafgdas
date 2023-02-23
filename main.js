// // let number = prompt("напиши число від 1 до 5");
// // let n1 = Number(number);
// // switch (n1) {
// //   case 1:
// //     console.log("one");
// //     break;
// //   case 2:
// //     console.log("two");
// //     break;
// //   case 3:
// //     console.log("three");
// //     break;
// //   case 4:
// //     console.log("four");
// //     break;
// //   case 5:
// //     console.log("fiwe");
// //     break;
// // }

// // let name = prompt("Введіть своє ім'я!");
// // if (name == null) {
// //   console.log("привіт незнайомець!");
// // } else {
// //   console.log(`Hello ${name}`);
// // }

// let correct = "1234";
// let pwd;

// while (correct != pwd) {
//   pwd = prompt("Enter pwd");
// }

//Ex1
let number = 3;

while (number <= 30) {
  console.log(number);
  number++;
}

//Ex2

let number2 = 5;

while (number2 >= -10) {
  console.log(number2);
  number2--;
}

//Ex3

let correct = 0;
let pwd;

while (correct != pwd) {
  pwd = prompt("Enter number");
}
