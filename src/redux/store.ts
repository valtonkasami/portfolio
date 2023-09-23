import { configureStore } from '@reduxjs/toolkit'

import aboutReducer from './features/aboutSlice';
import boxReducer from './features/boxSlice';

export const store = configureStore({
    reducer: {
        aboutSlice: aboutReducer,
        boxSlice: boxReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
