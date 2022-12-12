import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { LoginContext } from "../context/LoginContext";
import aboutImg from "../img/about.png";

const About = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const { language } = useContext(LanguageContext);

  const handleLearn = () => {
    if (login) {
      navigate("/gallery");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="about-page container">
      {language === "en" ? (
        <div className="row p-5 mt-4">
          <div className="col-sm-12 col-lg-6">
            <img className="rounded about-img" src={aboutImg} alt="aboutImg" />
          </div>
          <div className="col-sm-12 col-lg-6 text-center">
            <h4 className="display-2 text-center">About Us</h4>
            <p className="about-par">
              Welcome Art Lover! This platform brings a renewed sense of
              experimentation to the possibilities of artist-designed versions.
            </p>
            <button
              onClick={handleLearn}
              className="btn-page btn w-100 p-2 rounded fs-5"
            >
              Learn More!
            </button>
          </div>
        </div>
      ) : (
        <div className="row p-5 mt-4">
          <div className="col-sm-12 col-lg-6">
            <img className="rounded about-img" src={aboutImg} alt="aboutImg" />
          </div>
          <div className="col-sm-12 col-lg-6 text-center">
            <h4 className="display-2 text-center">Hakkımızda</h4>
            <p className="about-par">
              Yeniden üretime yönelik yaratıcı yaklaşımları vurgulamayı, nesne
              ve görüntülerin üretilmesi için kapsamlı süreçleri etkinleştirmeyi
              amaçlıyoruz.
            </p>
            <button
              onClick={handleLearn}
              className="btn-page btn w-100 p-2 rounded fs-5"
            >
              Daha Fazla!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
