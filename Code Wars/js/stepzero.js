// LEET CODE: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// 1342. Number of Steps to Reduce a Number to Zero
// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

/**
 * @param {number} num
 * @return {number}
 */
let numberOfSteps  = function(num) {
    let numOfSteps = 0;
    while ( num !== 0 ){
        if ( num % 2 === 0){
            num /= 2;
            numOfSteps++;
        }else{
            num--;
            numOfSteps++;
        }
    }
     return numOfSteps
};
//
//
//
//
//
//
//
//
//
// //
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//

//

// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// P: 1 parameter of a non-negative integer number
// R: Return the number of steps needed to get to 0
// E: while num > 0
//  store the numOfSteps in a variable
//  if (num % 2) then num / 2
// else num --
// return numOfSteps
// P:


function stepstoZero(num){
  
  let numOfSteps = 0;

  while( num > 0){
    if (num % 2 === 0) {
      num /= 2;
      numOfSteps++;
    } else{
      num--;
      numOfSteps++;
    }
  } return numOfSteps
}
