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

const kattekly = new User('Kate')