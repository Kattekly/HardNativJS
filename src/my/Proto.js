const user = {
    showName() {
        console.log(this.name)
    }
}
//это объект-прототип, потому что на него у 2 др. объектов
// есть скртыая ссылка [[Prototype]]


const hanna = {
    name: 'Hanna'
    // [[Prototype]] : user
}

const alex = {
    name: 'Alex'
    // [[Prototype]] : user
}

hanna.__proto__ = user
alex.__proto__ = user

alex.showName()
hanna.showName()

//============================
const User2 = {
    prototype: {
        constructor: User2,
        showName() {
            console.log(this.name)
        }
    }
}
//const kate = new User2("Kate")
// const peter = new User2("Peter")


const kate = {
    name: 'Kate'
    // [[Prototype]] : User2.prototype
}

const peter = {
    name: 'Peter'
    // [[Prototype]] : User2.prototype
}

//============================

function User3(name, age) {
    this.name = name
    this.age = age
    this.showName = function () { //метод сразу попад. в 2 ф-ции и происх. дублирование
        console.log(this.name)
    }
}


// User3.prototype.showName = function () {
//         console.log(this.name)}
// методы можно добавлять так, это позволяет избежать дублирования


User3.prototype.showAge = function () {
    console.log(this.age)
}

const kate2 = new User3("Kate")
const peter2 = new User3("Peter", 12)
const anna = new kate2.constructor("Anna") //kate2.__proto__ ---> {constructor: User3} <--- User3.prototype

kate2.showName() //Kate
peter2.showAge()
anna.showName()

//============================
function User(name) {
    this.name = name
}

const katte = new User('Kate')

//============================
// Цепочка прототипов

const Base = {
    show() {
        console.log(this.name)
    }
}

const Super = {
    getName() {
        //.........
    },
    __proto__: Base
}

const Kate = {
    name: "Kate",
    __proto__: Super
}

//==============================
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen)
console.log(bed.glasses)

//==============================
//добавить метод для всего класса функций
Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
}

function f() {
    alert("Hello!");
}

f.defer(1000);