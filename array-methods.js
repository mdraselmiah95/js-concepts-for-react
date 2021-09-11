const products = [
  { name: "laptop", price: 31990, brand: "HP", color: "black" },
  { name: "phone", price: 12000, brand: "Realme", color: "Green" },
  { name: "watch", price: 6000, brand: "casio", color: "pink" },
  { name: "sunglass", price: 990, brand: "Ray-bon", color: "black" },
  { name: "camera", price: 37990, brand: "canon", color: "sliver" },
  { name: "Tv", price: 50000, brand: "LG", color: "black" },
  { name: "fan", price: 3190, brand: "walton", color: "white" },
];

const brands = products.map((product) => product.brand);
console.log(brands);
