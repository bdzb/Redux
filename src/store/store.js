import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../compo/todoSlice'
export const store=configureStore({
  reducer:todoReducer
})
