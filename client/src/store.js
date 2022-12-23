import { configureStore } from '@reduxjs/toolkit'
import scannerReducer from './features/scanner/scannerSlice'
import sidebarReducer from './features/sidebar/sidebarSlice'


export const store = configureStore({
  reducer: {
    scanner: scannerReducer,
    sidebar: sidebarReducer
  },
})