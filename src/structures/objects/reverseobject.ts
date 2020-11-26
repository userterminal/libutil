function reverseObject(obj: Record<string, unknown>) {
    // deno-lint-ignore no-explicit-any
    const newObj: Record<any, any> = {}

    Object.keys(obj).forEach((key) => {
        newObj[(obj[key] as string)] = key
    });

    return newObj;
}

function reverseObjectPromise(obj: Record<string, unknown>) {
    return new Promise((resolve, reject) => {

        // deno-lint-ignore no-explicit-any
        const newObj: Record<any, any> = {}

        Object.keys(obj).forEach((key) => {
            newObj[(obj[key] as string)] = key
        });

        resolve(newObj);

    })
}

export {reverseObject, reverseObjectPromise}






