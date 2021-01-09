let first = parseInt( prompt('Введите первое число') );
let second = parseInt( prompt('Введите второе число') );

if(first > second) {
  alert('Первое число больше второго.')
} else if(first < second) {
  alert('Первое число меньше первого.')
} else if(first === second) {
  alert('Числа равны')
} else {
  alert('Вы ввели неккоректное число')
}