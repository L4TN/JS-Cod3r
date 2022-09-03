const increment = function(n) {
    return n + 1;
}
console.log(increment(5));

//Arrow sempre é uma função anônima
const increment2 = (n) => {
    return n + 1;
}
console.log(increment2(7))

//quando tem apenas um parâmetro, pode omitir os parênteses
const increment3 = n => {
    return n + 1;
}
console.log(increment3(234))

//podemos simpllificar a função increment3 quando tem apenas um parâmetro
const increment4 = n => n + 1;
console.log(increment4(390))
