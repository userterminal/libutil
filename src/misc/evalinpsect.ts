function evalInspect(code: string) {
    const evaled = eval(code)

    return Deno.inspect(evaled)
}

function evaledInspectPromise(code: string) {
    return new Promise((resolve, reject) => {
        const evaled = eval(code)

        resolve(Deno.inspect(evaled))
    });
}

export {evalInspect, evaledInspectPromise}