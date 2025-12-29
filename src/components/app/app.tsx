import React from "react";
import './app.css';
import { useEffect } from "react";
import LoadingSite from "../loading/loading";
import Intro from "../intro/intro";
import Start from "../start/start";
import Main from "../main/main";
import Modal from "../modal/modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setLoading } from "../reduser/reduser";

interface AppProps {};

const App: React.FC<AppProps> = (): React.JSX.Element => {

    const loading = useSelector((state: RootState) => state.aleksey.loading);

    const openAutorModal = useSelector((state: RootState) => state.aleksey.openAutorModal);

    const openImgModal = useSelector((state: RootState) => state.aleksey.openImgModal);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // setTimeout(() => {
            dispatch(setLoading(false));
        // }, 2000);
        
            if (openAutorModal || openImgModal) {
                document.body.style.overflow = "hidden";
              } else {
                document.body.style.overflow = "";
              }
          
              return () => {
                document.body.style.overflow = "";
              };
    }, [openAutorModal, openImgModal]);

    const showSite = (): React.JSX.Element => {
        if (loading) {
            return (
            <LoadingSite/>
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