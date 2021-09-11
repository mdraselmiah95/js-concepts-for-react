// 1. How to declare a variable using let and const

const fatherName = "abc";
let season = "rainy";
season = "winter";

// six basic condition >,< ,===,!==,<=,>=
//multiple condition : &&, ||

if (fatherName === "abc" || season === "rainy") {
} else if (fatherName === "roni") {
} else {
}

// array declare
//index
//length ,push

const numbers = [12, 55, 787, 89, 09, 23];
numbers[0] = 54;

//4. loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//5. function

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(23, 9);

//6. object

const student = {
  name: "Shakib",
  age: 54,
  movies: ["not now", "how are you", "king khan"],
};

const myVariable = "age";

console.log(student.age); //direct by property
console.log(student["age"]); //access via property name string
console.log(student[myVariable]); //access via property name in a variable
