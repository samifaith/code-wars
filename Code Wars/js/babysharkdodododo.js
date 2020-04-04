// https://www.codewars.com/kata/57e921d8b36340f1fd000059/javascript
// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
// You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres, sharkSpeed = how fast it can move in metres/second, pontoonDistance = how far you need to swim to safety in metres, youSpeed = how fast you can swim in metres/second, dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
// If you make it, return "Alive!", if not, return "Shark Bait!".

// PREP BELOW

// P: 5 variables -
//  - sharkDistance: in meters
//  - sharkSpeed: meters/second
//  - pontoonDistance: the location where I need to swim
//  - youSpeed: how fast I can actually swim
//  - dolphin: a boolean - if true - cut the shark's speed in half

// R: Am I Alive or SharkBate

// E: Two situations:
//  - with dolphin? half sharkSpeed. can I survive? If yes - return alive, if not - return shark Bait
//  - do the same as above without dolphin & halving shark speed

// P:
//  - create a function that takes in 5 variables
//  - sharkDistance, sharkSpeed, pontoonDistance, youSpeed, dolphin
//  - if (dolphin)
//  - create a variable for the dolphin attack where you half the sharkSpeed: let dolphinAttack = sharkSpeed/2
//  - then if my swim speed < than the shark's speed
//  - return whether I am alive or dead
//  Note about ( ? : ) -
//  The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin){
    let dolphinAttack = sharkSpeed/2
    return pontoonDistance/youSpeed < sharkDistance/dolphinAttack ? "Alive!" : "Shark Bait!"
  }else{
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!"
  }
}




// FROM MEMORY #1
function sharkAttack(sharkDistance, sharkSpeed, pontoonDistance, youSpeed, dolphin){
  let dolphinAttack = sharkSpeed / 2;
  if (dolphin){
    return pontoonDistance/youSpeed < sharkDistance/dolphinAttack ? "Alive!" : "I'm shark bait"
  } else {
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "I'm shark bait"
  }
}
//
//
//
//
//
//
//
