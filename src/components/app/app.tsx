import React from "react";
import './app.css';
import { useEffect } from "react";
import Loading from "../loading/loading";
import Intro from "../intro/intro";
import Start from "../start/start";
import Main from "../main/main";
import Modal from "../modal/modal";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface AppProps {};

const App: React.FC<AppProps> = (): React.JSX.Element => {

    const loading = useSelector((state: RootState) => state.aleksey.loading);

    const openAutorModal = useSelector((state: RootState) => state.aleksey.openAutorModal);

    const openImgModal = useSelector((state: RootState) => state.aleksey.openImgModal);

    useEffect(() => {
    
        if (openAutorModal || openImgModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, []);

    const showSite = (): React.JSX.Element => {
        if (loading) {
            return (
            <Loading/>
            )
        } else {
            return (
                <div className="app">
                    <Start/> 
                    <Intro/>
                    {openAutorModal ? <Modal/> : null}
                    <Main/>
                </div>
            )
        }
    }

    return (
        <>
        {showSite()}
        </>
    )
}

export default App;