import React from "react";
import "./ProductCard.scss";
import { useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import bed from "../../../assets/images/icon_bed.svg";
import cube from "../../../assets/images/icon_entertainment.svg";
import banya from "../../../assets/images/icon_banya.svg";
import bas from "../../../assets/images/icon_waterpool.svg";
import { NavLink } from "react-router-dom";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__image">
        <img src={el.house_images[1]?.image} alt="Домик" />
        <div className="card__capacity">
          <RiUserLine /> до {el.count_people}
        </div>
        <button className="card__like">
          <CiHeart />
        </button>
      </div>

      <div className="card__content">
        <h2 className="card__title">{el.title}</h2>

        <ul className="card__features">
          <li>
            <img src={bed} alt="img" /> {el.bathroom} спальных мест
          </li>
          {el.table_tennis && (
            <li>
              <img src={cube} alt="img" /> Настольный теннис
            </li>
          )}
          {el.billiards && (
            <li>
              <img src={cube} alt="img" /> Бильярд
            </li>
          )}
          {el.bath_house && (
            <li>
              <img src={banya} alt="img" /> Баня
            </li>
          )}
          {el.sauna && (
            <li>
              <img src={banya} alt="img" /> Сауна
            </li>
          )}
          {el.swimming_pool && (
            <li>
              <img src={bas} alt="img" /> Бассейн
            </li>
          )}
        </ul>

        <div className="card__footer">
          <span className="card__price">
            <strong>
              от <span>{el.weekdays_price}</span>₽ / сутки
            </strong>
          </span>
          <NavLink className="card__link">Подробнее</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
