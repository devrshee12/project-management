import {createSlice, PayloadAction} from "@reduxjs/toolkit"



export interface initialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState:initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false
};

export const globalState = createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarCollapsed: (state: initialStateTypes, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;

        },
        setIsDarkMode: (state: initialStateTypes, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
})


export const {setIsSidebarCollapsed, setIsDarkMode} = globalState.actions;

export default globalState.reducer