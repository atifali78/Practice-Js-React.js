// let arr = ["Atif Ali", "Advocate", "High court", "Sheikhupura"];
// arr.forEach((val) => {
//   console.log(val.toUpperCase());
// });
// let arr = [12, 80, 90, 150, 160];
// arr.filter(val => {
//     val >= 90;
// });

// let arr = [12, 122, 90, 150, 160];
// let filteredArr = arr.filter((val) => val > 80);
// console.log(filteredArr);

// ---------------------------------------------------
// function declaration and expression
// function evenOdd(p1,p2) {  //parameters
//     console.log("P1>",p1);
//     console.log("P2>",p2);
// }
// evenOdd(1, 3);//argumnets
// -------------------------------------------------------
// Default functions and i solve i thing if i pass the argumnets in last 2 then how we can solve this

// function values(p1 = 1, p2 = 2, p3 = 3, p4 = 4) {
//     console.log(p1,p2,p3,p4);
// }
// values(undefined,undefined,5,6);
// ------------------------------------------------------
// // Arrow function and anonymous function
// const evenOdd = (p1 = 2, p2 = 3) => {
//   p1 % 2 == 0 ? console.log(`${p1} even`) : console.log(`${p1} odd`);
//   p2 % 2 == 0 ? console.log(`${p2} even`) : console.log(`${p2} odd`); //template literal {`${p2} odd`}
// };
// evenOdd();

// ----------------------------------------------
// Pass by copy pass by reference

// -------------------------------------------------
// callback by function

// function callfun(name, callback) {
//     console.log("My name is", name, "Ali")
//     callback();
// }

// function newone() {
//     console.log("You are great")
// }

// callfun("Atif",newone);

// -----------------------------------------------------

// Arrow function
// let b = "dollar";
// const a = () => {
//   console.log(`hi ${b} `);
// };
// //a();

// (() => {
//   console.log("IIFE");
// })();
// ___________________________________________________________
// const sim = (a, b) => {
//   console.log(`The Sum of ${a} and ${b} is ${a + b}`);
// };
// sim(2, 5);
// -------------------------------------------------------------
// // ternary operator
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let result = (a > b) ? ((a > c) ? ((a > d) ? a : d) : (c > d ? c : d)) : ((b > c) ? ((b > d) ? b : d) : (c > d ? c : d));

// console.log(result);

// -----------------------------------------------------
// ternary operator in if else statement
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 5;

// if (a > b && a > c && a > d) {
//   console.log(a, "is greater ");
// }
// else if (b > a && b > c && b > d) {
//   console.log(b, "is greater ");
// }
// else if(c > a && c > b && c > d) {
//   console.log(c, "is greater ");
// }
// else if (d > a && d > b && d > c) {
//   console.log(d, "is greater ");
// }
// else {
//   console.log("Error");
// }

// ------------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     let success = true; // Change to false to simulate an error

//     if (success) {
//       resolve("Operation was successful!"); // Fulfilled
//     } else {
//       reject("Operation failed."); // Rejected
//     }
//   }, 2000);
// });
