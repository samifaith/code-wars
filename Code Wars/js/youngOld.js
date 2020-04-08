// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
// Find the Difference in Age between Oldest and Youngest Family Members
// Description:
// At the annual family gathering, the family likes to find the oldest living
// family member’s age and the youngest family member’s age and calculate the
// difference between them.
// You will be given an array of all the family members' ages, in any order.
// The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed
// ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between
// the youngest and oldest age].

// P: [Ages]
// R: Min Age, Max Age, Difference of the Ages in a newArr
// E: [2,18,33,4,99,12] -> [2,99,97]
// P: maxAge = Math.max.apply(arr)
// -  minAge = Math.min.apply(arr)
// -  diffAge = maxAge - minAge
// -  newArr = [minAge, maxAge, diffAge]

let ages = [12,2,16,99,4]
function diffInAges(ages){
  let maxAge = Math.max(...ages);
  let minAge = Math.min(...ages);
  let ageDiff = maxAge - minAge;
  let newArr = [minAge, maxAge, ageDiff];
   console.log(newArr)
}

diffInAges(ages)

// ******* Original code war below - practice with prep above **********

// function differenceInAges(ages){
//  let maxAge = Math.max.apply(null, ages)
//  let minAge = Math.min.apply(null, ages)
//  let diff = maxAge - minAge
//  let newArr = [minAge, maxAge, diff]
//
//  return newArr
// }
// 
// Test.assertSimilar(differenceInAges([16, 22, 31, 44, 3, 38, 27, 41, 88]), [3, 88, 85]);
// Test.assertSimilar(differenceInAges([5, 8, 72, 98, 41, 16, 55]), [5, 98, 93]);
// Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
// Test.assertSimilar(differenceInAges([62, 0, 3, 77, 88, 102, 26, 44, 55]), [0, 102, 102]);
// Test.assertSimilar(differenceInAges([2, 44, 34, 67, 88, 76, 31, 67]), [2, 88, 86]);
// Test.assertSimilar(differenceInAges([46, 86, 33, 29, 87, 47, 28, 12, 1, 4, 78, 92]), [1, 92, 91]);
// Test.assertSimilar(differenceInAges([66, 73, 88, 24, 36, 65, 5]), [5, 88  , 83]);
// Test.assertSimilar(differenceInAges([12, 76, 49, 37, 29, 17, 3, 65, 84, 38]), [3, 84, 81]);
// Test.assertSimilar(differenceInAges([0, 110]), [0, 110, 110]);
// Test.assertSimilar(differenceInAges([33, 33, 33]), [33, 33, 0]);
