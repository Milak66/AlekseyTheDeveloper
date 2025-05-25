import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    displayText: string;
    openMenuModal: boolean;
    openAutorModal: boolean;
}

const initialState: InitialState = {
    displayText: '',
    openMenuModal: false,
    openAutorModal: false
}

const alekseyReducer = createSlice({
    name: 'reduser',
    initialState,
    reducers: {
     writeText: (state, action: PayloadAction<(string)>) => {
        state.displayText = action.payload;
     },
     writeFCText: (state, action: PayloadAction<(prev: string) => string>) => {
        state.displayText = action.payload(state.displayText);
     },
     onOpenMenuModal: (state) => {
        state.openMenuModal = !state.openMenuModal;
     },
     onOpenAutorModal: (state) => {
        state.openAutorModal = !state.openAutorModal;
     }
    },
});
  
export const {
    writeText,
    writeFCText,
    onOpenMenuModal,
    onOpenAutorModal
} = alekseyReducer.actions;
  
export default alekseyReducer.reducer;