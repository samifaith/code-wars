//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
//Get the number n (n>0) to return the reversed sequence from n to 1.
//Example : n=5 >> [5,4,3,2,1]
//Worked w/ Aiperi & Sebastian

const reverseSeq = n => {
  let arr = [];
  for (i = n; i >= 1; i --){
  arr.push(i);
  }
   return arr;
};

//Below is the sample test
const { assert } = require("chai");

describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});
