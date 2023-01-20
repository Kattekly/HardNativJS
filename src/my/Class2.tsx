import React from 'react';

class User {
    name: string
    age: number

    constructor(name: string, age: number) {
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

export default User;

