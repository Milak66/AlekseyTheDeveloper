import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RusText, EngText } from '../languages/languagesInterfaces';
import { rusText, engText } from '../languages/languages';

const savedTextLang = localStorage.getItem('textLang');

interface InitialState {
    loading: boolean
    textLang: RusText | EngText;
    displayText: string;
    openLangModal: boolean,
    openMenuModal: boolean;
    openAutorModal: boolean;
    userData: string;
    sendDataLoading: boolean;
}

const initialState: InitialState = {
    loading: true,
    textLang: savedTextLang === 'rus' ? rusText : savedTextLang === 'eng' ? engText : engText,
    displayText: '',
    openLangModal: false,
    openMenuModal: false,
    openAutorModal: false,
    userData: '',
    sendDataLoading: false
}

const alekseyReducer = createSlice({
    name: 'reduser',
    initialState,
    reducers: {
     setLoading: (state) => {
        state.loading = !state.loading;
     },
     changeLang: (state, action: PayloadAction<'rus' | 'eng'>) => {
      if (action.payload === 'rus') {
         state.textLang = rusText;
      } else {
         state.textLang = engText;
      }
      localStorage.setItem('textLang', action.payload);
     },
     writeText: (state, action: PayloadAction<string>) => {
        state.displayText = action.payload;
     },
     appendChar: (state, action: PayloadAction<string>) => {
        state.displayText += action.payload;
     },
     onOpenLangModal: (state) => {
      state.openLangModal = !state.openLangModal;
     },
     onOpenMenuModal: (state) => {
        state.openMenuModal = !state.openMenuModal;
     },
     onOpenAutorModal: (state) => {
        state.openAutorModal = !state.openAutorModal;
     },
     setUserData: (state, action: PayloadAction<string>) => {
        state.userData = action.payload;
     },
     onSetDataLoading: (state) => {
      state.sendDataLoading = !state.sendDataLoading;
     },
    },
});

export const {
   setLoading,
   changeLang,
   writeText,
   appendChar,
   onOpenLangModal,
   onOpenMenuModal,
   onOpenAutorModal,
   setUserData,
   onSetDataLoading
} = alekseyReducer.actions;

export default alekseyReducer.reducer;