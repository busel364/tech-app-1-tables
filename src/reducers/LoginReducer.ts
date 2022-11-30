import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginProfile } from "../types/types";

const defaultState = {
    user: null as UserLoginProfile | null,
    token: null as string | null,
    isLogined: false
}

const LoginSlice = createSlice({
    initialState: defaultState,
    name: 'login',
    reducers: {
        login(state, action: PayloadAction<UserLoginProfile>) {
            state.user = action.payload;
            state.isLogined = true
        },
        logout(state) {
            state.isLogined = false;
            state.user = null;
        },
        putToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        deleteToken: (state) => {
            state.token = null;
        }
    }
})


export const {deleteToken,login,logout,putToken} = LoginSlice.actions;
export default LoginSlice.reducer;