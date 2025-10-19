import React, { use } from "react";
import './app.css';
import { useEffect } from "react";
import Start from "../start/start";
import Main from "../main/main";
import Modal from "../modal/modal";
import LoadingSite from "../loading/loading";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setLoading } from "../reduser/reduser";

interface AppProps {};

const App: React.FC<AppProps> = (): React.JSX.Element => {

    const loading = useSelector((state: RootState) => state.aleksey.loading);

    const openAutorModal = useSelector((state: RootState) => state.aleksey.openAutorModal);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setLoading())
    }, []);

    const showSite = (): React.JSX.Element => {
        if (loading) {
            return (
                <LoadingSite/>
            )
        } else {
            return (
                <div className="app">
                    {openAutorModal ? <Modal/> : null}
                    <Start/> 
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