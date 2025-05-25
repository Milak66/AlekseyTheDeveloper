import React from "react";
import './app.css';
import Start from "../start/start";
import Main from "../main/main";
import Modal from "../modal/modal";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const App: React.FC = () => {
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