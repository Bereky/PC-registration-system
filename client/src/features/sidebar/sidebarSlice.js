import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    collapseState: false,
    isLoading: true
}


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        change_state: (state, action) => {
            state.collapseState = !state.collapseState
        }
    }
})

export const { change_state } = sidebarSlice.actions

export default sidebarSlice.reducer