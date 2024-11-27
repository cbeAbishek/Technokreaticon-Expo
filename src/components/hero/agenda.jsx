import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            <h1 className="title-name">Agenda</h1>
          </div>
          <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "40vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <div className="agenda-des">
              The 1-Day Project Expo at PPG College aims to provide a platform
              for students to showcase their talents through innovative projects
              in two categories: Business Models and Innovation Models. The
              event will feature project displays, presentations, and
              interactive Q&A sessions with industry experts and academicians.
              Participants will have the opportunity to network with
              professionals, receive constructive feedback, and compete for
              awards.
            </div>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title " id="agenda-left">
              <img
                src="/images/vision.webp"
                alt="vision-image"
                width="300px"
                className="about-vision-image"
              />
              Vision
            </div>
            <div className="about-vision-description" id="agenda-right">
              The 1-Day Project Expo at PPG College envisions fostering a
              culture of innovation and entrepreneurship among students by
              providing a dynamic platform to showcase their creative ideas and
              technological solutions. Our aim is to bridge the gap between
              academia and industry, inspiring young minds to think beyond the
              classroom and address real-world challenges through innovative
              business models and groundbreaking technological advancements. We
              aspire to be a catalyst for nurturing talent and empowering
              students to contribute to a sustainable and progressive future.
            </div>
          </div>
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              <img
                src="/images/target.webp"
                alt="mission-image"
                width={"250px"}
                className="about-mission-image"
              />
              Mission
            </div>
            <div className="about-mission-description" id="agenda-left">
              Our mission is to create an engaging and collaborative environment
              where students can present their Business and Innovation Models to
              a diverse audience, including industry leaders, academicians, and
              peers. By encouraging hands-on problem-solving, critical thinking,
              and teamwork, the expo seeks to cultivate entrepreneurial skills
              and technological expertise. We are committed to celebrating
              creativity, recognizing excellence, and fostering connections that
              will drive the participants' professional growth and societal
              impact.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
