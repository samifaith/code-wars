//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
//Complete the solution so that it reverses the string value passed into it.
// Worked with Aiperi & Thais

function solution(str){
  return str.split("").reverse().join("")
}

//Below is the sample test
Test.expect(solution('world') == 'dlrow')
