import React, { useEffect, useRef } from "react";
import './start.css';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { writeText, writeFCText, onOpenMenuModal } from "../reduser/reduser";

interface StartProps {} 

const Start: React.FC<StartProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const displayText = useSelector((state: RootState) => state.aleksey.displayText); 
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

  const handleOpenModal = (): void => {
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
        <div className="action" onClick={() => scrollToSection('aboutAutor')}>Обо мне</div>
        <div className="action" onClick={() => scrollToSection('frilance')}>Фриланс</div>
        <div className="action" onClick={() => scrollToSection('portfolio')}>Портфолио</div>
      </div>
      )
    } else {
      return;
    }
  }

  useEffect(() => {
    const greeting = () => {
      if (i.current < textA.length) {
        const nextChar = textA.charAt(i.current);
        i.current++;

        dispatch(writeFCText(prev => prev + nextChar));

        timeoutId.current = setTimeout(greeting, speedGreeting);
      } else {
        timeoutId.current = setTimeout(toggleCursor, 500);
      }
    };

    greeting();

    return () => clearTimeout(timeoutId.current as ReturnType<typeof setTimeout>);

  }, []);

  return (
    <div className="start">
      <div className="startOfSite">
        <div className="name"><p>{displayText}</p></div>
        <div className="menu">
          <div className="titleOfSettings">
          <p onClick={handleOpenModal}>
          <span className="justText">Разделы</span> 
          <span className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg></span>
          </p>
          </div>
          {showModal()}
        </div>
      </div>
    </div>
  );
};

export default Start;