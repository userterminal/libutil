function urlQuery(base: string, query: Record<string, unknown>) {
    //Function assumes this to be a valid url

    //If basePath has "?" it would already have a query, so append
    const append: boolean = base.includes("?")

    //If query ends with "?" it has no queries, so append
    const noQueryAppend: boolean = base.endsWith("?")

    if(!append && !noQueryAppend) base = base+"?"

    //Append on queries
    Object.keys(query).forEach((key) => {
        const toappend = base.endsWith("?") ? `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}` : `&${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`
        base = base + toappend
    })

    return base;
}

function urlQueryPromise(base: string, query: Record<string, unknown>) {
    return new Promise((resolve, reject) => {

    
    //Function assumes this to be a valid url

    //If basePath has "?" it would already have a query, so append
    const append: boolean = base.includes("?")

    //If query ends with "?" it has no queries, so append
    const noQueryAppend: boolean = base.endsWith("?")

    if(!append && !noQueryAppend) base = base+"?"

    //Append on queries
    Object.keys(query).forEach((key) => {
        const toappend = base.endsWith("?") ? `${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}` : `&${encodeURIComponent(key)}=${encodeURIComponent(query[key] as string)}`
        base = base + toappend
    })

    resolve(base)
    })
}

export {urlQuery, urlQueryPromise}