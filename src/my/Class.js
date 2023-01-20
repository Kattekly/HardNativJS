/*
class Car {
    run() {
        console.log(this.model + ' ' + "running")
    }
}

class Ford extends Car{
    constructor(model) {
        super();
    }
}

const mondeo = new Ford('Mondeo')
mondeo.run()*/


function Car() {
}

Car.prototype.run = function () {
    console.log(this.model + ' ' + "running")
}


function Ford(model) {
    this.model = model
}

Ford.prototype.fordRun = function () {
    console.log('Ford run')
}

const mondeo = new Ford('Mondeo')

mondeo.fordRun()
mondeo.run()


/*
Car.prototype.run.call(mondeo)*/
