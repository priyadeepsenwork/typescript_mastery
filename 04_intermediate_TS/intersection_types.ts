//Object 1 type
type UserInfo = {
    first: string,
    last: string,
    age: number,
    id: number // common property : id
}

//Object 2 type
type UserSecurity = {
    id: number, //common property : id
    email: string,
    password: string
}

type Branch = UserInfo & UserSecurity
//(id taken as common)

const priyadeep: Branch = {
    first: 'Priyadeep',
    last: 'Sen',
    email: 'work.priyadeepsen@gmail.com',
    password: 'Lion@10April2003',
    id: 11900121041,
    age: 21
}

console.log(priyadeep)