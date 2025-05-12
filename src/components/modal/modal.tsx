import React from "react";
import './modal.css';
interface ModalProps {
    onOpenModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
    const { onOpenModal } = props;


    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onOpenModal();
        }
    };

    return (
        <div className="modal" onClick={handleModalClick}>
            <div className="modalValue">
                <div className="textToUser1">
                    Начнем создавать ваш сайт
                </div>

                <div className="textToUser2">
                    Свяжитесь со мной и мы обсудим ваш заказ. Постараюсь ответить вам как можно скорее.
                </div>

                <div className="textToUser3">
                    Контакты
                </div>

                <div className="contacts">
                    <div>Почта: alexkuznez88@gmail.com</div>
                    <div>VK: <a href="https://vk.com/id746051422" className="link" target="blank">Профиль</a></div>
                    <div>Telegram: @Aleksey_kuznez</div>
                </div>

                <div className="send">
                    <button className="sendBtn" onClick={onOpenModal}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;