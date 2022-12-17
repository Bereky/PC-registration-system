import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    sannedComputers: [],
    isLoading: true
}

const scannedSlice = createSlice({
    name: 'scanned',
    initialState
})


export default scannedSlice.reducer;