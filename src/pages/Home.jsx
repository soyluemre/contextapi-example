import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { LoginContext } from "../context/LoginContext";
import faceImg from "../img/face.png";

const Home = () => {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const handleLearn = () => {
    if (login) {
      navigate("/gallery");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div>
        {/* Dil seçeneğini kontrol edin */}
        {language === "en" ? (
          <div className="container mt-5">
            <div className="row home-page">
              <div className="col-sm-12 col-lg-6">
                <img className="face-img" src={faceImg} alt="" />
              </div>
              <div className="col-sm-12 col-lg-6">
                <h4 className="mt-5 display-5 text-center">HELLO!</h4>
                <p>
                  Welcome Art Lover!
                  <br />
                  This platform brings a renewed sense of experimentation to the
                  possibilities of artist-designed versions.
                </p>
                <button
                  onClick={handleLearn}
                  className="btn-page btn w-100 p-2 rounded fs-5"
                >
                  Show time!
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                style={{ width: "100%", height: "50%" }}
                className="p-5 carousel-inner"
              >
                <div className="carousel-item active" data-bs-interval={3000}>
                  <img
                    src="https://cdn.theculturetrip.com/wp-content/uploads/2019/04/feature_vertical-gallery-chicago-_-8.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <img
                    src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_813,q_60,w_1637/v1/clients/annarbor/PXL_20220909_170428379_c9fc911a-af08-431c-8e2f-07a155bbf246.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/19/47070.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <br />
            <br />
          </div>
        ) : (
          <div className="container mt-5">
            <div className="row home-page">
              <div className="col-sm-12 col-lg-6">
                <img className="face-img" src={faceImg} alt="..." />
              </div>
              <div className="col-sm-12 col-lg-6">
                <h4 className="mt-5 display-5 text-center">MERHABA!</h4>
                <p>
                  Hoşgeldin Sanatsever!
                  <br />
                  Bu platform, sanatçı tarafından tasarlanmış versiyonların
                  olasılıklarına yenilenmiş bir deney duygusu getiriyor.
                </p>
                <button
                  onClick={handleLearn}
                  className="btn-page btn w-100 p-2 rounded fs-5"
                >
                  Gösteri Zamanı!
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                style={{ width: "100%", height: "50%" }}
                className="p-5 carousel-inner"
              >
                <div className="carousel-item active" data-bs-interval={3000}>
                  <img
                    src="https://cdn.theculturetrip.com/wp-content/uploads/2019/04/feature_vertical-gallery-chicago-_-8.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <img
                    src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_813,q_60,w_1637/v1/clients/annarbor/PXL_20220909_170428379_c9fc911a-af08-431c-8e2f-07a155bbf246.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/19/47070.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <br />
            <br />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
