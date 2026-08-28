import React, { useState, useRef, useEffect } from "react";
import './loading.css';
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import alexey from '../../assets/alexeyIcon.jpg';
import { setLoading } from "../reduser/reduser";

interface LoadingProps {};

const Loading: React.FC<LoadingProps> = (): React.ReactNode => {
  const [openWebsite, setOpenWebsite] = useState<Boolean>(false);
  const textLang = useSelector((state: RootState) => state.aleksey.textLang); 
  const darkFunRef = useRef<HTMLImageElement>(null);
  let pos = 1;
  let posAround = 1;
  let directionUp = true;

  const dispatch = useDispatch<AppDispatch>();

  const stopLoading = () => {
    dispatch(setLoading(false));
  }

  useEffect(() => {
    const dark_fun = darkFunRef.current;

    if (!dark_fun) return;

    function loadingAnimation() {
      if (directionUp) {
        if (pos < 100) {
          pos += 2;
        } else {
          directionUp = false;
          pos -= 2;
        }
      } else {
        if (pos > 1) {
          pos -= 2;
        } else {
          directionUp = true;
          pos += 2;
        }
      }
      posAround += 3;
      dark_fun!.style.transform = `rotate(${posAround}deg)`;
      dark_fun!.style.bottom = pos + 'px';

      requestAnimationFrame(loadingAnimation);
    }

    loadingAnimation();

    setTimeout(() => {
      setOpenWebsite(true);
    }, 2000);

    return () => {
    };
  }, []);

  return (
    <div className="loading_place">
      <img className="alexiLoading" ref={darkFunRef} src={alexey} alt="" />
      {openWebsite ? <div className="loadingText" onClick={stopLoading}>{textLang.openWebsite}</div> : <div className="loadingText">{textLang.loadingText}</div>}
    </div>
  );
};

export default Loading;