const sayHello = (() => {
    const MAX_COUNT = 3;
    let current = 0;

    return function(name) {
        if (current < MAX_COUNT){
            console.log(`Hello, ${name}`);
            current++;
        }
    };
})();