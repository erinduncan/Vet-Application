export default interface IEmployee {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    employeeType: IEmployeeType,
    phoneNumber: string
}

export enum IEmployeeType {
    MANAGER,
    VET,
    RECEPTIONIST
}