class Vehicle {
    constructor(name,type,cc,engine,tags){
        this.name = name,
        this.type = type,
        this.cc = cc,
        this.engine = engine,
        this.tags = tags
    }
    startEngine(){
        this.engine = true;
        return `Start engine.`
    }
    stopEngine(){
        this.engine = false;
        return `Stop engine.`
    }
    statusEngine(){
        return  this.engine ? `Engine is started` : `Engine is not started`
    }
    printThis(){
        return this
    }
    
}

class Sedan extends Vehicle {
    constructor(name,type,cc,engine,tags,height){
        super(name,type,cc,engine,tags)
        this.height = height
    }
}
class Pickup extends Vehicle {
    constructor(name,type,cc,engine,tags,box){
        super(name,type,cc,engine,tags)
        this.box = box
    }
}

// instantiate -> proses mencetak
let sedan = new Sedan("Civic 2021","Sedan",5000,false,[],1)
let pickup = new Pickup("Colt Diesel 2021","Pickup",7500,false,['cargo'],2)

console.log(sedan)
// console.log(sedan.startEngine())
// console.log(sedan.statusEngine())
// console.log(sedan.stopEngine())
// console.log(sedan.statusEngine())

// console.log(sedan.printThis())
// console.log(pickup.printThis())
console.log(pickup)

// Pilar Utama dalam OOP
/**
 * 1. Inheritance
 * 2. Polymorphism
 * 3. Encapsulation : public, private, protected
 * 4. Abstraction
 */