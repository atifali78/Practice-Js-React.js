// let promise = new Promise((resolve, reject) => {
//   try {
//     let a = 1;
//     let b = 3;
//     let c = a + b;

//     if (c === 3) {
//       // Corrected comparison operator
//       resolve("Your promise is fulfilled");
//     } else {
//       reject("Condition not met");
//     }
//   } catch (error) {
//     reject(error); // Correctly rejecting the error
//   }
// });


// promise
//   .then((message) => console.log(message))
//   .catch((error) => console.log("Error:", error));
// ------------------------------------------------------------------------------

constPromise =newPromise((resolve, reject)=>{  
let condition;  
  
if(condition is met){  
resolve('Promise is resolved successfully.');  
}else{  
reject('Promise is rejected');  
}  
});  