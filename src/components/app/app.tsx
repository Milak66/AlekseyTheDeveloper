import React from "react";
import './app.css';
import Start from "../start/start";
import Main from "../main/main";
import Modal from "../modal/modal";
import { useState } from "react";

const App: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenOrCloseModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <div className="app">
            {openModal ? <Modal onOpenModal={handleOpenOrCloseModal}/> : null}
            <Start onOpenModal={handleOpenOrCloseModal}/> 
            <Main/>
        </div>
    )
}

export default App;