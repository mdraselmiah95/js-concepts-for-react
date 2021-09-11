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

const brands = products.map((product) => product.brand);
const price = products.map((x) => x.price);
// console.log(price);
// console.log(brands);

products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

products.forEach((product) => {});

//filter
const cheap = products.filter((product) => product.price <= 12000);
console.log(cheap);

const specificName = products.filter((product) => product.name.includes("la"));
console.log(specificName);
