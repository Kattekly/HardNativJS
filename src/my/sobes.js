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