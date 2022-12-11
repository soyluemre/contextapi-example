import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { LoginContext } from "../context/LoginContext";
import faceImg from "../img/face.png";

const HomePage = () => {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const handleLearn = () => {
    if (login) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {language === "tr" ? (
        <div className="row">
          <div className="col">
            <img className="face-img" src={faceImg} alt="" />
          </div>
          <div className="col">
            <h4 className="mt-5 display-5 text-danger text-center">
              MERHABA DÜNYA!
            </h4>
            <p
              style={{ textAlign: "justify", fontSize: "1.5rem" }}
              className="p-5"
            >
              Hoşgeldin Sanatsever! Bu platform, sanatçı tarafından tasarlanmış
              versiyonların olasılıklarına yenilenmiş bir deney duygusu
              getiriyor. Yeniden üretime yönelik yaratıcı yaklaşımları
              vurgulamayı ve nesne ve görüntülerin üretilmesi için kapsamlı
              süreçleri etkinleştirmeyi amaçlar.
            </p>
            <button
              onClick={handleLearn}
              className="btn w-100 p-2 rounded fs-5 btn-danger rounded"
            >
              Gösteri Zamanı!
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <img className="face-img" src={faceImg} alt="" />
          </div>
          <div className="col">
            <h4 className="mt-5 display-5 text-danger text-center">
              MERHABA DÜNYA!
            </h4>
            <p
              style={{ textAlign: "justify", fontSize: "1.5rem" }}
              className="p-5"
            >
              Hoşgeldin Sanatsever! Bu platform, sanatçı tarafından tasarlanmış
              versiyonların olasılıklarına yenilenmiş bir deney duygusu
              getiriyor. Yeniden üretime yönelik yaratıcı yaklaşımları
              vurgulamayı ve nesne ve görüntülerin üretilmesi için kapsamlı
              süreçleri etkinleştirmeyi amaçlar.
            </p>
            <button
              onClick={handleLearn}
              className="btn w-100 p-2 rounded fs-5 btn-danger rounded"
            >
              Gösteri Zamanı!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
