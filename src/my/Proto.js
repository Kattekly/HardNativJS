const user = {
    showName() {
        console.log(this.name)
    }
}

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