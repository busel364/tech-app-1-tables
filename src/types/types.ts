

export interface UserLogin{
    name: string,
    login: string,
}

export interface UserLoginProfile extends UserLogin{
    roles:[]
}

export interface UserRegisterProfile extends UserLogin{
    password:string
}

export interface NameChanger {
    name: string;
    time: number,
}

export interface Tables {
    users: User[] | null
    time: number
    name: string | null | undefined
}
export type UsersArray = [{
    users: User[] | null
    time: number
    name: string | null | undefined
}];

export interface Array {
    users: User[],
    name: string | null | undefined
}

export interface User {
    [key: string]: number | boolean | string,
    'employeeNumber': number,
    'name': string,
    'dateOfBirth': number|string,
    'telNumber': string,
    'jobTitle': string,
    'inArchive': boolean
}

export interface UserSort {
    count: number,
    type: string
}

export interface arrOfTD {
    type: string;
    count?: number;
    itemKey: string;
}

export interface UserPayload {
    employeeNumber: number,
    name: string,
    dateOfBirth: number|string,
    telNumber: string,
    jobTitle: string,
    inArchive: boolean
}

export interface UserUpdate {
    key: string,
    id: number,
    value: string | number | boolean
}

// const [checkBox, setCheckBox] = useState(item.inArchive);
// const [employeeNumber, setEmployeeNumber] = useState(item.employeeNumber);
// const [name, setName] = useState(item.name);
// const [dateOfBirth, setDateOfBirth] = useState(item.dateOfBirth);
// const [jobTitle, setJobTitle] = useState(item.jobTitle);
// const [inArchive, setInArchive] = useState(item.inArchive);