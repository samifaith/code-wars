// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
// Filling an array (part 1)
// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]

function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}

// Test Cases:
describe('#arr creates a new array with the numbers 0 to N-1',_=>{
  it('should return an array',_=>Test.expect(arr() instanceof Array));
  it('should return a blank array when called with no argument',_=>Test.assertSimilar(arr(), []));
  it('should return 0 to 9 when called with 10',_=>Test.assertSimilar(arr(10), [0,1,2,3,4,5,6,7,8,9]));
  it('should return 0 to N-1 where N is a random number',_=>{
    const _arr = N => [...(function*(){let i=0;while(i<N)yield i++})()]
    let N = Math.round((Math.random() * 10)) + 5;
    Test.assertSimilar(arr(N), _arr(N));
  });
});
