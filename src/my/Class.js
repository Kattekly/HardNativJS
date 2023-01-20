class Car {

    static COUNT = 6

    constructor(model) {
        this.model = model
    }

    run() {
        console.log(this.model + ' ' + "running")
    }
}

class Ford extends Car {
    constructor(model) { //не создает совй this
        super(model) //вызов родительского констурктора, чтобы не дублирваоть логику
    }
    fordRun() {
        console.log('Ford')
    }
}

const mondeo = new Ford('Mondeo')
mondeo.run()
console.log(Ford.COUNT)

//=====================================

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

Ford.prototype.__proto__ = Car.prototype

mondeo.fordRun()
mondeo.run()


/*
Car.prototype.run.call(mondeo)*/
