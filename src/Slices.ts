import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InfoType = { 
    id: number; 
    name: string;
    phone: string;
    email: string;
    career: string;
}; 

const initialState: { info: InfoType[] } = {
    info: [],
};

const Slice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        addInfo: (state, action: PayloadAction<InfoType>) => {
            state.info.push(action.payload);
        },
        removeInfo: (state, action: PayloadAction<number>) => {
            state.info = state.info.filter(item => item.id !== action.payload);
        },
    },
});

export const { addInfo, removeInfo } = Slice.actions;
export default Slice.reducer;
