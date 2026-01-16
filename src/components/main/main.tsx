import React, { useEffect } from "react";
import './main.css';
import { onOpenAutorModal, onOpenImgModal, onWriteImgUrl} from "../reduser/reduser";
import { RootState, AppDispatch } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import plainWork1 from '../../assets/plainWork1.png';
import plainWork2 from '../../assets/plainWork2.png';
import plainWork3 from '../../assets/plainWork3.png';
import htmlPic from '../../assets/html.png';
import cssPic from '../../assets/css.png';
import jsPic from '../../assets/js.png';
import tsPic from '../../assets/ts.png';
import reactPic from '../../assets/react.png';
import reduxPic from '../../assets/redux.png';
import nodeJsPic from '../../assets/nodeJs.png';
import nextJsPic from '../../assets/nextJs.png';

interface MainProps {} 

const Main: React.FC<MainProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const textLang = useSelector((state: RootState) => state.aleksey.textLang);

  const openImgModal = useSelector((state: RootState) => state.aleksey.openImgModal);

  const imgUrl = useSelector((state: RootState) => state.aleksey.imgUrl);

  useEffect(() => {
    const slider = document.querySelector('.slider') as HTMLDivElement | null;
    const containerOfSlides = document.querySelector('.containerOfSlides') as HTMLDivElement | null;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;
    const next = document.querySelector('.next') as HTMLDivElement;
    const back = document.querySelector('.back') as HTMLDivElement;
    const counter = document.querySelector('.counter') as HTMLSpanElement;
    const counterGlobal = document.querySelector('.counterGlobal') as HTMLSpanElement;
    const purpleBlocks1 = document.querySelector('.purpleBlocks1') as HTMLDivElement;
    const purpleBlocks2 = document.querySelector('.purpleBlocks2') as HTMLDivElement;
    
    function createBlock1(): HTMLDivElement {
      const block = document.createElement('div');
      
      block.classList.add('purpleBlock');

      const variable = Math.random() < 0.5 ? 0 : 1;

      block.textContent = variable.toString();

      purpleBlocks1.append(block);
      block.style.willChange = 'transform';
      return block;
    }

    function createBlock2(): HTMLDivElement {
      const block = document.createElement('div');

      block.classList.add('purpleBlock');

      const variable = Math.random() < 0.5 ? 0 : 1;

      block.textContent = variable.toString();

      purpleBlocks2.append(block);
      block.style.willChange = 'transform';
      return block;
    }

    const windowWidth = window.innerWidth;

    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    function animation() {
      if (windowWidth > 800 && !isMobileDevice) {
        purpleBlocks1.innerHTML = '';
        purpleBlocks2.innerHTML = '';
    
        const block1 = createBlock1();
        const block2 = createBlock1();
        const block3 = createBlock1();
        const block4 = createBlock2();
        const block5 = createBlock2();
        const block6 = createBlock2();
    
        interface Blocks {
          element: HTMLDivElement;
          posUp: number;
          posAround: number;
          move: boolean;
        }
    
        const blocks: Blocks[] = [
          {
            element: block1,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block2,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block3,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block4,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block5,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block6,
            posUp: 1,
            posAround: 1,
            move: true
          }
        ];
    
        const animate = () => {
          blocks.forEach(block => {
            if (block.move) {
              if (block.posUp < 100) {
                block.posUp += 1.5;
              } else {
                block.move = false;
                block.posUp -= 1.5;
              }
            } else {
              if (block.posUp > 1) {
                block.posUp -= 1.5;
              } else {
                block.move = true;
                block.posUp += 1.5;
              }
            }
    
            block.posAround += 2;
    
            block.element.style.transform = `rotate(${block.posAround}deg)`;
            block.element.style.bottom = `${block.posUp}px`;
          });
          requestAnimationFrame(animate);
        };
    
        animate();
      } else {
        purpleBlocks1.innerHTML = '';
        purpleBlocks2.innerHTML = '';
    
        const block1 = createBlock1();
        const block2 = createBlock1();
        const block3 = createBlock1();
        const block4 = createBlock1();
        const block5 = createBlock2();
        const block6 = createBlock2();
        const block7 = createBlock2();
        const block8 = createBlock2();
    
        interface Blocks {
          element: HTMLDivElement;
          posUp: number;
          posAround: number;
          move: boolean;
        }
    
        const blocks: Blocks[] = [
          {
            element: block1,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block2,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block3,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block4,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block5,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block6,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block7,
            posUp: 1,
            posAround: 1,
            move: true
          },
          {
            element: block8,
            posUp: 1,
            posAround: 1,
            move: true
          }
        ];
    
        const animate = () => {
          blocks.forEach(block => {
            if (block.move) {
              if (block.posUp < 100) {
                block.posUp += 1.5;
              } else {
                block.move = false;
                block.posUp -= 1.5;
              }
            } else {
              if (block.posUp > 1) {
                block.posUp -= 1.5;
              } else {
                block.move = true;
                block.posUp += 1.5;
              }
            }
    
            block.posAround += 2;
    
            block.element.style.transform = `rotate(${block.posAround}deg)`;
            block.element.style.bottom = `${block.posUp}px`;
          });
          requestAnimationFrame(animate);
        };
    
        animate();
      }
    }

    animation();

    if (slider && containerOfSlides && slides.length > 0) {
      let slideIndex = 1;

      function showSlide(index: number) {
        if (index > slides.length) {
          slideIndex = 1;
        } else if (index < 1) {
          slideIndex = slides.length;
        }

        slides.forEach(slide => {
          (slide as HTMLDivElement).style.display = 'none';
        });

        if (slides[slideIndex - 1]) {
          (slides[slideIndex - 1] as HTMLDivElement).style.display = 'block';
        }

        counter.textContent = `${slideIndex}`;
        counterGlobal.textContent = `/${slides.length}`
      };

      showSlide(slideIndex);

      function plusSlides(num: number) {
        showSlide(slideIndex += num)
      }

      next.addEventListener('click', () => {
        plusSlides(1);
      });
      back.addEventListener('click', () => {
        plusSlides(-1);
      });
    }

  }, []);

  function handleOpenModal() {
    dispatch(onOpenAutorModal());
  }

  function handleOpenImgModal() {
    dispatch(onOpenImgModal());
  }

  function handleCloseImgModal(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      dispatch(onOpenImgModal());
    }
  }

  interface ImgProps {};

  const ImgModal: React.FC<ImgProps> = () => {

    return (
      <div className="imgModalPlace" onClick={handleCloseImgModal}>
        <div className="imgModal">
          <img className="imgModalPic" src={imgUrl} alt="" />
        </div>
      </div>
    )
  }

  function handleWriteImgUrl(img: string) {
    dispatch(onWriteImgUrl(img))
  }
  
  return (
    <div className="main">
      <div className="purpleBlocks1">
      </div>
      <div className="content">
          <div className="aboutAutor">
            <div className="autorDescription">
              <div className="title">
                {textLang.aboutAutorTitle}
              </div>
              <div className="description">
                {textLang.aboutAutorText}
              </div>
            </div>
            <div className="slider">
              <div className="titleAboutSlider">
                {textLang.slidertitle} <span className="counter"></span><span className="counterGlobal"></span>
              </div>
              <div className="next">
                +
              </div>
              <div className="containerOfSlides">
                <div className="slide">
                  <img className="photo" src={htmlPic}
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src={cssPic}
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src={jsPic}
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src={tsPic}
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src={reactPic}
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src={reduxPic}
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src={nodeJsPic}
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src={nextJsPic}
                    alt="" />
                </div>
              </div>
              <div className="back">
                -
              </div>
            </div>
          </div>
          <div className="frilance">
            <div className="frilanceTitle">
              <div className="frTitle">
                {textLang.frilanceTitle}
              </div>
            </div>
            <div className="aboutTrade">
              <div className="trade1">
                <div className="titleOfTrade">{textLang.tradeTitle1}</div>
                <div className="descriptionOfTrade">
                  {textLang.tradeDescription1}
                </div>
                <div className="price">
                  <p>{textLang.price1}</p>
                </div>
              </div>
              <div className="trade2">
                <div className="titleOfTrade">{textLang.tradeTitle2}</div>
                <div className="description">
                  <div className="descriptionOfTrade">
                    {textLang.tradeDescription2}
                  </div>
                </div>
                <div className="price">
                  <p>{textLang.price2}</p>
                </div>
              </div>
            </div>
            <div className="meetAutor">
              <div>
                <button className="meetAutorBtn" onClick={handleOpenModal}>{textLang.meetWithAutorText}</button>
              </div>
            </div>
            </div>
            <div className="portfolio">
            {openImgModal && <ImgModal/>}
              <div className="portfolioTitle">
              <div className="prtTitle">
                {textLang.portfolioTitle}
              </div>
              </div>
              <div className="portfolioPlainWorks">
                <div className="plainWork" onClick={() => {
                  handleOpenImgModal();
                  handleWriteImgUrl(plainWork1);
                  }}>
                  <img className="plainImg" src={plainWork1} alt="" />
                </div>
                <div className="plainWork" onClick={() => {
                  handleOpenImgModal();
                  handleWriteImgUrl(plainWork2);
                  }}>
                  <img className="plainImg" src={plainWork2} alt="" />
                </div>
                <div className="plainWork" onClick={() => {
                  handleOpenImgModal();
                  handleWriteImgUrl(plainWork3);
                  }}>
                  <img className="plainImg" src={plainWork3} alt="" />
                </div>
              </div>
              <div className="portfolioWorks">
                <div className="work">
                <a className="link" href="https://click-race-nine.vercel.app" target="blank">
                  <div className="workContent1">
                  </div>
                  <div className="workTitle">
                    Click race
                  </div>
                  </a>
                </div>
                <div className="work">
                <a className="link" href="https://plans-for-today.vercel.app" target="blank">
                  <div className="workContent2">
                  </div>
                  <div className="workTitle">
                    Plans for today
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="purpleBlocks2">
          </div> 
      </div>
  );
};

export default Main;