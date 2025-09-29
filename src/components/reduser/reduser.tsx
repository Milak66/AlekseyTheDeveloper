import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    displayText: string;
    openMenuModal: boolean;
    openAutorModal: boolean;
    userData: string;
}

const initialState: InitialState = {
    displayText: '',
    openMenuModal: false,
    openAutorModal: false,
    userData: ''
}

const alekseyReducer = createSlice({
    name: 'reduser',
    initialState,
    reducers: {
     writeText: (state, action: PayloadAction<(string)>) => {
        state.displayText = action.payload;
     },
     appendChar: (state, action: PayloadAction<string>) => {
        state.displayText += action.payload;
     },
     onOpenMenuModal: (state) => {
        state.openMenuModal = !state.openMenuModal;
     },
     onOpenAutorModal: (state) => {
        state.openAutorModal = !state.openAutorModal;
     },
     setUserData: (state, action: PayloadAction<(string)>) => {
        state.userData = action.payload;
     }
    },
});
  
export const {
    writeText,
    appendChar,
    onOpenMenuModal,
    onOpenAutorModal,
    setUserData
} = alekseyReducer.actions;
  
export default alekseyReducer.reducer;