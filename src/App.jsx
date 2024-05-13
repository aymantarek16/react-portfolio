import { useEffect, useState } from "react";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Header from "./components/1-header/Header";
// import Header from "./components/1-header/Header";

function App() {
  const [showScrollBtn, setshowScrollBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setshowScrollBtn(true) : setshowScrollBtn(false);
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <Hero  />
      <div className="divider"/>
      <Main />
      <div className="divider"  />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up">
        <button
          className="icon-keyboard_arrow_up scroll2Top"
          style={{
            cursor: showScrollBtn ? "pointer" : "default",
            opacity: showScrollBtn ? "1" : "0",
            transition: ".8s",
          }}
        ></button>
      </a>
    </div>
  );
}

export default App;
