import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const { user, setUser, setLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      setLogin(true);
      navigate("/gallery");
    } else if (!user.email && !user.password & (language === "tr")) {
      alert("Form'u Eksiksiz Doldurunuz");
      setLogin(false);
    } else if (!user.email && !user.password & (language === "en")) {
      alert("Fill the Form Completely");
      setLogin(false);
    }
  };

  return (
    <>
      {language === "en" ? (
        <div
          style={{ marginTop: "7rem", height: "100vh", maxWidth: "700px" }}
          className="container login"
        >
          <h4 className="display-5 text-center">LOGIN</h4>
          <form className="mt-5 container" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="p-2 form-control"
                id="email"
                placeholder="E-Mail"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setUser({ ...user, [e.target.id]: e.target.value })
                }
                value={user?.email || ""}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="p-2 form-control"
                id="password"
                placeholder="Password"
                value={user?.password || ""}
                onChange={(e) =>
                  setUser({ ...user, [e.target.id]: e.target.value })
                }
              />
            </div>

            <button type="submit" className="btn-page fw-bold btn w-100 p-2">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div
          style={{ marginTop: "7rem", height: "100vh", maxWidth: "700px" }}
          className="container login"
        >
          <h4 className="display-5 text-center">GİRİŞ</h4>
          <form className="mt-5 container" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="p-2 form-control"
                id="email"
                placeholder="E-Mail"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setUser({ ...user, [e.target.id]: e.target.value })
                }
                value={user?.email || ""}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="p-2 form-control"
                id="password"
                placeholder="Password"
                value={user?.password || ""}
                onChange={(e) =>
                  setUser({ ...user, [e.target.id]: e.target.value })
                }
              />
            </div>

            <button type="submit" className="btn-page fw-bold btn w-100 p-2">
              Gönder
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
