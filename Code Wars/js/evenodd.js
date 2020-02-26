// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.



function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

Test.assertEquals(even_or_odd(2),"Even",'even_or_odd(2)')
Test.assertEquals(even_or_odd(1),"Odd", 'even_or_odd(1)')
Test.assertEquals(even_or_odd(-4),"Even",'even_or_odd(-4)')
Test.assertEquals(even_or_odd(-3),"Odd", 'even_or_odd(-3)')
Test.assertEquals(even_or_odd(0), "Even")

Test.assertEquals(even_or_odd(1545452), "Even")
Test.assertEquals(even_or_odd(7) , "Odd")
Test.assertEquals(even_or_odd(78), "Even")
Test.assertEquals(even_or_odd(17), "Odd")
Test.assertEquals(even_or_odd(74156741), "Odd")
Test.assertEquals(even_or_odd(100000), "Even")

var ernd = function(){ return (25+ ~~(Math.random()*25)) * 2 }
var ornd = function(){ return ernd()+1 }

console.log("Test some random values")
for( var r=0, x; r< 6; r++ ){
  if( Math.random()>.5 ){
    x = ernd();
    Test.assertEquals(even_or_odd(x),"Even", "even_or_odd("+x+")")
  }else{
    x = ornd();
    Test.assertEquals(even_or_odd(x),"Odd",  "even_or_odd("+x+")")
  }
}
