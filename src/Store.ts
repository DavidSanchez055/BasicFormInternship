import {configureStore} from '@reduxjs/toolkit';
import infoReducer from './Slices.ts';

export const Store = configureStore({
    reducer: {
        info: infoReducer,
        
    }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;