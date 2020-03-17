import IClient from "./IClient";

export default interface IPet {
    id: number,
    species: IAnimal,
    name: string,
    age: number,
    owner: IClient,
    description?: string
}

export enum IAnimal {
    DOG,
    CAT
}