import React from "react";
import "./ProductCard.scss";
import { FaBed, FaTableTennis, FaSpa, FaSwimmingPool } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { TiHeartFullOutline } from "react-icons/ti";
import { RiUserLine } from "react-icons/ri";
import bed from "../../../assets/images/icon_bed.svg";
import cube from "../../../assets/images/icon_entertainment.svg";
import banya from "../../../assets/images/icon_banya.svg";
import bas from "../../../assets/images/icon_waterpool.svg";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__image">
        <img src={el.image} alt="Домик" />
        <div className="card__capacity">
          <RiUserLine /> до {el.people}
        </div>
        <button className="card__like">
          <CiHeart />
        </button>
      </div>

      <div className="card__content">
        <h2 className="card__title">{el.title}</h2>

        <ul className="card__features">
          <li>
            <img src={bed} alt="img" /> 5 спальных мест
          </li>
          <li>
            <img src={cube} alt="img" /> Настольный теннис
          </li>
          <li>
            <img src={banya} alt="img" /> Баня
          </li>
          <li>
            <img src={bas} alt="img" /> Бассейн
          </li>
        </ul>

        <div className="card__footer">
          <span className="card__price">
            <strong>
              {" "}
              от <span>{el.price}</span>₽ / сутки
            </strong>
          </span>
          <a href="#" className="card__link">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
