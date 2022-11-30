import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserPayload, UserSort, UserUpdate } from "../types/types";



const defaultState: User[] =  [{
        employeeNumber: 0,
        name: '',
        dateOfBirth: 0,
        telNumber: '',
        jobTitle: '',
        inArchive: false
    }
];

//JSON.parse(localStorage.getItem('employeesArray')!) || [
//     {
//         employeeNumber: 1,
//         name: 'Peter',
//         dateOfBirth: 0,
//         telNumber: 'string',
//         jobTitle: 'string',
//         inArchive: false
//     }, {
//         employeeNumber: 2,
//         name: 'Steve',
//         dateOfBirth: 12,
//         telNumber: 'string',
//         jobTitle: 'string',
//         inArchive: false
//     }, {
//         employeeNumber: 3,
//         name: 'Adam',
//         dateOfBirth: 32,
//         telNumber: 'string',
//         jobTitle: 'string',
//         inArchive: false
//     }];


const UserSlice = createSlice({
    initialState: defaultState,
    name: 'user',
    reducers: {
        addEmployeeToArray(state, action: PayloadAction<UserPayload>) {
            const arr = [...state];
            if (!state.find(item => item.employeeNumber === action.payload.employeeNumber)) {
                arr.sort((a, b) => a.employeeNumber! - b.employeeNumber!)
                state.push({ ...action.payload, employeeNumber: action.payload.employeeNumber! })
                localStorage.setItem('employeesArray', JSON.stringify(state));
            }
        },
        removeEmployeeFromArray(state, action: PayloadAction<number>) {
            const i = state.findIndex(item => item.employeeNumber === action.payload)
            if (state.length > 1) {
                state.splice(i, 1);
                localStorage.setItem('employeesArray', JSON.stringify(state));
            }
        },
        getStateFromStorage(state, action: PayloadAction<User[]>) {
            return action.payload
        },
        sortEmployeeArray(state, action: PayloadAction<UserSort>) {
            if (action.payload.count % 2 === 0) {
                state.sort((a: any, b: any) => a[action.payload.type] < b[action.payload.type] ? 1 : -1)
            } else {
                state.sort((a: any, b: any) => b[action.payload.type] < a[action.payload.type] ? 1 : -1)
            }
        },
        sortByJobTitle(state, action:PayloadAction<string>) {
            state.sort((a, b) => a.dateOfBirth! < b.dateOfBirth!?1:-1);
        },
        updateUser(state, action: PayloadAction<UserUpdate>) {
            const user = state.find((item) => item.employeeNumber === action.payload.id);
            const i = state.findIndex(item => item.employeeNumber === action.payload.id)
            // state[i][action.payload.key] = action.payload.value;
            // const user:User = state[i];
            if (user) {
                user[action.payload.key] = action.payload.value
                state[i] = user;
                localStorage.setItem('employeesArray', JSON.stringify(state));
            }
        },
        clearUsers(state){
            return [] as User[];
        }
    }
})

export const { addEmployeeToArray,clearUsers, removeEmployeeFromArray, getStateFromStorage, sortEmployeeArray, updateUser } = UserSlice.actions;
export default UserSlice.reducer;