//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need.
//Worked with Aiperi & Eric

function paperwork(n, m) {
  if (n<0 || m<0){
    return 0;
  }else{
    return (n *= m)
  }
}
paperwork(5, 5)

//Below is the sample test
Test.assertEquals(paperwork(5,5), 25, 'Failed at paperwork(5, 5)');
