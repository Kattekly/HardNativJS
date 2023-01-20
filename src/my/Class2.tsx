import React from 'react';

class User {
    // name: string
    // age: number
    //модификаторы в констуркторе позволяют избавиться от этой типизации

    constructor(public name: string, public age: number) {
        this.name = name
        this.age = age
    }

    showName(): string {
        return this.name
    }

    showAge(): number {
        return this.age
    }
}

let kate = new User('Kate', 26)
console.log(kate.name)

export default User;

