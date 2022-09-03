//Anonymous function: Não tem nome, permite passá-la como se fosse um objeto qualquer
//IIFE: Immediately Invoked Function Expression: servem paa criar variáveis e passar valores de escopo local
(function (a, b) {
    let x = 3;
    console.log(`Resultado: ${a + b}`);
    console.log(x);
})(1, 2);

(function () {
  let x = 1;
  console.log(x);
})();

(() => {
  console.log('arrow #01');
})();

(() => console.log('arrow #02'))();


