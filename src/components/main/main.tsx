import React from "react";
import './main.css';

const Main: React.FC = () => {
    return (
        <div className="main">
            <div className="aboutAutor" id="about"> 
                <div className="title">
                    Обо мне
                </div>
                <div className="description">
                    Меня зовут Алексей, я опытный фронтенд-разработчик. За моими плечами разработка
                    множества веб-сайтов <br /> различной сложности. Сегодня я предлагаю свои знания и навыки
                    для создания уникальных сайтов и приложений, <br /> отвечающих вашим потребностям
                    и интересам. Подробнее обо мне вы можете узнать на моем сайте резюме: <a href="https://striped-ajar-order.glitch.me" className="link" target="blank">Aleksey's resume</a>
                </div>
            </div>
            <div className="aboutTrade" id="services"> 
                <div className="tradeName">Услуги фриланса</div>
                <div className="descriptionOfTradeName"><p>Вы можете заказать у меня создание сайта за цену указанную ниже.</p></div>
                <div className="tradeOffers">
                    <div className="trade1">
                        <div className="nameOfTrade">Простой сайт</div>

                        <div className="descriptionOfTrade"><p>
                            Идеальный вариант, чтобы быстро и легко заявить о себе в интернете!
                            Включает в себя разработку до 2-х страниц с акцентом на красивую и удобную
                            подачу информации. Дизайн будет современным и адаптивным – отлично смотрится
                            на любом устройстве. Я помогу вам сделать так, чтобы сайт быстро загружался
                            и легко находился в поисковиках. Подходит для сайтов-визиток, личных страничек
                            или небольших портфолио, где главное – хорошо представить контент.
                        </p>
                        </div>
                        <div className="price">1000 руб.</div>
                    </div>
                    <div className="trade2">
                        <div className="nameOfTrade">Премиум сайт</div>

                        <div className="descriptionOfTrade">
                            Для тех, кто хочет, чтобы их сайт выглядел профессионально и работал безупречно
                            на всех устройствах! Создам для вас красивый и функциональный интерфейс сайта
                            с любым количеством страниц. Помогу настроить удобную навигацию и визуально
                            привлекательно представить ваш контент. Обеспечу быструю загрузку страниц и хорошую
                            оптимизацию для поисковиков. Подходит для больших проектов, требующих качественной и
                            современной реализации.
                        </div>
                        <div className="price">3000 руб.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main