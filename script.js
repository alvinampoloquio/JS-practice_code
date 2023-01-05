// const ave = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const ave1 = ave(100, 100, 100);
// const ave2 = ave(100, 100, 100);

// const win = (t1, t2) => {
//   if (t1 / 2 >= t2) {
//     console.log(`team 2 wins with ${t1} vs ${t2}`);
//   } else if (t2 / 2 >= t1) {
//     console.log(`team 1 wins with ${t1} vs ${t2}`);
//   } else console.log("No team  wins");
// };
// win(100, 50);

// var plusOne = function (digits) {
//   let current = "";
//   for (let a = 0; a < digits.length; a++) {
//     current = current + String(digits[a]);
//   }
//   let valuetonumber = current.toNumber();
//   valuetonumber = valuetonumber + 1;
//   let valuetoarray = String(valuetonumber).split("");

//   return valuetoarray;
// };

// var plusOne = function (digits) {
//   let arrayvalue = [];
//   for (let a = 0; a < digits.length; a++) {
//     let current = digits[a];

//     if (a === digits.length - 1) {
//       current = current + 1;
//     }
//     if (a === digits.length - 1 && digits[a] === 9) {
//       arrayvalue.push(1);
//       arrayvalue.push(0);
//     } else arrayvalue.push(current);
//   }
//   return arrayvalue;
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LEET CODE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//code
// var twoSum = function (nums, target) {
//   let pos = [];
//   let current = 0;
//   let currentpos = 0;
//   for (let a = 0; a < nums.length; a++) {
//     current = nums[a];
//     currentpos = a;
//     for (let b = 0; b < nums.length; b++) {
//       if (current + nums[b] === target) {
//         if (currentpos != b) {
//           pos.push(b);
//           pos.push(currentpos);
//         }
//       }
//     }
//   }
//   console.log(pos);
//   let pos1 = pos[pos.length - 2];
//   let pos2 = pos[pos.length - 1];
//   pos = [];
//   pos.push(pos1);
//   pos.push(pos2);

//   return pos;
// };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LEET CODE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// CODE

// var isPalindrome = function (x) {
//   let rev = "";
//   let split = String(x).split("");
//   for (let a = split.length - 1; a >= 0; a--) {
//     rev = rev + String(split[a]);
//   }

//   if (x === Number(rev)) {
//     return true;
//   } else return false;
// };

// var minimumTotal = function (triangle) {
//   let total = 0;
//   let min = 0;
//   let c;
//   for (let a = 0; a < triangle.length; a++) {
//     for (let b = 0; b < triangle[a].length; b++) {
//       c = triangle[a];
//     }
//     min = Math.min.apply(Math, c);
//     total = total + min;
//   }
//   return total;
// };
/////////////////////////////////////////////////////////////////////////////////////////////////
// var plusOne = function (digits) {
//   let current = "";
//   for (let a = 0; a < digits.length; a++) {
//     current = current + String(digits[a]);
//   }
//   let valuetonumber = Number(current);
//   valuetonumber = valuetonumber + 1;
//   let valuetoarray = String(valuetonumber).split("");

//   return valuetoarray;
// };
///////////////////////////////////////////////////////////////////////////
///Coding challenge 2 Arrays
//////////////////////////////////////////////////////////////////////////////
// let total = [];
// let calcttip = function (bill) {
//   let tip = 0;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//     total.push(bill + tip);
//   } else {
//     tip = bill * 0.2;
//     total.push(bill + tip);
//   }
//   return tip;
// };

// let tips = [calcttip(125), calcttip(55), calcttip(44)];
// console.log(tips, total);
/////////////////////////////////////////////////
/////////////OBJECT EXERCISE  .this, store fubction in object

// let alvin = {
//   name: "alvin",
//   license: false,
//   age: 12,
//   job: "hacker",
//   summary: function () {
//     return `${this.name} is a ${this.age} years old ${this.job}. and ${
//       this.license ? "can" : "cannot"
//     } drive`;
//   },
// };

// console.log(alvin.summary());

/////////////////////////////////////
// CODING CHALENGE BMI CALCULATOR , object , method
// let bmi = function (heigth, weigth) {
//   return weigth / (heigth * heigth);
// };

// let jp = {
//   weight: 78,
//   heigth: 1.69,
//   fullname: "jp ebsolo",
//   bmi: function () {
//     return bmi(this.heigth, this.weight);
//   },
// };
// let canoy = {
//   weight: 92,
//   heigth: 1.95,
//   fullname: "javier ebsolo",
//   bmi: function () {
//     return bmi(this.heigth, this.weight);
//   },
// };

