function arrToObj(keyValArr) {
    let returnValue = {};

    for (const item of keyValArr) {
        returnValue[item[0]] = item[1];
    }

    return returnValue;
}

console.log(arrToObj([['ключ1', 'значение1'], ['ключ2', 'значение2']]));