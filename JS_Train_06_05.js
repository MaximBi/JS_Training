const transformUpvotes = arr => {
    let resultArr = [];
    for (const item of arr) {
        if (item.includes('k')) {
            resultArr.push(Number(item.replace('k','')) * 1000);
        } else {
            resultArr.push(item);
        }
    }
};

console.log(transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']));