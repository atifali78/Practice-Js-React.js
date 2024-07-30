// // Function to get the current time formatted as HH:MM:SS
// function getCurrentTime() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, "0");
//   const minutes = String(now.getMinutes()).padStart(2, "0");
//   const seconds = String(now.getSeconds()).padStart(2, "0");
//   return `${hours}:${minutes}:${seconds}`;
// }

// // Function to update the time after a delay
// function updateTime() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(getCurrentTime());
//       resolve();
//     }, 1000);
//   });
// }

// // Function to run the clock continuously
// function runClock() {
//   updateTime().then(runClock);
// }

// // Initialize the watch
// console.log(getCurrentTime());
// runClock();
// -------------------------
// Function to get the current time formatted as HH:MM:SS
function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours());
  const minutes = String(now.getMinutes());
  const seconds = String(now.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

// Function to simulate waiting for a specified time (in milliseconds)
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to update the time and store it in the array
async function runClock(times) {
  while (true) {
    const currentTime = getCurrentTime();
    console.log(currentTime);
    times.push(currentTime);
    await wait(1000); // Wait for 1 second
  }
  
}

// Initialize the array to store time updates
const times = [];
runClock(times);
