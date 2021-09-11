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

//add or remove from an array

const products = [
  { name: "laptop", price: 31990, brand: "HP", color: "black" },
  { name: "phone", price: 12000, brand: "Realme", color: "Green" },
  { name: "watch", price: 6000, brand: "casio", color: "pink" },
  { name: "sunglass", price: 990, brand: "Ray-bon", color: "black" },
  { name: "camera", price: 37990, brand: "canon", color: "sliver" },
  { name: "Tv", price: 50000, brand: "LG", color: "black" },
  { name: "fan", price: 3190, brand: "walton", color: "white" },
  { name: "laptop", price: 310990, brand: "apple", color: "black" },
];

const newProduct = { name: "webcam", price: 499, brand: "Red" };

// copy products array and then add newProduct

const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter((p) => p.name !== "laptop");
console.log(remaining);
