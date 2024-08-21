// callback function
// const slam = () => {
//   console.log("hello Pakistan");
// };
// const slamws = () => {
//   console.log("hello Atif");
// };
// const mySlaam = (callback1, callback2) => {
//   console.log("You are great");
//   callback1();
//   callback2();
// };
// mySlaam(slamws, slam);
// ---------------------------------------------------------
// this function
const myName = {
  Name: "Atif",
  printName() {
    console.log("My name is " + this.Name); //this function is used ,when we use the vales of object in his the same function body.
  },
};

myName.printName();
