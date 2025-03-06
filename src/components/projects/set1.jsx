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
        <h1 className="parent-software-title">Tech Innovation</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Healthcare/Medical</h1>
            <p className="software-content-description projects-close">
              The healthcare industry faces significant challenges in providing
              accessible, personalized, and efficient medical services,
              especially in remote or underserved areas. Traditional healthcare
              systems are often burdened by high costs, long wait times, and
              limited access to specialists.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Education/Learning</h1>
            <p className="software-content-description projects-close">
              The current education system struggles to deliver personalized and
              engaging learning experiences, particularly in underserved
              regions. Traditional teaching methods often fail to cater to
              individual learning paces and styles, leading to disengagement and
              knowledge gap
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Environmental/Green</h1>
            <p className="software-content-description projects-close">
              Environmental degradation, pollution, and inefficient energy
              consumption are pressing global issues. Current solutions often
              lack scalability, affordability, and integration with modern
              technology, making it difficult to achieve widespread
              sustainability.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Urban/Infrastructure</h1>
            <p className="software-content-description projects-close">
              Rapid urbanization has led to overcrowded cities, inefficient
              resource management, and deteriorating infrastructure. Traditional
              urban planning methods are unable to keep pace with the growing
              demands of modern cities, resulting in traffic congestion, energy
              waste, and reduced quality of life.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Social/Community</h1>
            <p className="software-content-description projects-close">
              Communities often lack effective platforms to connect,
              collaborate, and address shared challenges. This disconnect
              hinders collective problem-solving, resource sharing, and social
              cohesion, particularly in diverse or geographically dispersed
              populations.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Artificial Intelligence</h1>
            <p className="software-content-description projects-close">
              While AI and machine learning hold immense potential, many
              industries struggle to implement these technologies effectively
              due to high costs, complexity, and lack of expertise. This limits
              their ability to innovate and solve complex problems.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">IoT (Internet of Things)</h1>
            <p className="software-content-description projects-close">
              The increasing complexity of modern systems and processes often
              leads to inefficiencies, data silos, and poor user experiences.
              Many industries lack seamless connectivity and real-time data
              access, hindering productivity and innovation.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Machine Learning</h1>
            <p className="software-content-description projects-close">
              Many businesses struggle to leverage machine learning (ML)
              effectively due to high implementation costs, lack of expertise,
              and the complexity of integrating ML into existing systems. This
              limits their ability to harness data-driven insights, automate
              processes, and stay competitive in rapidly evolving markets.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Mobile Applications</h1>
            <p className="software-content-description projects-close">
              Many businesses struggle to develop apps that meet user
              expectations for accessibility, performance, and engagement.
              Poorly designed apps often lead to low user retention, negative
              brand perception, and missed opportunities for customer
              engagement.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Telemedicine</h1>
            <p className="software-content-description projects-close">
              Access to quality healthcare remains a significant challenge,
              especially in remote and underserved areas. Traditional healthcare
              systems are often plagued by long wait times, high costs, and
              limited availability of specialists. This results in delayed
              diagnoses, inadequate treatment, and poor patient outcomes.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Wearable Technology</h1>
            <p className="software-content-description projects-close">
              The healthcare industry faces challenges in providing continuous,
              real-time health monitoring solutions that empower individuals to
              take proactive control of their well-being. Traditional health
              monitoring methods are often reactive, intermittent, and lack
              personalization, leading to missed opportunities for early
              intervention and improved health outcomes.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Smart Systems</h1>
            <p className="software-content-description projects-close">
              Many industries face inefficiencies in resource management, energy
              consumption, and operational processes due to outdated systems and
              lack of real-time data integration. These inefficiencies lead to
              increased costs, wasted resources, and environmental harm,
              hindering both profitability and sustainability goals.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Virtual/Digital Platforms
            </h1>
            <p className="software-content-description projects-close">
              In an increasingly digital world, businesses and communities
              struggle to create meaningful engagement and collaboration through
              traditional platforms. Existing solutions often lack
              interactivity, personalization, and scalability, leading to
              disengagement, inefficiencies, and missed opportunities for
              growth.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;
