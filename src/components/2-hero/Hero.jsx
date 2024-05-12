import "./hero.css";
import devAnimation from "../../animation/dev.json";
import Lottie from "lottie-react";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex" style={{ justifyContent: "space-between" }}>
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 7, type: "spring", stiffness: 20 }}
            src="./ayman.png"
            className="avatar"
            alt="ayman_avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title"></h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, type: "spring", stiffness: 20 }}
          className="title"
        >
          Software designer, Front end developer.
        </motion.h1>
        <p className="sub-title">
          I’m Ayman Tarek, Enthusiastic and skilled front-end developer with
          3 years of experience in building dynamic and interactive user
          interfaces using React.js and creating responsive and user-friendly
          websites, with a strong focus on usability and performance.
        </p>

        <div className="all-icons flex">
          <a
            className="icon icon-linkedin"
            href="https://www.linkedin.com/in/ayman-tarek-617b21229/"
            target="_blank"
          ></a>
          <a
            className="icon icon-github"
            href="https://github.com/aymantarek16?tab=repositories"
            target="_blank"
          ></a>
          <a
            className="icon icon-instagram"
            href="https://www.instagram.com/ayman_tarek74"
            target="_blank"
          ></a>

          <a
            className="icon icon-twitter"
            href="https://twitter.com/aymantarekm17"
            target="_blank"
          ></a>
        </div>

        {/* Download Cv */}
        <div className="cv">
          <a
            href={
              "https://drive.google.com/file/d/1awjyOvs_LwbZKjPw8XLkpqdtHLMW5_cf/view?usp=sharing"
            }
            target="_blank"
            className="cvBtn"
          >
            Download Cv
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
