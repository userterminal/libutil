function arrayRandom(array: unknown[]) {
    const returned = array[Math.floor(Math.random() * array.length)]
    return returned
}

function arrayRandomPromise(array: unknown[]) {
    return new Promise((resolve, reject) => {
        const returned = array[Math.floor(Math.random() * array.length)]
        resolve(returned)
    })
}

export {arrayRandom, arrayRandomPromise}

