// https://www.codewars.com/kata/570a6a46455d08ff8d001002/solutions/javascript/me/best_practice
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


function noBoringZeros(n) {
  while(n != 0 && n % 10 === 0){
    n /= 10;
  } return n;
}


// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
// P: Enter in a number and reduce all zeros at the end of the number
// R: Return the number without zeros at the end
// E: 100100 -> 1001
// P: run function(num)
// -  while the num != 0 && num is % 10
// -  num/10
// - return num
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


function returnZeroZeros (num){
  while (num != 0 && num % 10 === 0){
    num /= 10
  }
  console.log(num)
}
