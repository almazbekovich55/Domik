import React from "react";
import "./Favorite.scss";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { product } = useSelector((s) => s.mainReducer);
  const favorites = product.filter((el) => el.isFavorite);

  return (
    <div id="favorite">
      <div className="container">
        <h1 className="favorite__title">Избранное</h1>
        {favorites.length ? (
          <div className="favorite__list">
            {favorites.map((el) => (
              <div className="favorite__card" key={el._id}>
                <div className="favorite__image">
                  <img src={el.image} alt={el.title} />
                </div>
                <div className="favorite__info">
                  <h2>{el.title}</h2>
                  <p>до {el.people} человек</p>
                  <p>
                    Цена: <strong>{el.price}₽</strong> / сутки
                  </p>
                  <a href="#" className="favorite__link">
                    Подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="favorite__empty">Нет избранных товаров.</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;
