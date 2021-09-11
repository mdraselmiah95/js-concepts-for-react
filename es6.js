const numbers = [12, 55, 787, 89, 09, 23];
const student = {
  name: "Shakib",
  age: 54,
  movies: ["not now", "how are you", "king khan"],
};

//1.template string
const about = `
My name is ${student.name} age of ${student.age} has number ${numbers[3]} also liked movies ${student.movies[2]}
`;

//2. arrow function

const getSixtyTwo = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (num1, num2, num3) => num1 + num2 + num3;
const doMath = (x, y) => {
  const sum = x + y;
  return sum;
};
