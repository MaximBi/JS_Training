let i = 0;
while(i < 100) {
    for(let j = 10; j <= 100; j+= 10) {
        while(i !== j){
            i = Number(prompt('Enter ' + j + ': '));
        }
    }
}