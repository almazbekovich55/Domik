import React from "react";
import "./Header.scss";
import logo from "../../../assets/images/logo_light.svg";
import dark from "../../../assets/images/logo_dark.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { ImLocation } from "react-icons/im";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IoIosLogOut, IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { clearUser } from "../../../redux/CreateUserSlice";

const Header = () => {
  const nav = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const pathName = useLocation().pathname;
  const { user } = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      nav("/auth");
    } catch (error) {
      alert("Ошибка выхода: " + error.message);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    console.log(user);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      id={pathName === "/" ? "header" : "header--sticky"}
      className={scrolled ? "scrolled" : ""}
    >
      <div className="container">
        <div className="header">
          <div className="header--logo">
            <img
              src={pathName === "/" ? (scrolled ? dark : logo) : dark}
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
            {user ? (
              <div className="header--contact__user">
                <img
                  src={
                    user.photo
                      ? user.photo
                      : "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                  }
                  alt="img"
                />
              </div>
            ) : (
              <a onClick={() => nav("/auth")}>
                <CiUser />
              </a>
            )}
            {user ? (
              <a onClick={handleLogout}>
                <IoIosLogOut />
              </a>
            ) : null}
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
