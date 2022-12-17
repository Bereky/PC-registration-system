import { configureStore } from '@reduxjs/toolkit'
import scannedReducer from './features/scanner/scannedSlice'

export const store = configureStore({
  reducer: {
    scanned: scannedReducer
  },
})