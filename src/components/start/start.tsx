import React, { useState, useEffect, useRef } from "react";
import './start.css';

interface StartProps {
  onOpenModal: () => void;
}

const Start: React.FC<StartProps> = (props) => {
  const textA = 'Aleksey the developer';
  const textB = '|';
  const speedGreeting = 100;
  const [displayText, setDisplayText] = useState('');
  const i = useRef(0);
  const showCursor = useRef(true);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const toggleCursor = () => {
    showCursor.current = !showCursor.current; 
    setDisplayText(textA + (showCursor.current ? textB : '')); 
    timeoutId.current = setTimeout(toggleCursor, 500);  
  };
  useEffect(() => {
    const greeting = () => {
      if (i.current < textA.length) {
        const nextChar = textA.charAt(i.current);
        i.current++;

        setDisplayText(prev => prev + nextChar);

        timeoutId.current = setTimeout(greeting, speedGreeting);
      } else {
        timeoutId.current = setTimeout(toggleCursor, 500);
      }
    };

    greeting();

    return () => clearTimeout(timeoutId.current as NodeJS.Timeout);

  }, []);

  const {onOpenModal} = props;


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="start">
      <div className="menuOfSite">
        <div className="name">{displayText}</div>
        <div className="menu">
        <div className="action" onClick={() => scrollToSection('about')}>Обо мне</div>
        <div className="action" onClick={() => scrollToSection('services')}>Услуги фриланса</div>
          <div className="meetAutor">
            <button className="meetAutorBtn" onClick={onOpenModal}>Заказать сайт</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Start;