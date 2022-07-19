const calculate = (arr) => 
    arr
    .map(item => item % 2 === 0 ? item + 4 : item - 2)
    .filter(item => item % 13 !== 0)
    .reduce((sum, item) => sum + item, 0);


const sum = calculate([15, 2, 3, 5, 6]);
console.log(sum);