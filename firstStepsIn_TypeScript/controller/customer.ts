interface IPessoa {
    name: string;
    age: number;
}

interface IContact{
    phone: string;
    email: string;
}

export type ICustomer = IPessoa & IContact;

export function saveCustomer(customer: ICustomer){
    console.log('save the customer : ', customer);
}