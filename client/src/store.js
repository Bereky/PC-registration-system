import { configureStore } from '@reduxjs/toolkit'
import scannerReducer from './features/scanner/scannerSlice'

export const store = configureStore({
  reducer: {
    scanned: scannerReducer
  },
})