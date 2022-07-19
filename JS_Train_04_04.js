function createAdder(n) {
    return function addA(a) {
        return a+n;
    }
}

const addN = createAdder(10);
alert(addN(5));
alert(addN(10));