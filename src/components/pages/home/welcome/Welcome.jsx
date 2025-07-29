import "./Welcome.scss";
import bgHome from "../../../../assets/images/home-bg.png";
import Slider from "react-slick";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoVk } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTelegram2Fill } from "react-icons/ri";
import welcomeImg1 from "../../../../assets/images/welcome1.svg";
import welcomeImg2 from "../../../../assets/images/welcome2.svg";
import welcomeImg3 from "../../../../assets/images/welcome3.svg";
import { useState } from "react";
import React from "react";
import Header from "../../../layout/header/Header";

const Welcome = () => {
  const today = new Date().toISOString().split("T")[0];
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState("");
  const [priceRange, setPriceRange] = useState([13000, 150000]);

  const handleFromDateChange = (e) => {
    const value = e.target.value;
    setFromDate(value);
    if (toDate && value > toDate) {
      setToDate(value);
    }
  };

  const handleToDateChange = (e) => {
    const value = e.target.value;
    if (value >= fromDate) {
      setToDate(value);
    } else {
      alert("Дата отъезда не может быть раньше даты въезда.");
    }
  };

  const handleRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);

    if (index === 0 && newRange[0] > newRange[1]) {
      newRange[1] = newRange[0];
    }

    if (index === 1 && newRange[1] < newRange[0]) {
      newRange[0] = newRange[1];
    }

    setPriceRange(newRange);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const houseCategory = [
    { id: 1, image: welcomeImg1, title: "С бассейном" },
    { id: 2, image: welcomeImg2, title: "Семейные" },
    { id: 3, image: welcomeImg3, title: "Хиты продаж" },
  ];

  return (
    <div style={{ background: `url("${bgHome}") no-repeat bottom/cover` }}>
      <section id="welcome">
        <div className="container">
          <div className="welcome">
            <div className="welcome--left">
              <h1>
                Аренда коттеджей <br /> и домов в Москве и МО
              </h1>
              <p>
                Найдите идеальный вариант сами <br /> или предоставьте это нам
              </p>
              <div className="welcome--left__category">
                <Slider {...settings}>
                  {houseCategory.map((el) => (
                    <div className="welcome--left__category--card" key={el.id}>
                      <img src={el.image} alt="img" />
                      <h4>{el.title}</h4>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="welcome--left__icons">
                <a href="#" className="youtube">
                  <AiOutlineYoutube />
                </a>
                <a href="#" className="inst">
                  <IoLogoInstagram />
                </a>
                <a href="#" className="vk">
                  <BiLogoVk />
                </a>
                <a href="#" className="whats">
                  <MdWhatsapp />
                </a>
                <a href="#" className="teleg">
                  <RiTelegram2Fill />
                </a>
              </div>
            </div>
            <div className="booking-filter">
              <div className="booking-filter__field">
                <label>Въезд от</label>
                <input
                  type="date"
                  value={fromDate}
                  min={today}
                  onChange={handleFromDateChange}
                />
              </div>
              <div className="booking-filter__field">
                <label>Отъезд до</label>
                <input
                  type="date"
                  value={toDate}
                  min={fromDate}
                  onChange={handleToDateChange}
                />
              </div>
              <div className="booking-filter__field">
                <label>Количество человек</label>
                <input type="number" min="1" placeholder="10" />
              </div>
              <div className="price-range-slider">
                <input
                  type="range"
                  min="13000"
                  max="150000"
                  value={priceRange[0]}
                  onChange={(e) => handleRangeChange(0, e.target.value)}
                  className="thumb thumb--left"
                />
                <input
                  type="range"
                  min="13000"
                  max="150000"
                  value={priceRange[1]}
                  onChange={(e) => handleRangeChange(1, e.target.value)}
                  className="thumb thumb--right"
                />
                <div className="slider">
                  <div className="track" />
                  <div
                    className="range"
                    style={{
                      left: `${
                        ((priceRange[0] - 13000) / (150000 - 13000)) * 100
                      }%`,
                      right: `${
                        100 - ((priceRange[1] - 13000) / (150000 - 13000)) * 100
                      }%`,
                    }}
                  />
                </div>
                <div className="labels">
                  <span>{priceRange[0].toLocaleString()} ₽</span>
                  <span>{priceRange[1].toLocaleString()} ₽</span>
                </div>
              </div>
              <button className="booking-filter__submit">Найти</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
