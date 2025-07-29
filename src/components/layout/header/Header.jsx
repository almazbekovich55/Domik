import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo_light.svg";
import dark from "../../../assets/images/logo_dark.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { ImLocation } from "react-icons/im";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const nav = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img
              src={scrolled ? dark : logo}
              alt="img"
              onClick={() => nav("/")}
            />
            <div className="header--logo__location">
              <ImLocation className="icon" />
              <span>Москва</span>
            </div>
            <button onClick={() => nav("/catalog")}>Каталог</button>
          </div>
          <div className="header--nav">
            <NavLink to={"/"}>Частые вопросы</NavLink>
            <NavLink to={"/"}>Сотрудничество</NavLink>
          </div>
          <div className="header--contact">
            <a onClick={() => nav("/auth")}>
              <CiUser />
            </a>
            <a onClick={() => nav("/favorite")}>
              <CiHeart />
            </a>
            <div className="header--contact__search">
              <a>
                <CiSearch className="search" />
              </a>
              <h4>Поиск по названию</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
