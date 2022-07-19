const match = (string1, string2) => {
    if(string1.toLowerCase() === string2.toLowerCase())
        return true;
    return false;
}

match('hEllO', 'HELLo');