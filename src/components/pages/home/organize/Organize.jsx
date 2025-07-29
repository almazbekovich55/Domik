import React from "react";
import "./Organize.scss";
import organizeBg from "../../../../assets/images/bgServices.svg";
import buffet from "../../../../assets/images/buffet1.svg";
import chef from "../../../../assets/images/chef.svg";
import coctail from "../../../../assets/images/cocktail.svg";
import confestti from "../../../../assets/images/confetti.svg";
import transfer from "../../../../assets/images/transfer.svg";
import microphone from "../../../../assets/images/microphone.svg";

const Organize = () => {
  return (
    <section id="organize">
      <div className="container">
        <div className="organize">
          <div className="organize--title">
            <h1>Можем организовать для Вас</h1>
          </div>
          <div className="organize--content">
            <div className="organize--content__card">
              <img src={buffet} alt="" />
              <h3>Кейтеринг</h3>
            </div>
            <div className="organize--content__card">
              <img src={chef} alt="" />
              <h3>Выездной повар</h3>
            </div>
            <div className="organize--content__card">
              <img src={coctail} alt="" />
              <h3>Фуршет</h3>
            </div>
            <div className="organize--content__card">
              <img src={confestti} alt="" />
              <h3>Шоу программа</h3>
            </div>
            <div className="organize--content__card">
              <img src={transfer} alt="" />
              <h3>Трансфер</h3>
            </div>
            <div className="organize--content__card">
              <img src={microphone} alt="" />
              <h3>Мероприятия под ключ</h3>
            </div>
          </div>
          <div className="organize--btn">
            <button>Узнать подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organize;
