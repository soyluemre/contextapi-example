import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import notfoundImage from "../img/notfound.png";

const NotFound = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();
  return (
    <>
      {language === "tr" ? (
        <div className="notfound-page container mt-5 text-center">
          <h4 className="mb-5">
            Oops!
            <br />
            Sanırım kayboldun.. Böyle bir sayfa yok.
            <br />
            Ana Sayfaya gitmek için Buton'a tıklayabilirsiniz.
          </h4>
          <img src={notfoundImage} alt="" />
          <br />
          <button onClick={() => navigate("/contextapi-example")}>
            ANA SAYFA
          </button>
        </div>
      ) : (
        <div className="notfound-page container mt-5 text-center">
          <h4>
            Oops!
            <br />
            Page Not Found.. I think you're lost.
            <br />
            You can click the Button to go to the Home Page.
          </h4>
          <img src={notfoundImage} alt="" />
          <br />
          <button onClick={() => navigate("/contextapi-example")}>HOME</button>
        </div>
      )}
    </>
  );
};

export default NotFound;
