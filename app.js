// looping over an array in js
let heroes = ["ironman", "spiderman", "batman", "aquaman"];

// using for loop
for (let index = 0; index < heroes.length; index++) {
  const element = heroes[index];
  console.log(element);
}

// using map
heroes.map((hero) => {
  console.log(hero);
});

// #question 1
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let n = marks.length;
for (const mark of marks) {
  sum = sum + mark;
}

const avg = sum / n;
console.log(`average marks is ${avg}`);


// question 2
let org_prices = [250, 645, 300, 900, 50];
let disc_prices = [];
for (const org_price of org_prices) {
  let discounted_price = org_price - org_price * 0.1;
  disc_prices.push(discounted_price)
}

console.log(disc_prices);

// heroes.pop()
console.log(heroes.toString());
console.log(marks.concat(heroes));

//to add in first use unshift
heroes.unshift('Rushan')
console.log(heroes);
console.log(heroes.shift()); //returns a deleted value