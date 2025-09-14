import React from "react";
import './app.css';
import Start from "../start/start";
import Main from "../main/main";
import Modal from "../modal/modal";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface AppProps {};

const App: React.FC<AppProps> = () => {
    const openAutorModal = useSelector((state: RootState) => state.aleksey.openAutorModal);

    return (
        <div className="app">
            {openAutorModal ? <Modal/> : null}
            <Start/> 
            <Main/>
        </div>
    )
}

export default App;