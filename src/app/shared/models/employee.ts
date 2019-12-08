export interface IEmplyoee {
    firstName: string;
    lastName: string;
}

export class Employee {
    firstName: string = '';
    lastName: string = '';

    constructor(props?: IEmplyoee) {
        if (!props) return this;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
    }
}