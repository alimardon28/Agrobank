import React from "react";
import "../Header/Header.scss";
import "../Header/dropdown.scss";
import logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container header__container">
          <div className="header__ul">
            <div className="header__top">
              <div className="header__top_navbar">
                <div className="header__top_navbar_left">
                  <img src={logo} alt="agrobank logo" />
                  <div className="header__top_navbar_left_box">
                    <a href="#">Jismoniy shaxslar uchun</a>
                    <a href="#">yuridik shaxslar uchun</a>
                  </div>
                </div>
                <div className="header__top_navbar_right">
                  <ul className="header__top_navbar_right_list">
                    <li className="header__top_navbar_right_list_item">
                      <a href="#">Bog'lanish</a>
                    </li>
                    <li className="header__top_navbar_right_list_item">
                      <a href="#">Aksiyadorlar va investorlarga</a>
                    </li>
                    <li className="header__top_navbar_right_list_item">
                      <div className="dropdown">
                        <p className="dropdown__p">yana</p>
                        <div className="dropdown__menu">
                          <a className="dropdown__menu_link" href="#">
                            Bank haqida
                          </a>
                          <a className="dropdown__menu_link" href="#">
                            Komplayens nazorat boshqarmasi
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="header__top_navbar_right_list_item">
                      <select
                        name=""
                        id=""
                        className="header__top_navbar_right_list_item_select"
                      >
                        <option
                          value=""
                          className="header__top_navbar_right_list_item_select_option"
                        >
                          uz
                        </option>
                        <option
                          value=""
                          className="header__top_navbar_right_list_item_select_option"
                        >
                          ru
                        </option>
                      </select>
                    </li>
                    <li className="header__top_navbar_right_list_item">
                      <div className="dropdown">
                        <p>Internet-bank</p>
                        {/* <div className="dropdown__menu">
                          <a className="dropdown__menu_link" href="#">
                            Jismoniy shaxslar uchun
                          </a>
                          <a className="dropdown__menu_link" href="#">
                            Yuridik shaxslar uchun
                          </a>
                        </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="header__bottom">
              <div className="header__bottom_navbar"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
