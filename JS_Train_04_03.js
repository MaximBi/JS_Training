function repeatWord(word, count) {
    let result = "";
    for(let i = 1; i <= count-1; i++) {
        result += word + i + ", "
    }
    result += word + count;
    console.log(result);
}

repeatWord("test", 6);