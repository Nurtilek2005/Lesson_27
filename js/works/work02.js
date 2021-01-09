
let symbol = prompt('Введите любой символ');
let word = symbol + " " + prompt('Введите ваше слово или предложение') + " " + symbol;

let result = '';


for(let i = 0; i < word.length; i++ ) {
  result += symbol;
}

console.log(result);
console.log(word);
console.log(result);
