// Phase 1
/**
 * W1 : Recursive, OOP, MVC
 * W2 : Database Relation, Query, Asynchronous JS : Callbacks
 * W3 : Express, Promise
 * W4 : Sequelize (ORM), Node+Express+Sequelize, EJS
 */

// ES6 -> JS versi 2015
// Declaration
//  function print(){
//      console.log('Hello vincent!')
//  }
// Expression
//  const print = function(){
//      console.log('Hello vincent!')
//  }
// Arrow
// const print = () => console.log('Hello vincent!')

// print()

// Higher order function : -> .forEach, .filter, .map
// let movies = ['Godzilla vs Kong','Wonder Woman 1984','Eternal']

// .forEach
// for(let i = 0; i < movies.length; i++){
//     console.log(movies[i])
// }
// movies.forEach((movie,index) => console.log(index,movie[0]))

// .filter
// let result;
// result = movies.filter(movie => {
//     if(movie[0] !== "G"){
//         return movie
//     }
// })
// console.log(result)

// let resultMap;
// resultMap = movies.map(movie => movie + ' - Map')
// console.log(resultMap)

// let hardwares = [
//     ['laptop','pc'],
//     ['mouse','keyboard']
// ]

// Expected result
/*
{
    tools : ['laptop','pc'],
    input : ['mouse','keyboard']
}
 */

// let result = {}
// hardwares.forEach(hardware => {
//     hardware.forEach(hw => {
//         console.log(hw)
//     })
// })

let vehicle = {
    // Keys
    name : "Honda Civic 2021",
    type : "Sedan",
    cc : 5000,
    engine : false,
    tags : [],
    // Methods
    startEngine(){
        this.engine = true;
        console.log("Start the Engine!")
    },
    stopEngine(){
        this.engine = false;
        console.log("Stop the Engine!")
    },
    printThis(){
        console.log(this)
    },
    mentionName(){
        console.log(this.name)
    },
    statusEngine(){
        this.engine ? console.log(`Engine is started!`) : console.log(`Engine is not started!`)
    },
    mentionTags(){
        console.log(this.tags)
    },
    addTags(tag){
        this.tags.push(tag)
    }
}
// vehicle.startEngine()
// vehicle.statusEngine()
// vehicle.stopEngine()
// vehicle.statusEngine()

// vehicle.mentionTags();
// vehicle.addTags('mobil baru')
// vehicle.mentionTags();

console.log(vehicle)
// vehicle.mentionName()
// console.log(this)
/**
 * engine = true -> Engine is started!
 * engine = false -> Engine is not started!
 */