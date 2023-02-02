import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import authService from "./authService";

let localStorage: any;

if (typeof window !== 'undefined') {
    const { createLocalStorage } = require("localstorage-ponyfill")
    const localStorage = createLocalStorage();
}


// Get admin from local storage
const admin = JSON.parse(localStorage ? localStorage.getItem("admin") || "{}" : "{}");

const initialState = {
    admin: admin ? admin : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register admin
export const register = createAsyncThunk(
    'auth/register',
    async (admin: any, thunkAPI) => {
        try {
            return await authService.register(admin);
        } catch (error: any) {
            const message = ( error.response && error.response.data && error.response.data.message ) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// Login admin
export const login = createAsyncThunk(
    'auth/login',
    async (admin: any, thunkAPI) => {
        try {
            return await authService.login(admin);
        } catch (error: any) {
            const message = ( error.response && error.response.data && error.response.data.message ) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.admin = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.admin = null;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.admin = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload as string;
                state.admin = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.admin = null;
            })   
    }
});

export const { reset } = authSlice.actions;

// other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;

