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
