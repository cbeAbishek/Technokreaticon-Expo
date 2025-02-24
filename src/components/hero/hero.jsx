import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import ReactGA from "react-ga";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import VanillaTilt from "vanilla-tilt";
import Agenda from "./agenda";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import { Footer } from "../";
import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";
import Chatbot from "./chatbot";
import VideoPlayer from "./video";

const hero = () => {
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("#");
  };
  const handleCardClicks = (card) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${card}`,
    });
    window.open(`${card}`, "_self");
  };
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleCountdown = () => {
    const countDate = new Date("March 20, 2025 09:00:00").getTime();
    const now = new Date().getTime();
    const diff = countDate - now;
    {
      if (now > countDate) return;
    }
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var textDay = Math.floor(diff / day);
    var textHour = Math.floor((diff % day) / hour);
    var textMinute = Math.floor((diff % hour) / minute);
    var textSecond = Math.floor((diff % minute) / second);

    if (textDay.toString().length == 1) {
      textDay = `0${textDay}`;
    }
    if (textHour.toString().length == 1) {
      textHour = `0${textHour}`;
    }
    if (textMinute.toString().length == 1) {
      textMinute = `0${textMinute}`;
    }
    if (textSecond.toString().length == 1) {
      textSecond = `0${textSecond}`;
    }

    setCountdown({
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  const textArray = [
    "PPG Institute of Technology Department of CSE",
    "Welcome to CyberZen's Project Expo Event project pitch Deck",
    "Welcome to PPG-IT",
    "Hey, folks!! Here is your platform to showcase your talent",
    "Unleash Innovation | Compete | Inspire",
    "Code. Create. Conquer!",
    "Think Big, Build Bigger!",
  ];

  const [currentText, setCurrentText] = useState(textArray[0]);
  const [animate, setAnimate] = useState(false);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Apply animation
      setTimeout(() => {
        index = (index + 1) % textArray.length;
        setCurrentText(textArray[index]); // Change text
        setAnimate(true); // Remove animation class after effect completes
      }, 900); // Wait for animation before removing class
    }, 3000); // Change text every 3s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tilt = VanillaTilt.init(
      document.querySelectorAll(".anim"),
      {
        max: 10,
        speed: 400,
      },
      []
    );
    const interval = setInterval(() => handleCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="parent_hero">
        <Chatbot />
        {/* <div className="progress_bar"></div> */}
        <div className=" tag-hero-mobile">
          <img
            src="/images/srm.webp"
            alt="srm logo"
            width="60vw"
            className="hero-srm-logo"
          />
            <div className={`parent_hero tag ${animate ? "animated" : ""}`}>{currentText}</div>
          <img
            src="/images/srmvec.webp"
            alt="srmvec logo"
            width="90vw"
            className="hero-srmvec-logo"
          />
        </div>

        {/* ----------------------- Page 1 ------------------------- */}
        <section className="column">
          <div className="left_side">
            <div className="curve"></div>

            <div className="title1">
              <span className="hackathon"> {"Techno KreatiCon"}</span>
              <br />
              {/* <p className="tag1"> A National Level 24 Hour Hackathon</p> */}
              {/* <span className="hackathon">Hackathon</span> */}
              <p className="description">
                <span>National Level Project Expo </span>
                showcasing innovative solutions
                <br /> and tech talents from across the country
              </p>
            </div>

            <div className="register_now" onClick={handleRegisterClick}>
              <div>
                <a>REGISTER NOW </a>
              </div>
              <div>
                {" "}
                <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
              </div>
            </div>
            <div className="countdown-main">
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3 className="day">{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>
                <div className="hour-card anim">
                  <h3 className="hours">{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>
                <div className="min-card anim">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>
                <div className="sec-card anim">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
              <h2 className="countdown-text">
                Join us for Techno Kreaticon Phase 2
              </h2>
            </div>
          </div>

          <div className="right_side">
            {/* -------------------------- Column 1 * ---------------------------------- */}

            <div className="col1 animated-div">
              <h3 className="text">
                <div>
                  <div>
                    <div> 20</div> <div> th</div>{" "}
                  </div>{" "}
                  March
                </div>
                <Calender className="calender-icon" />
              </h3>

              <p
                className="text2"
                onClick={() => handleCardClicks("/guidelines")}
              >
                Guidelines <ArrowRightWhite className="arrow-right-icon" />
              </p>
              {/* /events */}
              <p className="text3" onClick={() => handleCardClicks("/events")}>
                Events <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 2 * ---------------------------------- */}
            <div className="col2 animated-div">
              <h3 className="text4">
                Information Details <Info className="info-icon" />
              </h3>
              {/* /about */}
              <p className="text5" onClick={() => handleCardClicks("/about")}>
                About
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
              {/* /judges */}
              <p className="text6" onClick={() => handleCardClicks("/ppg")}>
                Judge Panel
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 3 * ---------------------------------- */}
            <div className="col3 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text7">Project Category</h3>
              </div>
              {/* /set1 */}
              <p className="text8" onClick={() => handleCardClicks("/set1")}>
                Tech Innovation
                <ArrowRightBlack className="arrow-right-icon" />
              </p>
              <p className="text9" onClick={() => handleCardClicks("/set2")}>
                Solutions Startup{" "}
                <ArrowRightBlack className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 4  ---------------------------------- */}
            <div
              className="col4 animated-div"
              onClick={() =>
                window.open("https://maps.app.goo.gl/S9eZiMfBYnCH7SVc7")
              }
            >
              <h3 className="text10">
                Venue <Location className="location-icon" />
              </h3>
              <div className="flex flex-col ">
                <p className="text-white pt-[2vh] text-[1vw] venue-text-mobile">
                  PPG Insitute of Technology, Coimbatore
                </p>
                <p className="text-white text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[0.8vw]">
                  RATHNAGIRI ROAD, Viswapuram, Saravanampatti, Coimbatore, Tamil
                  Nadu 641035
                </p>

                <div className="round"></div>
              </div>
            </div>
            {/* -------------------------- Column 5  ---------------------------------- */}
            <div className="col5 "></div>
            {/* -------------------------- Column 6  ---------------------------------- */}
            <div className="col6 animated-div">
              <h3 className="text13">
                Organized By
                <div className="flex justify-center items-center gap-1"></div>
              </h3>
              <div className="flex items-start justify-between flex-col">
                <p className="text14">PPGIT CSE Students </p>
                <p className="text15">CyberZen Club</p>
                <div className="round2"></div>
              </div>
            </div>
          </div>
        </section>
        {/* -------------------------- Page 2 -------------------------- */}
        <VideoPlayer />
      </div>
      <Agenda />

      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default hero;
