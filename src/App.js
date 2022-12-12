import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import PrivateRouter from "./router/PrivateRouter";
import Login from "./pages/Login";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{ transition: "all 1s" }}
      className={theme ? `bg-dark text-white` : `bg-light text-dark`}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/contextapi-example" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<PrivateRouter />}>
            <Route path="" element={<Gallery />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
