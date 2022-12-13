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
let secret = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let high = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No input";
  } else if (guess === secret) {
    document.querySelector(".message").textContent = "Correct Answer!!!";
    document.querySelector("body").style.backgroundColor = "#4BB543";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secret;
    if (high < score) {
      high = score;
      document.querySelector(".highscore").textContent = high;
    }
    funcHigh();
  } else if (guess < secret) {
    document.querySelector(".message").textContent = "Too low";
    score--;
    funcHigh();
    limit();
  } else if (guess > secret) {
    document.querySelector(".message").textContent = "Too high";
    score--;
    funcHigh();
    limit();
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secret = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});

let funcHigh = function () {
  document.querySelector(".score").textContent = score;
};
let limit = function () {
  if (score <= 0) {
    document.querySelector(".message").textContent = "Game Over Loser!!!!";
  }
};
