// https://www.codewars.com/kata/5704aea738428f4d30000914
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping them next to each other.
// Do this for every letter, see example below!
// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
// Note: You can expect all of the inputs to be the same length.


function tripleTrouble(one, two, three) {
  var answer = "";
  for (let i = 0; i < one.length; i++) {
    answer = answer + one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return answer;
}


// Test Cases:
Test.describe("Hard Coded Tests", function(){
Test.assertEquals(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
Test.assertEquals(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
Test.assertEquals(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
Test.assertEquals(tripleTrouble("Sea","urn","pms"), "Supermans");
Test.assertEquals(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
});

Test.describe("Random Tests", function(){
  for(var i = 0; i < 100; i ++){
  var random = Math.floor(Math.random() * 100);
  var one = makeId(random);
  var two = makeId(random);
  var three = makeId(random);
  Test.assertEquals(tripleTrouble(one, two, three), tripleTroubleTestMaker(one, two, three));
  }
});
