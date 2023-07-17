console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 0);
});

promise1.then((result) => console.log(result));
promise2.then((result) => console.log(result));
promise3.then((result) => console.log(result));

console.log("End");


// First we receive the start, End and Timeout printed as the javacript starts 
// executing from the beginning. Console will be executed in the callstack
// and the first setTimeout will be pushed to Web API, then it will be pushed
// to callback queue after 0 milliseconds & then to callstack


// Now, all the promises which have setTimeout will be pushed to the same WebAPI 
// one by one but the time we gave varies for every object. They will get resolved
// only after the particular time that has been set in the setTimeout is finised.

// 1 -> Promise 3 resolved -> Because it has 0 milliseconds and after that it will
// be pushed to the callback queue from WebAPI and then to call stack


// 2 -> Promise 1 resolved because it has only 1 second and after that it repeats
// the same like prvious one.

// 3 -> Promise 2 is resolved at last because it is having 2 seconds in setTimeout

// The order is:

//   Start
//   End
//   Promise 3 resolved
//   Promise 1 resolved
//   Promise 2 resolved
