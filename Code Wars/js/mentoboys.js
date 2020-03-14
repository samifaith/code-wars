// https://www.codewars.com/kata/5af15a37de4c7f223e00012d/solutions/javascript/me/best_practice
// Scenario
// Now that the competition gets tough it will Sort out the men from the boys .
// Men are the Even numbers and Boys are the odd !alt !alt
// Task
// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt !alt

function menFromBoys(arr){
  let evenArray = []
  let combinedArray =[]
  let evenSort = []
  let oddSort = []
  let oddArray = []

  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      evenArray.push(arr[i])
  }
    else{
      oddArray.push(arr[i])
    }
  }
  evenSort = evenArray.sort( (a, b) => a - b );
  oddSort = oddArray.sort((a, b) => b - a);
  return combinedArray = [...new Set(evenSort.concat(oddSort))];
}

//TEST CASE PROVIDED BY CODEWARS BELOW
Test Cases:
describe("Basic tests",_=>{
  Test.assertSimilar(menFromBoys([7,3,14,17]), [14,17,7,3]);
  Test.assertSimilar(menFromBoys([2,43,95,90,37]), [2,90,95,43,37]);
  Test.assertSimilar(menFromBoys([20,33,50,34,43,46]), [20,34,46,50,43,33]);
  Test.assertSimilar(menFromBoys([82,91,72,76,76,100,85]), [72,76,82,100,91,85]);
  Test.assertSimilar(menFromBoys([2,15,17,15,2,10,10,17,1,1]), [2,10,17,15,1]);
  Test.assertSimilar(menFromBoys([-32,-39,-35,-41]), [-32,-35,-39,-41]);
  Test.assertSimilar(menFromBoys([-64,-71,-63,-66,-65]), [-66,-64,-63,-65,-71]);
  Test.assertSimilar(menFromBoys([-94,-99,-100,-99,-96,-99]), [-100,-96,-94,-99]);
  Test.assertSimilar(menFromBoys([-53,-26,-53,-27,-49,-51,-14]), [-26,-14,-27,-49,-51,-53]);
  Test.assertSimilar(menFromBoys([-17,-45,-15,-33,-85,-56,-86,-30]), [-86,-56,-30,-15,-17,-33,-45,-85]);
  Test.assertSimilar(menFromBoys([12,89,-38,-78]), [-78,-38,12,89]);
  Test.assertSimilar(menFromBoys([2,-43,95,-90,37]), [-90,2,95,37,-43]);
  Test.assertSimilar(menFromBoys([82,-61,-87,-12,21,1]), [-12,82,21,1,-61,-87]);
  Test.assertSimilar(menFromBoys([63,-57,76,-85,88,2,-28]), [-28,2,76,88,63,-57,-85]);
  Test.assertSimilar(menFromBoys([49,818,-282,900,928,281,-282,-1]), [-282,818,900,928,281,49,-1]);
});

describe("Random tests",_=>{
const randint=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const sol=arr=>Array.from(new Set(arr)).sort((a,b)=>Math.abs(a % 2) != Math.abs(b % 2) ? Math.abs(a % 2) - Math.abs(b%2) : (a % 2 ? b - a : a - b));

for (let i=0;i<40;i++){
  const arr=Array.from({length:randint(4,40)},_=>randint(-Math.pow(10,randint(1,3)),Math.pow(10,randint(1,3))));
  it(`Testing [${arr.join(", ")}]`,_=>{
  Test.assertSimilar(menFromBoys([].concat(arr)),sol(arr),"It should work for random inputs too");
  })
}
});
