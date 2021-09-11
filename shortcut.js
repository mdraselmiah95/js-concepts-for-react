// 'asif', 5, true, {}, []  =truthy
// '', 0, false, null, undefined  =falsy

//check truthy
let myVar = 5;
//check any truthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

//you check negative or falsy anything

let myMoney = 100;
if (!myMoney) {
}

const money = 80;
let food;
if (money > 100) {
  food = "Batter";
} else {
  food = "banana";
}

let foodOne = money > 100 ? "Honey" : "nut";
console.log(foodOne);

let drink = money > 100 && myVar > 100 ? "coke" : "normal water";
console.log(drink);
