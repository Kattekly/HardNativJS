//создать промис, цепочку промисов
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})


p.then(() => {
    //
}).then(() => {
    //
}).catch(() => {
    //
})

//замыкание
const a = 12

function b() {
    console.log(a)
}