// console.log(
//   `${jp.fullname} BMI: (${jp.bmi().toFixed(2)}) is ${
//     jp.bmi() > canoy.bmi() ? "higher" : "lower"
//   } than ${canoy.fullname} BMI: (${canoy.bmi().toFixed(2)}) !`
// );
////////////////////////////////////
//coding cahllenge 4 , funtion, loop , arrays, conditions
////////////////////////////////
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 10];
// let tips = [];
// let total = [];

// let calcttip = function (bill) {
//   let tip = 0;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//     total.push(bill + tip);
//   } else {
//     tip = bill * 0.2;
//     total.push(bill + tip);
//   }
//   return tip;
// };

// for (let a = 0; a < bills.length; a++) {
//   tips.push(calcttip(bills[a]));
// }
// let ave = function (total) {
//   let ave = 0;
//   for (a = 0; a < bills.length; a++) {
//     ave = ave + total[a];
//   }
//   return ave;
// };

// console.log(tips, total, ave(total));

///////////////////////////////////////////////////
///Coding challenge #1
////////////////////////////////////////
// let secret = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// let high = 0;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   if (!guess) {
//     document.querySelector(".message").textContent = "No input";
//   } else if (guess === secret) {
//     document.querySelector(".message").textContent = "Correct Answer!!!";
//     document.querySelector("body").style.backgroundColor = "#4BB543";
//     document.querySelector(".number").style.width = "30rem";
//     document.querySelector(".number").textContent = secret;
//     if (high < score) {
//       high = score;
//       document.querySelector(".highscore").textContent = high;
//     }
//     funcHigh();
//   } else if (guess < secret) {
//     document.querySelector(".message").textContent = "Too low";
//     score--;
//     funcHigh();
//     limit();
//   } else if (guess > secret) {
//     document.querySelector(".message").textContent = "Too high";
//     score--;
//     funcHigh();
//     limit();
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   secret = Math.trunc(Math.random() * 20 + 1);

//   document.querySelector(".message").textContent = "Start Guessing...";
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "#000000";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".score").textContent = "20";
//   score = 20;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".number").style.width = "15rem";
// });

// let funcHigh = function () {
//   document.querySelector(".score").textContent = score;
// };
// let limit = function () {
//   if (score <= 0) {
//     document.querySelector(".message").textContent = "Game Over Loser!!!!";
//   }
// };

///////////////////////////////////////
///Coding Challenge 2
///////////////////////////////

// let jp = [3, 5, 2, 12, 7];
// let canoy = [4, 1, 15, 8, 3];

// const checkDogs = function (sub1, sub2) {
//   jpthedog = sub2.slice(1, -2);
//   sub1.concat(jpthedog).forEach(function (dog, i) {
//     const type = dog >= 3 ? "adult" : "puppy";
//     console.log(`Dog number ${i + 1} is a ${type}, and ${dog} years old.`);
//   });
// };

// checkDogs(canoy, jp);

///////////////////////////////////////////////////////////
//// Array , objects, foreach , insertAdjecentHTML
//////////////////////////////////////////////////////////

// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// const display = function (mov) {
//   containerMovements.innerHTML = "";
//   mov.forEach(function (mov, i) {
//     const type = mov > 0 ? "withdrawal" : "deposit";
//     const insert = `
//     <div class="movements">
//     <div class="movements__row">
//       <div class="movements__type movements__type--${type}">${i} ${type}</div>
//       <div class="movements__value">${mov}</div>
//     </div>
//     `;

//     containerMovements.insertAdjacentHTML("afterbegin", insert);
//   });
// };

// display(account1.movements);
// var searchInsert = function (nums, target) {
//   for (let a = 0; a < nums.length; a++) {
//     if (nums[a] >= target) {
//       nums.push(target);
//       return a;
//     }
//   }
// };

/////////////////////////////
//coding challenge 2
/////////////////////////////
//  Create a function calculateAvaragetoHumanAge that acepts ararys of dog ages and does the following....
//
//  1. Calculate the dog age into human years using the following formula
//      if dog is < 2yrs , human age  = 2 * dogAge. else human age = 16 + dogAge * 4
//  2. Exclude dogs that areless than 18 yrs old
//  3. Calculate the average of all the human age
//  4. run the function

