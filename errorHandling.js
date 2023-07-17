// We can use try/catch and throw new Error
// functions of javascript & expressto address the error
// handling.

function funOne() {
  try {
    // We can write any code here
  } catch (err) {
    console.log(err);
  }
}

// Second method in Express

app.get("/", (req, res) => {
  throw new Error("Error message");
});
