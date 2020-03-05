// https://www.codewars.com/kata/55a5bfaa756cfede78000026/solutions/javascript/me/best_practice
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.

function problem(x){
 if( typeof x === "string" ){
 return "Error"
 }
 else{
 return (x*50) + 6;
 }
}

Test.describe("Basic tests",_=>{
  Test.assertEquals(problem("hello"), "Error");
  Test.assertEquals(problem(1), 56);
  Test.assertEquals(problem(5), 256);
  Test.assertEquals(problem(0), 6);
  Test.assertEquals(problem(1.2), 66);
  Test.assertEquals(problem(3), 156);
  Test.assertEquals(problem("RyanIsCool"), "Error");
  Test.assertEquals(problem(-3), -144);
  Test.assertEquals(problem(""), "Error");
  Test.assertEquals(problem(0.03), 7.5);
})
