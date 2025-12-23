import React, { useEffect, useRef } from "react";
import './start.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { changeLang, writeText, appendChar, onOpenLangModal, onOpenMenuModal } from "../reduser/reduser";
import planet from '../../assets/planet.png';

interface StartProps {} 

const Start: React.FC<StartProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const displayText = useSelector((state: RootState) => state.aleksey.displayText); 
  const textLang = useSelector((state: RootState) => state.aleksey.textLang); 
  const openLangModal = useSelector((state: RootState) => state.aleksey.openLangModal); 
  const openMenuModal = useSelector((state: RootState) => state.aleksey.openMenuModal); 
  const textA = 'Aleksey the developer';
  const textB = '|';
  const speedGreeting = 100;
  const i = useRef(0);
  const showCursor = useRef(true);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleCursor = (): void => {
    showCursor.current = !showCursor.current;
    dispatch(writeText(textA + (showCursor.current ? textB : '')));
    timeoutId.current = setTimeout(toggleCursor, 500);
  };

  useEffect(() => {
    const greeting = () => {
      if (i.current < textA.length) {
        const nextChar = textA.charAt(i.current);
        i.current++;
        
        dispatch(appendChar(nextChar));

        timeoutId.current = setTimeout(greeting, speedGreeting);
      } else {
        timeoutId.current = setTimeout(toggleCursor, 500);
      }
    };

    greeting();

    return () => clearTimeout(timeoutId.current as ReturnType<typeof setTimeout>);

  }, []);

  const handleChangeLang = (lang: 'rus' | 'eng') => {
    dispatch(changeLang(lang));
  }

  const showLang = () => {
    if (openLangModal) {
      return (
        <div className="modalLang">
            <div className="language">
            <button className="langBtn" 
            onClick={() => handleChangeLang('rus')}>{textLang.langRus}</button>
            </div>
            <div className="language">
            <button className="langBtn" 
            onClick={() => handleChangeLang('eng')}>{textLang.langEng}</button>
            </div>
        </div>
    )
    } else {
      return;
    }
  }

  const handleOpenLangModal = (): void => {
    dispatch(onOpenLangModal());
  }

  const hardOpenLangModal = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      dispatch(onOpenLangModal());
    }
  }

  const handleOpenMenuModal = (): void => {
    dispatch(onOpenMenuModal());
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`.${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      dispatch(onOpenMenuModal()); 
    }
  };


  const showModal = () => {
    if (openMenuModal) {
      return (
        <div className="options">
        <div className="action" onClick={() => scrollToSection('main')}>{textLang.route1}</div>
        <div className="action" onClick={() => scrollToSection('frilance')}>{textLang.route2}</div>
        <div className="action" onClick={() => scrollToSection('portfolio')}>{textLang.route3}</div>
      </div>
      )
    } else {
      return;
    }
  }

  return (
    <div onClick={hardOpenLangModal}>
    <div className="start">
      <div className="startOfSite">
        <div className="name">{displayText}</div>
        <div className="planet" onClick={handleOpenLangModal}>
          <img className="planetImg" src={planet} alt=""/>
          </div>
      </div>
      <div className="menu">
          <div className="titleOfSettings" onClick={handleOpenMenuModal}>
          {textLang.routesTitle}
          </div>
          {showModal()}
      </div>
    </div>
    {showLang()}
    </div>
  );
};

export default Start;