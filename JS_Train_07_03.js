function countChars(str) {

    const strArr = str.toLowerCase().split('');
    console.log(strArr);
    const obj = {};

    for(const c of strArr) {
        console.log(c);
        if (c in obj) {
            obj[c] = ++obj[c];
        } else {
            obj[c] = 1;
        }
    }

    return obj;
}

console.log(countChars('Арарат'));