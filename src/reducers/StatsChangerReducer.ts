import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const defaultState = {
    isOpen: false,
    jobTitle: null as string|null
}

const statsChangerSlicer = createSlice({
    name:'statsChanger',
    initialState: defaultState,
    reducers:{
        closeJobTitleBar(state){
            state.isOpen = false
        },
        openJobTitleBar(state){
            state.isOpen = true
        },
        setJobTitleFilter(state,action:PayloadAction<string|null>){
            state.jobTitle=action.payload
        }

    }
})

export const {closeJobTitleBar,openJobTitleBar, setJobTitleFilter} = statsChangerSlicer.actions;
export default statsChangerSlicer.reducer;