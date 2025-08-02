import React from "react";
import "./CategoryCard.scss";
import { FaBed, FaStar } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { GiWoodPile } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BiHeart, BiUser } from "react-icons/bi";
import Slider from "react-slick";

const CategoryCard = ({ el }) => {
  if (!el) return null;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => <span className="dot" />,
  };

  return (
    <div className="categoryCard">
      <div className="categoryCard__slider">
        <Slider {...settings}>
          {el?.house_images?.map((img, idx) => (
            <div className="categoryCard__slider-item" key={idx}>
              <img
                src={img.image || "/fallback.jpg"}
                alt={el?.title}
                className="slider-img"
              />
            </div>
          ))}
        </Slider>
        <div className="categoryCard__image--like">
          <BiHeart />
        </div>
      </div>

      <div className="categoryCard__info">
        <div className="categoryCard__info--top">
          <div>
            <h2>{el?.title || "—"}</h2>
            <p>{el?.address || "—"}</p>
          </div>
          <div className="categoryCard__info--top__people">
            <BiUser />
            до {el?.count_people || "?"}
          </div>
        </div>

        <ul className="categoryCard__info--features">
          <li>
            <FaBed />
            {el?.bathrooms_place || "?"} спальных мест
          </li>

          {el?.billiards && (
            <li>
              <GiPerspectiveDiceSixFacesRandom />
              Бильярд
            </li>
          )}

          

          {el?.bath_house && (
            <li>
              <GiWoodPile />
              Баня с вениками
            </li>
          )}

          {el?.swimming_pool && (
            <li>
              <MdPool />
              Бассейн
            </li>
          )}
        </ul>

        <div className="categoryCard__info--bottom">
          <h2>
            <FaStar />
            {el?.avg_rating ?? 5.0} ({el?.count_reviews} отзывов)
          </h2>
          <div className="categoryCard__info--bottom__price">
            <h1>от {el?.weekdays_price?.toLocaleString() || "—"} ₽</h1>
            <a>Подробнее</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
