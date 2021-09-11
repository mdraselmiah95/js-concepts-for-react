//JSON
const student = {
  name: "Shakib",
  age: 54,
  movies: ["not now", "how are you", "king khan"],
};

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//fetch

// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

//keys ,values

const keys = Object.keys(student);
const values = Object.values(student);

//for Each

const numbers = [23, 65, 88, 12, 99, 12, 5];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

//for of on array like object
//loop on an object using for in
