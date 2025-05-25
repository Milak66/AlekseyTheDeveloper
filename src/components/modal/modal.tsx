import React from "react";
import './modal.css';
import { useDispatch } from "react-redux";
import { onOpenAutorModal } from "../reduser/reduser";

interface ModalProps {} 

const Modal: React.FC<ModalProps> = () => {
  const dispatch = useDispatch(); 

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(onOpenAutorModal()); 
    }
  };

  return (
    <div className="modal" onClick={handleModalClick}>
      <div className="modalValue">
        <div className="textToUser">
          <p>Напишите мне чтобы мы могли обсудить ваш заказ</p>
        </div>
        <div className="textToUser">
          <span>Ниже представлены способы связи со мной</span>
        </div>
        <div className="contacts">
          <ul>
            <li>Почта: alexkuznez88@gmail.com</li>
            <li>Telegram: @Aleksey_kuznez</li>
            <li>vk: <a className="link" href="https://vk.com/id746051422" target="blank">Мой профиль</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;