// const calculateAveragetoHumanAge = function (data) {
//   const toHumanAge = data.map(function (dogAge) {
//     if (dogAge > 2) {
//       return dogAge + 16 * 4;
//     } else return dogAge * 2;
//   });

//   const adult = toHumanAge.filter(function (age) {
//     return age > 18;
//   });

//   const average =
//     adult.reduce(function (acc, i) {
//       return acc + i;
//     }, 0) / adult.length;

//   console.log(adult);
//   console.log(average);
// };
// find
// let jp = function (dog) {
//   dog.forEach(function (dog) {
//     if (dog.owner === "alvin") {
//       return console.log(
//         `Alvin's Dog is eating ${
//           jpDog.currentFood < jpDog.recommendFood ? "too little" : "too much"
//         }`
//       );
//     } else {
//       return "no owners name";
//     }
//   });
// };
// find algo
// let bayot = [];
// dogs.forEach(function (dogs) {
//   if (dogs.owner === "JP") {
//     return bayot.push(dogs);
//   }
// });

//map, filter
// let too = [];
// let eat = function (dog) {
//   dog.forEach(function (data) {
//     if (data.recommendFood > data.currentFood) {
//       too.push(data.owner);
//     }
//   });
// };

////CODING CHALLENGE NUMBER 4

/*
  Julia and Kate are still studying about dogs, 
  this time they are studying about 
  dogs if the dog is eating too much or little. 
  eating too much is eating larger portion of recomended food and little is opposite.


1. Loop over the array containing dog object, and for each dog,
 Calculate the recomended portion and add it to the 
object as a new property. Do not create a new array . formula: recomendfood = weight ** 0.75 * 28.

2. Find the JP's dog,  and log to the console wheter its eating too much or too little

3. Create an array containing all owners of dogs who is eating too much or too little. 

4. Create a shallow copy of dogs array and sort it by recomended dog portion in an assending order. 
*/

// let dogs = [
//   {
//     owner: "javier",
//     weight: 8,
//     currentFood: 200,
//   },
//   {
//     owner: "JP",
//     weight: 22,
//     currentFood: 250,
//   },
//   {
//     owner: "alvin",
//     weight: 13,
//     currentFood: 300,
//   },
//   {
//     owner: "john",
//     weight: 13,
//     currentFood: 210,
//   },
// ];

// let dogs2 = [
//   {
//     owner: "javier",
//     weight: 8,
//     currentFood: 200,
//   },
//   {
//     owner: "alvin",
//     weight: 13,
//     currentFood: 300,
//   },
//   {
//     owner: "john",
//     weight: 13,
//     currentFood: 210,
//   },
// ];

// setRecommendFood(dogs);
// setRecommendFood(dogs2);

///--1--
// dogs.forEach(function (dog) {
//   dog.recommendFood = Math.trunc(dog.weight ** 0.75 * 28);
// });

// function setRecommendFood(list) {
//   list.forEach(function (item) {
//     item.recommendFood = Math.trunc(item.weight ** 0.75 * 28);
//   });
// }

///--2--
// let jpDog = dogs.find(function (dog) {
//   if (dog.owner === "JP") {
//     return dog;
//   }
// });

// console.log(
//   `JP's Dog is eating ${
//     jpDog.currentFood < jpDog.recommendFood ? "too little" : "too much"
//   }`
// );
// /--3--

// let eatingTooMuch = dogs
//   .filter((dog) => dog.recommendFood < dog.currentFood)
//   .map((dog) => dog.owner);

// let eatingTooLittle = dogs
//   .filter((dog) => dog.recommendFood > dog.currentFood)
//   .map((dog) => dog.owner);
///---4---

// let dogSorted = dogs.slice().sort((a, b) => {
//   return a.recommendFood - b.recommendFood;
// });
// -


//////////////////////////////////////////////////////////
/////asynchrous javascript///////////////////
////////////////////////////////////////////

loadScript();

async function loadScript() {
  const ol = document.querySelector("ol");

  const comments = await getPosts(4);

  for (let i = 0; i <= comments.length - 1; i++) {
    generateListItem(comments[i].email, comments[i].body, comments[i].name);
  }

  function generateListItem(postTitle, postBody, author) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const code = document.createElement("code");
    const button = document.createElement("button");

    h3.innerHTML = postTitle;
    p.innerHTML = postBody;
    code.innerHTML = author;
    button.innerHTML = "Delete";

    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(code);
    li.appendChild(button);

    ol.appendChild(li);
  }
}

async function getPosts(number) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${number}`)
    .then((response) => response.json())
    .then((json) => json);
}
