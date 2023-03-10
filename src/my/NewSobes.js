function debounce(cb, delay) {
    let id

    return () => {
        clearTimeout(id)
        id = setTimeout(() => {
            cb()
        }, delay)
    }
}

function fff() {
    console.log('Heey!')
}

const debounced = debounce(fff, 2000)
debounce()
debounce()
debounce()
setTimeout(() => debounced(), 2000)