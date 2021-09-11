//array destructuring

const numbers = [12, 93];
const x = numbers[0];
const y = numbers[1];
// console.log(x);
// console.log(y);
// const [x, y] = [12, 93];
// const [x, y] = numbers;

function box(num1, num2) {
  const numbers = [num1, num2];
  return numbers;
}

// console.log(box(40, 99));

const student = {
  name: "Shakib",
  age: 54,
  movies: ["inception", "happiness", "gravity", "accountant"],
};

const [firstMovie, secondMovie, ThirdMovie, forthMovie] = student.movies;
