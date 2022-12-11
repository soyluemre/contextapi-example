import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import themeBtn from "../img/theme.png";
import trPng from "../img/tr.png";
import engPng from "../img/eng.png";
import { LoginContext } from "../context/LoginContext";
import { LanguageContext } from "../context/LanguageContext";
import menuList from "../img/menulist.png";

const Nav2 = () => {
  const { toggleThemeMode } = useContext(ThemeContext);
  const { setUser, login, setLogin } = useContext(LoginContext);
  const { language, setLanguage } = useContext(LanguageContext);

  const navigate = useNavigate();

  const handleClick = () => {
    toggleThemeMode();
  };

  const logout = () => {
    setUser("");
    setLogin(false);
    navigate("/login");
  };
  return (
    <>
      {language === "tr" ? (
        <nav className="navbar navs sticky-top navbar-expand-lg">
          <div className="container">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                className="menu-img"
                width="35px"
                src={menuList}
                alt="menu-logo"
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="nav-links navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" to="/">
                    Ana Sayfa
                  </Link>
                  <li className="nav-item">
                    <Link className="nav-link active text-white" to="/about">
                      Hakkımızda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active text-white" to="/gallery">
                      Galeri
                    </Link>
                  </li>
                </li>
              </ul>
              <div className="buttons d-flex align-items-center">
                <img
                  style={{
                    cursor: "pointer",
                    marginLeft: "1rem",
                  }}
                  onClick={() => setLanguage("en")}
                  width="35px"
                  src={trPng}
                  alt="language button"
                />
                <button
                  onClick={logout}
                  type="button"
                  className="login-btn me-3 ms-3"
                >
                  {login ? "Çıkış Yap" : "Giriş Yap"}
                </button>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={handleClick}
                  className="rounded-circle"
                  width="50px"
                  src={themeBtn}
                  alt="theme button"
                />
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navs sticky-top navbar-expand-lg">
          <div className="container">
            {/* Toggle button */}
            <button
              className="navbar-toggler text-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                className="menu-img"
                width="35px"
                src={menuList}
                alt="menu-logo"
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              <ul className="nav-links navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="nav-link active text-white" to="/">
                    Home
                  </Link>
                  <li className="nav-item">
                    <Link className="nav-link active text-white" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active text-white" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                </li>
              </ul>
              <div className="buttons d-flex align-items-center">
                <img
                  style={{
                    cursor: "pointer",
                    marginLeft: "1rem",
                  }}
                  onClick={() => setLanguage("tr")}
                  width="35px"
                  src={engPng}
                  alt="language button"
                />
                <button
                  onClick={logout}
                  type="button"
                  className="login-btn me-3 ms-3"
                >
                  {login ? "Logout" : "Login"}
                </button>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={handleClick}
                  className="rounded-circle"
                  width="50px"
                  src={themeBtn}
                  alt="theme button"
                />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav2;
