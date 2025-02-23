import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set1 = () => {
  useEffect(() => {
    document.title = "Projects - Set 1";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Projects - set 1",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };
  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Projects - Set 1</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Healthcare/Medical</h1>
            <p className="software-content-description projects-close">
              Innovate solutions in healthcare through smart diagnostics, remote
              patient monitoring, and AI-driven medical assistance to improve
              patient outcomes.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Education/Learning</h1>
            <p className="software-content-description projects-close">
              Develop interactive learning platforms, AI tutors, and smart
              content delivery systems to enhance personalized and accessible
              education.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Environmental/Green</h1>
            <p className="software-content-description projects-close">
              Create eco-friendly technologies to combat pollution, optimize
              energy consumption, and promote sustainability through smart
              solutions.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Urban/Infrastructure</h1>
            <p className="software-content-description projects-close">
              Design smart city solutions, automated traffic management, and
              sustainable urban infrastructure for enhanced city planning.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Social/Community</h1>
            <p className="software-content-description projects-close">
              Build digital platforms to foster community engagement, social
              well-being, and inclusivity in both urban and rural settings.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Artificial Intelligence</h1>
            <p className="software-content-description projects-close">
              Explore AI-driven applications for automation, predictive
              analytics, and deep learning in various industries.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Machine Learning</h1>
            <p className="software-content-description projects-close">
              Implement machine learning algorithms for data-driven
              decision-making, anomaly detection, and personalized
              recommendations.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">IoT (Internet of Things)</h1>
            <p className="software-content-description projects-close">
              Develop IoT-based smart systems for home automation, industrial
              monitoring, and real-time data analytics.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Mobile Applications</h1>
            <p className="software-content-description projects-close">
              Create mobile solutions for on-the-go productivity, healthcare,
              education, and entertainment with seamless user experience.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Telemedicine</h1>
            <p className="software-content-description projects-close">
              Bridge the healthcare gap by developing telemedicine platforms for
              remote consultation, diagnosis, and treatment.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Wearable Technology</h1>
            <p className="software-content-description projects-close">
              Innovate wearable devices for health tracking, real-time
              monitoring, and fitness enhancement through smart sensors.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Smart Systems</h1>
            <p className="software-content-description projects-close">
              Build intelligent automation systems for homes, industries, and
              urban development with AI and IoT integration.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Virtual/Digital Platforms
            </h1>
            <p className="software-content-description projects-close">
              Develop digital ecosystems for business, education, and social
              engagement with immersive and interactive experiences.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;
