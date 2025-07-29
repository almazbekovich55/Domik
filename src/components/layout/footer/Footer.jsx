import React from "react";
import "./Footer.scss";
import footerImg from "../../../assets/images/logo1.svg";
import { LiaYoutube } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoVk } from "react-icons/bi";
import { MdWhatsapp } from "react-icons/md";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTelegram2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--title">
            <img src={footerImg} alt="img" />
            <h4>
              Политика конфиденциальности <br />
              Согласие на обработку персональных данных
            </h4>
          </div>
          <div className="footer--nav">
            <h2>Каталог</h2>
            <NavLink>С бассейном</NavLink>
            <NavLink>Семейные и уютные</NavLink>
            <NavLink>Хиты продаж</NavLink>
            <NavLink>Под свадьбы и корпоративы</NavLink>
            <NavLink>С русской баней на дровах</NavLink>
          </div>
          <div className="footer--sotrd">
            <NavLink>Сотрудничество</NavLink>
            <NavLink>Частые вопросы</NavLink>
          </div>
          <div className="footer--end">
            <div className="footer--phone">
              <a href="#">
                <FaPhoneAlt />
              </a>
              <a href="#">8 (843) 528-65-48</a>
            </div>
            <div className="footer--icons">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
