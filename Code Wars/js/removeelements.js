//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
// Removing Elements
// Take an array and remove every second element out of that array.
// Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  var newArr=[];
  for (var i = 0; i < arr.length; i+=2){
    newArr.push(arr[i]);
  }
  return newArr;
}

// Test Cases:
Test.describe("Basic tests",_=>{
Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
})

Test.describe("Random tests",_=>{
const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
const sol=arr=>arr.filter((a,i)=>!(i%2));
var base="abcdefghijklmnopqrstuvwxyz0123456789";

for (var i=0;i<40;i++){
  var arr=Array.from({length:randint(1,36)},a=>base[randint(0,base.length-1)])
  Test.it(`Testing for [${arr}]`,_=>{
  Test.assertSimilar(removeEveryOther([].concat(arr)), sol(arr),"It should work for random inputs too");
  })
}
})
