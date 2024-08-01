// // 26-7-2024
// // rest operator

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const [a, b, c] = array;
// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

// const person = {
//   id: "123",
//   age: 20,
//   name: "ali",
// };
// const { id, ...user } = person;
// console.log(id);
// console.log(name);
// // ------------------------------------------------
// // Spread operator

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// ]const temparray = [...array];

// rest operator

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [a, b, c, ...rest] = array;
console.log("a", a); // 1
console.log("b", b); // 2
console.log("c", c); // 3
console.log("rest", rest); // [4, 5, 6, 7, 8]

const person = {
  id: "123",
  age: 20,
  name: "ali",
};
const { id, name, ...user } = person;
console.log(id); // "123"

console.log(name); // "ali"
console.log(user); // { age: 20 }
