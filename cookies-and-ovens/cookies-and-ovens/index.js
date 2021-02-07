// Answer These Questions:
//
// - What are essential classes?
// Cookie, ChocolateCookie, CheeseCookie, PeanutCookie, Oven
// - What attributes will each class have?
// Cookie : name, time
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

// Agregations
// Compositions

class Cookie {
    constructor(name,time){
        this.name = name;
        this.time = time;
    }
    information(){
        return `${this.name} : ${this.time} menit`
    }
}
class ChocolateCookie extends Cookie {
    constructor(){
        super("Kue Coklat",20);
    }
}
class CheeseCookie extends Cookie {
    constructor(){
        super("Kue Keju",30);
    }
}
class PeanutCookie extends Cookie {
    constructor(){
        super("Kue Kacang",35);
    }
}
class Oven {
    constructor(cookie,timer){
        this.cookie = cookie
        this.timer = timer
        this.status = ''
    }
    bake(){
        console.log(`Oven sedang memasak ${this.cookie.name} dengan lama ${this.timer}`)
        for(let i = 0; i <= this.timer; i+=5){
            if(i === 0){
                this.status = 'mentah'
                console.log(`- Menit ke ${i} : ${this.status}`)
            }
            else if(i < this.cookie.time / 2){
                this.status = 'belum matang'
                console.log(`- Menit ke ${i} : ${this.status}`)
            }else if(i >= this.cookie.time / 2 && i < this.cookie.time){
                this.status = 'hampir matang'
                console.log(`- Menit ke ${i} : ${this.status}`)
            }else if(i === this.cookie.time){
                this.status = 'matang'
                console.log(`- Menit ke ${i} : ${this.status}`)
            }else if(i > this.cookie.time ){
                this.status = 'gosong'
                console.log(`- Menit ke ${i} : ${this.status}`)
            }
        }
        console.log(`Status ${this.cookie.name} : ${this.status}\n`)
    }
}

let kueCoklat = new ChocolateCookie()
let kueKeju = new CheeseCookie()
let kueKacang = new PeanutCookie()

let cookies = [kueCoklat, kueKeju, kueKacang]
cookies.forEach(kue => {
    let oven = new Oven(kue,30)
    oven.bake()
})

// Answer These Questions:
//
// - What are essential classes?
//  Cookies and Oven
// - What attributes will each class have?
//  Cookies : namaKue, menit, status ; Oven : cookie, lamaMasak, statusOven
// - What interface will each class provide?
//  Cookies has description method, Oven has masakKue method
// - How will the classes interact with each other?
//  Child extends form its Parent
// - Which classes will inherit from others, if any?
//  Coklat, Kacang, Keju from Cookies


// class Cookies {
//     constructor(namaKue, menit) {
//         this.namaKue = namaKue
//         this.menit = menit
//         this.status = 'Mentah'
//     }

//     description() {
//         let message = `${this.namaKue} : ${this.menit} menit`
//         return message
//     }
// }


// class Oven {
//     constructor(cookie, lamaMasak) {
//         this.cookie = cookie
//         this.lamaMasak = lamaMasak
//         this.statusOven = ''
//     }

//     masakKue() {
//         console.log(`\nOven Sedang memasak ${this.cookie.namaKue}, ${this.cookie.status}`);
//         for (let i = 0; i <= this.lamaMasak; i += 5) {
//             if (i < this.cookie.menit / 2) {
//                 this.statusOven = 'belum matang'
//                 console.log(`- Menit ke ${i}: ${this.statusOven}`);
//             } else if (i > this.cookie.menit / 2 && i < this.cookie.menit) {
//                 this.statusOven = 'hampir matang'
//                 console.log(`- Menit ke ${i}: ${this.statusOven}`);
//             } else if (i == this.cookie.menit) {
//                 this.statusOven = 'matang'
//                 console.log(`- Menit ke ${i}: ${this.statusOven}`);
//             } else if (i > this.cookie.menit) {
//                 this.statusOven = 'gosong'
//                 console.log(`- Menit ke ${i}: ${this.statusOven}`);
//             } 
//         }
//         this.cookie.status = this.statusOven
//         console.log(`Status: ${this.cookie.namaKue}, ${this.cookie.status}`);

//     }

// }

// class Coklat extends Cookies {
//     constructor (namaKue, menit) {
//         super(namaKue, menit) 
//     }

// }

// class Kacang extends Cookies {
//     constructor (namaKue, menit) {
//         super(namaKue, menit)
//     }
// }

// class Keju extends Cookies {
//     constructor (namaKue, menit) {
//         super(namaKue, menit) 
//     }
// }

// let kueCoklat = new Coklat('Kue Coklat', 20)
// let kueKacang = new Kacang('Kue Kacang', 30)
// let kueKeju = new Keju('Kue Keju', 35) 

// let cookiesReadyOven = [kueCoklat, kueKacang, kueKeju]
// for (let i = 0; i < cookiesReadyOven.length; i++) {
//     let masukanKeOven = new Oven(cookiesReadyOven[i], 25)    
//     masukanKeOven.masakKue()
// } 