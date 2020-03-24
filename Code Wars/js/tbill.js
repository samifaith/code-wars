// https://www.codewars.com/kata/5a2f99948882f342f3000068
// Description:
// In Treasury Bills, you borrow the Federal Government money for a duration of time (within 365 days) at an interest rate. However, there is a way the capital is deducted from your account.
// Say you have 1,000 Naira in your account and want to invest the 1,000 Naira for 90 days at 13.5% interest. Only 966.71 Naira [i.e. 1000 - (1000*(13.5/100)*(90/365))] will be deducted from your account and 1,000 Naira paid back after 90 days.
// But you don't want that, you actually want the whole 1,000 Naira taken from your account and not just 966.71 Naira so you have to calculate the capital to invest. In this case, you should have invested 1,034.43 Naira at 13.5% for 90 days so 1,000 Naira is deducted and 1,034.43 paid back after 90 days.
// You will be given amountInAccount, duration, and rate, return the maximum capital (to 2 decimal places) to clear out my account.
// **amountInAccount** - will always be between 1,000 and 10,000,000 Naira
// **duration** - will always be between 30 and 365 days.
// **rate** - will always be between 1.00 and 100.00%


const tBills=(amountInAccount, duration, rate)=>{
  let answer = amountInAccount/(1 - (rate * duration)/36500);
  return answer.toFixed(2)
}


// Test Cases:
//Checking to see if result is between the +/- 0.01 error range
const check=(r,e)=>(r>=e-0.01&&r<=e+0.01)?true:false;
describe('Simple Test', function() {
  it('simple', function() {
    Test.expect(check(tBills(1000,90,13.5), 1034.43), "Expected " + 1034.43 + " got " + tBills(1000,90,13.5));
    Test.assertEquals(+tBills(0,90,13.5), 0);
    Test.expect(check(tBills(10000,80,20), 10458.45), "Expected " + 10458.45 + " got " + tBills(1000,90,13.5));
  });
});

describe('Random Test', function() {
  it('random', function() {
    for(let i=0;i<200;i++){
      let aina=((Math.random()*(10000000-1000))+1000).toFixed(2);
      let rate=((Math.random()*(100))+1).toFixed(2);
      let duration=Math.floor(((Math.random()*(365-30))+30));
      let r=tBills(aina,duration,rate);
      let e=((aina*100*365)/((100*365)-(rate*duration))).toFixed(2)*1;
      Test.expect(check(r,e), "Expected " + e + " got " + r);
    }
  });
});
