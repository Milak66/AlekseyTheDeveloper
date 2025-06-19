import React, { useEffect } from "react";
import './main.css';
import { onOpenAutorModal } from "../reduser/reduser";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";

interface MainProps {} 

const Main: React.FC<MainProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const slider = document.querySelector('.slider') as HTMLDivElement | null;
    const containerOfSlides = document.querySelector('.containerOfSlides') as HTMLDivElement | null;
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>;
    const next = document.querySelector('.next') as HTMLDivElement;
    const back = document.querySelector('.back') as HTMLDivElement;
    const counter = document.querySelector('.counter') as HTMLSpanElement;
    const redBlocks1 = document.querySelector('.redBlocks1') as HTMLDivElement;
    const redBlocks2 = document.querySelector('.redBlocks2') as HTMLDivElement;
    
    function createBlock1(blockName: string): HTMLDivElement {
      const block = document.createElement('div');
      block.classList.add(blockName);
      redBlocks1.append(block);
      block.style.willChange = 'transform';
      return block;
    }

    function createBlock2(blockName: string): HTMLDivElement {
      const block = document.createElement('div');
      block.classList.add(blockName);
      redBlocks2.append(block);
      block.style.willChange = 'transform';
      return block;
    }

    const block1 = createBlock1('redBlock');
    const block2 = createBlock1('redBlock');
    const block3 = createBlock1('redBlock');
    const block4 = createBlock2('redBlock');
    const block5 = createBlock2('redBlock');
    const block6 = createBlock2('redBlock');

    const placeHeight = redBlocks1.getBoundingClientRect().height;

    interface Blocks {
      element: HTMLDivElement;
      pos: number;
      speed: number;
      direction: number;
    }

    const blocks: Blocks[] = [
      {
        element: block1,
        pos: Math.random() * placeHeight,
        speed: 2,
        direction: 1
      },
      {
        element: block2,
        pos: Math.random() * placeHeight,
        speed: 2,
        direction: 1
      },
      {
        element: block3,
        pos: Math.random() * placeHeight,
        speed: 2,
        direction: 1
      },
      {
        element: block4,
        pos: Math.random() * placeHeight,
        speed: 2,
        direction: 1
      },
      {
        element: block5,
        pos: Math.random() * placeHeight,
        speed: 2,
        direction: 1
      },
      {
        element: block6,
        pos: Math.random() * placeHeight,
        speed: 2,
        direction: 1
      },
    ];

    let rotation = 0;
    const rotationSpeed = 0.01;

    const animate = () => {
      blocks.forEach(block => {
        block.pos += block.direction * block.speed;
        rotation += rotationSpeed;
        block.element.style.bottom = block.pos + 'px';
        block.element.style.transform = `rotate(${rotation}rad)`;

        if (block.pos > redBlocks1.getBoundingClientRect().height) {
          block.pos = -block.element.getBoundingClientRect().height;
        }
      });
      requestAnimationFrame(animate);
    };

    animate();

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

  return (
    <div className="main">
      <div className="redBlocks1">
      </div>
      <div className="content">
          <div className="aboutAutor">
            <div className="autorDescription">
              <div className="title">
                Обо мне
              </div>
              <div className="description">
                Меня зовут Алексей, я опытный фронтенд-разработчик. За моими плечами разработка множества веб-сайтов различной сложности.
                Я владею версткой – HTML и CSS и могу создавать сайты, несколькими языками программирования – JavaScript и TypeScript, с помощью которых могу добавлять сайтам функциональность, а также хорошо знаю библиотеку React для создания приложений.
              </div>
            </div>
            <div className="slider">
              <div className="titleAboutSlider">
                Мой стек <span className="counter"></span><span>/6</span>
              </div>
              <div className="next">
                A
              </div>
              <div className="containerOfSlides">
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fhtml.jpg?1731419769006"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fcss.webp?1731419777973"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fjs.jpg?1731419784875"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2FTypeScript.webp?1742461420078"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2FReact.png?1735986150454"
                    alt="" />
                </div>
                <div className="slide">
                  <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2Fredux.webp?1744810757777"
                    alt="" />
                </div>
              </div>
              <div className="back">
                A
              </div>
            </div>
          </div>
          <div className="frilance">
            <div className="frilanceTitle">
              <div className="frTitle">
                Вы можете заказать у меня создание простого или сложного сайта за цену указаную ниже.
              </div>
            </div>
            <div className="aboutTrade">
              <div className="trade1">
                <div className="titleOfTrade">Простой сайт</div>
                <div className="descriptionOfTrade">
                  Хочешь стильный и лаконичный сайт, который будет выглядеть круто и работать быстро? Сделаю для тебя сайт, в котором будет только самое необходимое: информация о тебе, твои контакты и примеры работ (если есть). Никаких лишних деталей, только чистый дизайн и удобство для посетителей.
                </div>
              </div>
              <div className="trade2">
                <div className="titleOfTrade">Сложный сайт</div>
                <div className="description">
                  <div className="descriptionOfTrade">
                    Хочешь не просто сайт-визитку, а целый онлайн-мир? Сделаю для тебя расширенный многостраничный сайт с индивидуальным дизайном, где ты сможешь создать всё, что угодно: блог, портфолио, сайт для своей команды или даже интерактивное приложение с разными разделами и возможностями.
                  </div>
                </div>
              </div>
            </div>
            <div className="meetAutor">
              <div>
                <button className="meetAutorBtn" onClick={handleOpenModal}>Связатся с автором</button>
              </div>
            </div>
            </div>
            <div className="portfolio">
              <div className="portfolioTitle">
              <div className="prtTitle">
                А здесь представлены некоторые из моих работ.
              </div>
              </div>
              <div className="portfolioWorks">
                <div className="work">
                <a className="link" href="https://plans-for-today.vercel.app" target="blank">
                  <div className="workContent">
                    <img className="photo" src='https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-04-16%20%D0%B2%2014.25.00.png?1744802719427' alt="" />
                  </div>
                  <div className="workTitle">
                    Планы на день
                  </div>
                  </a>
                </div>
                <div className="work">
                <a className="link" href="https://countries-app-two-xi.vercel.app" target="blank">
                  <div className="workContent">
                    <img className="photo" src="https://cdn.glitch.global/b10fa02e-f884-4559-ad0f-54ac66f86f79/thumbnails%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-04-25%20%D0%B2%2010.46.55.png?1745567236666" alt="" />
                  </div>
                  <div className="workTitle">
                    Список стран
                  </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="redBlocks2">
          </div> 
      </div>
  );
};

export default Main;