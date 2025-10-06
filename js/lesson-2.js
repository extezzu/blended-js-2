console.group("Task 1");

const styles = ["jazz", "blues"];
styles.push("rock-n-roll");
styles[styles.indexOf("blues")] = "classic";


function logItems(array) {
    for (let i = 0; i < array.length; i++) {
console.log(`${i + 1} - ${array[i]}`);
}
}
console.groupEnd();


console.group("Task 2");

function checkLogin() {
  const logins = ["Peter", "John", "Igor", "Sasha"];
  const name = prompt("Enter your name:");

  if (logins.includes(name)) {
    alert(`Welcome, ${name}`);
  } else {
    alert("User not found");
  }
}
console.groupEnd();

console.group("Task 3");

function caclculateAverage(...args) {
  let total = 0;
  let count = 0;

  for (const arg of args) {
    if (typeof arg === "number") {
      total += arg;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  } else {
    return total / count;
  }
}
console.groupEnd();

console.group("Task 4");

function sumOfNumbers(array) {
    let newArr = [];

    for (let i = 0; i < array.length - 1; i++) {
        let result = array[i] + array[i+1];
        newArr.push(result);
    }
    return newArr;
}
console.groupEnd();

console.group("Task 5");

function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return "Sorry, it is not an array!";
    }
    
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

console.groupEnd();

console.group("Task 6");

function findLongestWord(string) {
const words = string.split(" ");
let longest = words[0];

for (const str of words) {
if (str.length > longest.length) {
longest = str;
}
}
return longest;
}
console.log(findLongestWord("London is the capital of Great Britain"));
console.groupEnd();

console.group("Task 7");

let user = {};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
console.groupEnd();

console.group("Task 8");
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

let sum = 0;
const values = Object.values(salaries);

for (const salary of values) {
  sum += salary;
}
console.log(sum);
console.groupEnd();

console.group("Task 9");

const calculator = {

  read(a, b) {
    this.a = a;
    this.b = b;
  },

  exist() {
    return this.a !== undefined && this.b !== undefined;
  },

  sum() {
    if (!this.exist()) {
      return 'No such properties';
    }
    return this.a + this.b;
  },

  mult() {
    if (!this.exist()) {
      return 'No such properties';
    }
    return this.a * this.b;
  },
};

calculator.read(25, 150);
console.log(calculator.sum());  
console.groupEnd();

console.group("Task 10");

function calcTotalPrice(fruits, fruitName) {

   function calcTotalPrice(fruits, fruitName) { 
let totalPrice = 0; 

for (const fruit of fruits) {
if (fruit.name === fruitName) {
totalPrice += fruit.price * fruit.quantity;
}
}
return totalPrice;
}

console.groupEnd();