import { ModuleDetectionKind } from "typescript"

export interface Developer {
    id?: number
    name?: string
    phone?: string
    skill?: string
    notes?: string
}


export class DeveloperModel {
    
    constructor(
    public id?: number,
    public name?: string,
    public phone?: string,
    public skill?: string,
    public notes?: string,
    ){}
}


export interface AddDeveloper {
    name?: string
    phone?: string
    skill?: string
    notes?: string
}
