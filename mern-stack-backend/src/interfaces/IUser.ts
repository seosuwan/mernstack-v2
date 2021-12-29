export interface IUser{
    username: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    birth: string;
    user_interests: string,
    job: string
}

export interface IUserInPutDTO{ //post할때 받는거 !!
    username: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    birth: string;
    user_interests: string,
    job: string
}

export interface userUniqueSearchInput {
    email : string;
    password : string;
}
export interface userExist{
    email : string;
}

