let i = Number(prompt('Please enter a number: '));
let sum = 0;
while(1) {
    sum = sum + i;
    i = Number(prompt('Please enter a number: '));
    if(i === 0) {
        break;
    }
}

alert(sum);