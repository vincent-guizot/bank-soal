const fs = require('fs');

// Read data -> fs.readFileSync('./data.csv','utf8')
// Write data -> fs.writeFileSync('./data.csv',variable)

let people = fs.readFileSync('./people.csv','utf8');
let peopleSplit = people.split('\r\n')

let peopleFixed = peopleSplit.map(person => {
    return person.split(',')
})

console.log(peopleFixed)