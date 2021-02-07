"use strict"
const fs = require("fs")

class Person {
  // Look at the above CSV file
  // What attributes should a Person object have?
  constructor(id, first_name, last_name, email, phone, created_at) {
    this._id = id;
    this._first_name = first_name;
    this._last_name = last_name;
    this._email = email;
    this._phone = phone;
    this._created_at = created_at;
  }
  get id() {
    return this._id;
  }
  get first_name() {
    return this._first_name;
  }
  get last_name() {
    return this._last_name;
  }
  get email() {
    return this._email;
  }
  get phone() {
    return this._phone;
  }
  get created_at() {
    return this._created_at;
  }
  set setId(id) {
    this._id = id;
  }
  set setFirstName(first_name) {
    this._first_name = first_name;
  }
  set setLastName(last_name) {
    this._last_name = last_name;
  }
  set setEmail(email) {
    this._email = email;
  }
  set setPhone(phone) {
    this._phone = phone;
  }
  set setCreatedAt(created_at) {
    this._created_at = created_at;
  }
}

class PersonParser {

  constructor(file) {
    this._file = file
    this._people = null
  }

  get people() {
    return this._people
  }
  get file() {
    return this._file
  }
  set setPeople(people) {
    this._people = people
  }
  set setFile(file) {
    this._file = file
  }

  getPeople() {
    let people = fs.readFileSync(this.file, 'utf8');
    let peopleSplit = people.split('\r\n')

    // console.log(peopleSplit)
    let peopleFixed = peopleSplit.map(person => {
      return person.split(',')
    })

    // Cara ES5
    let result = []
    for (let i = 1; i < peopleFixed.length; i++) {
      // Destructuring array
      const [id, first_name, last_name, email, phone, created_at] = peopleFixed[i]

      let temp = new Person(Number(id), first_name, last_name, email, phone, new Date(created_at))
      result.push(temp)
    }
    this.setPeople = result
    // console.log(result)

    // Cara ES6
    // let peopleInstances = peopleFixed.map(person => {
    //   const [id,first_name,last_name,email,phone,created_at] = person
    //   return new Person(id, first_name, last_name, email, phone, created_at)
    // })

    // Cara ES6 -> SUPER CEPAT && SUPER PUSING!! -> not recommended
    // this.setPeople = peopleFixed.map(([id,first_name,last_name,email,phone,created_at]) => new Person(Number(id), first_name, last_name, email, phone, new Date(created_at)))
    // this._people.shift()
    //  console.log(this.people)

  }

  addPerson(person) {
    const people = this._people
    const [first_name, last_name, email, phone] = person

    let id = Number(people[people.length - 1].id + 1);
    let created_at = new Date()

    let temp = new Person(id, first_name, last_name, email, phone, created_at)
    this._people.push(temp)
    // console.log(temp)
  }
  save() {
    // console.log(data)
    let result = [
      ["id","first_name", "last_name", "email", "phone", "created_at"]
    ]
    this.people.forEach(person => {
      let { id, first_name, last_name, email, phone, created_at } = person;
      created_at = String(created_at)
      result.push([id, first_name, last_name, email, phone, created_at].join(','))
    })
    // console.log(result.join('\r\n'))
    fs.writeFileSync('./people.csv',result.join('\r\n'))
  }
}

let parser = new PersonParser('people.csv')
parser.getPeople()

parser.addPerson(['Vincent', 'Guizot', 'vincent@yahoo.com', '1-235-789'])

// console.log(parser.people);
parser.save()
// console.log(`There are ${parser.people.length} people in the file '${parser.file}'.`)

// let people = new Person(1,'Vincent','Guizot','vincent@yahoo.com','08180',new Date())
// console.log(people)
// console.log(people.email)

// people.setEmail = 'tes@yahoo.com'
// console.log(people.email)
