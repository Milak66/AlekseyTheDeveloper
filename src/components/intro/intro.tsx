import React from "react";
import './intro.css';
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface IntroProps {};

const Intro: React.FC<IntroProps> = (): React.JSX.Element => {
    const textLang = useSelector((state: RootState) => state.aleksey.textLang);
    const introAnimation = useRef<HTMLDivElement>(null);
    let posAround = 1;

    useEffect(() => {
        const animationDiv = introAnimation.current;

        function moveAround() {
            posAround += 0.5;
            animationDiv!.style.transform = `rotate(${posAround}deg)`;

            requestAnimationFrame(moveAround);
        }

        moveAround();
    }, []);

    return (
        <div className="intro">
            <div className="introGretting">
            <div className="autorName">
                <p className="nameText">
                    {textLang.greeting}
                </p>
            </div>
            <div className="introAnimation" ref={introAnimation}>
                <div className="codeBlock">0</div>
                <div className="codeBlock">1</div>
                <div className="codeBlock">0</div>
                <div className="codeBlock">1</div>
                <div className="codeBlock">0</div>
                <div className="codeBlock">1</div>
            </div>
            </div>
        </div>
    )
}

export default Intro;