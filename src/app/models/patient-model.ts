export interface IPatient {
    id?: string;
    firstName?: string;
    lastName?: string;
    birthDate?: any;
    email?: string;
    address?: string;
}
export class Patient implements IPatient{
    constructor(
    public id?: string,
    public firstName?: string,
    public lastName?: string,
    public birthDate?: any,
    public email?: string,
    public address?: string,
    ){}
}


export const PATIENTS : IPatient[] = [

    {firstName: "Ala", lastName: "Dridi", birthDate : new Date(), address: "La Marsa", email : "ala@gmail.com"}
]