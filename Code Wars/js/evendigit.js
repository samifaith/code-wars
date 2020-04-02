// LEET CODE: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Given an array nums of integers, return how many of them contain an even number of digits.


/**
 * @param {number[]} nums
 * @return {number}
 */
let findNumbers = function(nums) {
    let count = 0
 for(let i = 0; i < nums.length; i++){
     if (nums[i].toString().length % 2 === 0){
        count++
     }
    }
    return count
};
