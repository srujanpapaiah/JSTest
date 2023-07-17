const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 21 },
];

const property = "age";

const firstVal = [];
const secondVal = [];

function groupBy(students, property) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].age === 20) {
      firstVal.push(students[i]);
    } else {
      if (students[i].age === 21) {
        secondVal.push(students[i]);
      }
    }
  }
  return { firstVal, secondVal };
}

console.log(groupBy(students, property));
