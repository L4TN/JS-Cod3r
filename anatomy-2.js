//Anonymous function: Não tem nome, permite passá-la como se fosse um objeto qualquer
(function (a,b) {
    return a+b;
})

//Function expression: tem nome, mas não é uma função de primeira classe
var x = 1

const sum = function (a,b) {
    return a+b;
}
console.log(sum(1,2));

let anotherSum = sum
console.log(anotherSum(1,2))

x = sum 
console.log(x(11,16))
