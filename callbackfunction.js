const slam = () => {
  console.log("hello Pakistan");
};
const slamws = () => {
  console.log("hello Atif");
};
const mySlaam = (callback1, callback2) => {
  console.log("You are great");
  callback1();
  callback2();
};
mySlaam(slamws, slam);
