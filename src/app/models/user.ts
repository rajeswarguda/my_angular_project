export interface IUser {

    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
}

export class User {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public phone: string,
        public website: string
    ){}
}
