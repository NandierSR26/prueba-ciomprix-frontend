import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isMenuOpen: false
    },
    reducers: {
        onOpenMenu: (state) => {
            state.isMenuOpen = true
        },
        onCloseMenu: (state) => {
            state.isMenuOpen = false
        },
    }
});


// Action creators are generated for each case reducer function
export const {onOpenMenu, onCloseMenu} = uiSlice.actions;