function parseBool(value: unknown) {
    return (value) ? true : false
}

function parseBoolPromise(value: unknown) {
    return new Promise((resolve, reject) => {
        resolve((value) ? true : false)
    });
}

export {parseBool, parseBoolPromise}