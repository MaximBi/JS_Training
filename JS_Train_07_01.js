function getInfo(persons) {
    let resultPerson = {name: '', age: 0};

    let avgAge = persons.reduce( (totalValue, currentValue) => totalValue + currentValue.age , 0) / persons.length;
    resultPerson.age = avgAge;

    let tempAge = 0;
    for (const person of persons) {
        if(tempAge < person.age) {
            tempAge = person.age;
            resultPerson.name = person.name;
        }
    }

    return resultPerson
}

let startArray = [
    {name: 'Lena', age: 9},
    {name: 'Lida', age: 38},
    {name: 'Maxim', age: 37},
    {name: 'Mariella', age: 4},
    {name: 'Buffy', age: 1}
];

console.log(getInfo(startArray));