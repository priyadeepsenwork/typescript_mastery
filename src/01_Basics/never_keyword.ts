const throwError = (message: string): never => {
    throw new Error(message)
}

const infinity = ():never => {
    while(true) {}
}

let x: never

const neverReturn = ():never => {
    while(true){}
}

x = neverReturn()