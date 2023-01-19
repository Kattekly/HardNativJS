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
// const kate = new User2("Kate")
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
function User(name) {
    this.name = name
}

const kater = new User('Kate')