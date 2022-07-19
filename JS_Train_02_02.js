const number1 = prompt('Number 1:');
const number2 = prompt('Number 2:');
const number3 = prompt('Number 3:');
let numberTemp = number1;

if (number2 > numberTemp) {
    numberTemp = number2;
}

if (number3 > numberTemp) {
    numberTemp = number3;
}

alert('Max number is ' + numberTemp);
