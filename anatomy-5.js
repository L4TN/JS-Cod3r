//JS is much flexible than other languages, like with parameters:

function logParams(a, b, c) {
    console.log(a, b, c);
}

logParams(1, 2, 3, 4, 5); //If have more, he will use what need
logParams(1, 2, 3);
logParams(1, 2); //If have less, he will use what need, and set undefined for the rest

//default parameters
function logParams2(a = 1 , b = 2 , c = 3) {
    console.log(a, b, c);
}

//quantitie independent parameters example
console.log(1, 2, 3);
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logNumbes(nums){ //assuming that nums is a array
  for(let i in nums){
    console.log(nums[i]);
  }
}

logNumbes(nums);
