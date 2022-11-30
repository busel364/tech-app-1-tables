export const tableHeader = ['Employee Number', 'Name', 'Date Of Birth', 'Tel.Num', 'Job Title', 'In Archive']

export const base_url = 'https://webaccounting.herokuapp.com/account';

export const createToken = (login: string, password: string) => {
    return `Basic ${window.btoa(login + ':' + password)}`;
}