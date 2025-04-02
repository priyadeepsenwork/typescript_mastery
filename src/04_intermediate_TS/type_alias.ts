type User = {
    name: string,
    age: number,
    location: string,
    email?: string, // '?' --> optional property
    phone_number?: number // opt'nl properties
    readonly id?: number //! --> read-only prop.
}

const printUserInfo = (user: User) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location} Email: (${user.email}))`
}

const res = printUserInfo({name: "Priyadeep Sen", age: 21, location: "India", email: "work.priyadeepsen@gmail.com"})

console.log(res)