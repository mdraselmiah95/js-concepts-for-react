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

// object destructuring
const { name, age } = { name: "apple", age: 64 };
const { name, age } = { id: 12, name: "alu", salary: 3400, age: 14 };

const employee = {
  ide: "VS code",
  designation: "Developer",
  machine: "mac",
  language: ["html", "css", "js", "node"],
  specification: {
    hight: 68,
    weight: 72,
    address: "Dhaka",
    drink: "normal water",
    watch: {
      color: "black",
      price: 3500,
      brand: "Garmin",
    },
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch; //if specification is not exist then use ?= optional chancing
