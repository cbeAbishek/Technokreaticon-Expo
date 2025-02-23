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
              Techno KreatiCon Phase 2 is a dynamic platform where innovation
              meets opportunity! Organized by the CyberZen Club, this event
              fuels creativity by empowering budding tech enthusiasts to present
              their groundbreaking projects. With expert jury panels,
              competitive pitching, and networking opportunities, it’s the
              perfect launchpad for visionary minds.
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
              Techno KreatiCon Phase 2 envisions a future where innovation
              drives progress, empowering young minds to transform ideas into
              real-world solutions. We aim to build a dynamic ecosystem where
              creativity, technology, and entrepreneurship converge, fostering
              groundbreaking advancements that address global challenges.
              Through collaboration, mentorship, and hands-on exposure, we
              strive to nurture a generation of forward-thinking leaders who
              will shape the future of technology and society.
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
              Our mission is to provide a premier platform that enables students
              to showcase their technological expertise, refine their
              problem-solving skills, and gain valuable industry insights. By
              connecting participants with mentors, investors, and industry
              professionals, we facilitate knowledge exchange and career growth.
              Techno KreatiCon Phase 2 is committed to bridging the gap between
              ideation and execution, encouraging participants to develop viable
              prototypes, secure funding, and explore incubation opportunities.
              Through this initiative, we aim to cultivate a culture of
              continuous learning, innovation, and impactful entrepreneurship.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
