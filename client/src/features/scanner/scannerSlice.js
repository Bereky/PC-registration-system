import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    current_scan: [],
    scanned_pcs: [],
    isLoading: true
}


const scannerSlice = createSlice({
    name: 'scanner',
    initialState,
    reducers: {
        scan_pc: (state, action) => {
            const pc_data  = action.payload.data[0]

            // clear the array
            state.current_scan = [];
            // add the current data
            state.current_scan.push(pc_data)
        },
        scan_pc_fail: (state, action) => {
            state.current_scan = [];
        }
    }
})

export const { scan_pc, scan_pc_fail } = scannerSlice.actions

export default scannerSlice.reducer