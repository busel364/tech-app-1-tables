import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Array, NameChanger, UsersArray } from "../types/types"

//[] as unknown as UsersArray
const defaultState: UsersArray = 
[
    {
        users: [
            {
                employeeNumber: 1,
                name: 'Peter',
                dateOfBirth: 0,
                telNumber: 'string',
                jobTitle: 'string',
                inArchive: false
            }, {
                employeeNumber: 2,
                name: 'Steve',
                dateOfBirth: 12,
                telNumber: 'string',
                jobTitle: 'string',
                inArchive: false
            }, {
                employeeNumber: 3,
                name: 'Adam',
                dateOfBirth: 32,
                telNumber: 'string',
                jobTitle: 'string',
                inArchive: false
            }],
        time: Date.now(),
        name: 'Sosich Gang'
    }
]

const TablesSlice = createSlice({
    initialState: defaultState,
    name: 'tables',
    reducers: {
        appendTableToTablesArray(state, action: PayloadAction<Array>) {
            state.push({ users: action.payload.users, time: Date.now(), name: action.payload.name });
            localStorage.setItem('ArrayOfTables', JSON.stringify(state));
        },
        deleteTable(state, action: PayloadAction<number>) {
            const i = state.findIndex(item => item.time === action.payload);
            state.splice(i, 1);
            localStorage.setItem('ArrayOfTables', JSON.stringify(state));
        },
        changeNameofTable(state, action:PayloadAction<NameChanger>){
            const i = state.findIndex(item=> item.time===action.payload.time);
            state[i].name=action.payload.name;
        },
    }
})

export const {appendTableToTablesArray,changeNameofTable,deleteTable} = TablesSlice.actions

export default TablesSlice.reducer;