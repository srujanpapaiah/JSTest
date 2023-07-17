// Call back hell is nothing but calling one function from another function and
// that chain continues until all the function have been called .

function firstFun() {
  console.log("Second Fun");
  function secondFun() {
    console.log("Second Fun");
    function thirdFun() {
      console.log("Third Fun");
      function fourthFun() {
        console.log("Fourth Fun");
        function fifthFun() {
          console.log("Fifth Fun");
        }
      }
    }
  }
}

firstFun();

// We can over come this by using the promises method. So if one promise is
// resolved then only it will be moved to the next one.

const Prom1 = new Promise((resolve, reject) => {
  resolve("successs");
});

const Prom2 = new Promise((resolve, reject) => {
  resolve("successs");
});

const Prom3 = new Promise((resolve, reject) => {
  resolve("successs");
});

const Prom4 = new Promise((resolve, reject) => {
  resolve("successs");
});

const Prom5 = new Promise((resolve, reject) => {
  resolve("successs");
});

Prom1.then((data) => {
  return Prom2;
})
  .then((data) => {
    return Prom3;
  })
  .then((data) => {
    return Prom4;
  })
  .then((data) => {
    return Prom5;
  });
