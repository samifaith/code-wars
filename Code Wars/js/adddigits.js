//  LEET CODE: https://leetcode.com/problems/add-digits/
//  ADD DIGITS
//  Given a non-negative integer num,
//  repeatedly add all its digits until the result has only one digit.
// * @param {number} num i.e. 38
// * @return {number}
// */


// test case:
let num = 38

let addDigits = function (num) {
  let makeString = num.toString();
  if( makeString.length === 1 ){
    return num;
  }
  let result = 0;
  for( let i=0; i<makeString.length; i++ ) {
    result += parseInt( makeString[i] );
  }
  return addDigits( result );
};
