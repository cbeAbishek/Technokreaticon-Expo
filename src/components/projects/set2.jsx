import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set2 = () => {
  useEffect(() => {
    document.title = "Projects - Set 2";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Project - set 2",
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
        <h1 className="parent-software-title">Projects - Set 2</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Subscription Services</h1>
            <p className="software-content-description projects-close">
              Create a seamless subscription-based model that offers users
              personalized access to products or services, ensuring convenience
              and long-term engagement.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              SaaS (Software as a Service)
            </h1>
            <p className="software-content-description projects-close">
              Develop a cloud-based software solution that allows businesses or
              individuals to access powerful tools and services on a
              subscription basis.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              B2B (Business to Business)
            </h1>
            <p className="software-content-description projects-close">
              Design solutions that facilitate smooth transactions and
              partnerships between businesses, optimizing efficiency and growth.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              B2C (Business to Consumer)
            </h1>
            <p className="software-content-description projects-close">
              Develop platforms or services that directly connect businesses
              with consumers, enhancing user experience and satisfaction.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              MVP (Minimum Viable Product)
            </h1>
            <p className="software-content-description projects-close">
              Build a lean and functional prototype to test market viability,
              gather user feedback, and refine product development.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Scalability</h1>
            <p className="software-content-description projects-close">
              Develop solutions with the ability to grow and adapt, ensuring
              sustainable expansion and increasing market reach.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Circular Economy</h1>
            <p className="software-content-description projects-close">
              Implement innovative models that promote sustainability by
              minimizing waste, reusing resources, and optimizing lifecycle
              management.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Consultancy</h1>
            <p className="software-content-description projects-close">
              Offer expert guidance and tailored solutions to businesses or
              individuals, driving growth and operational excellence.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Patient Care</h1>
            <p className="software-content-description projects-close">
              Develop technology-driven solutions to enhance patient care,
              improve medical assistance, and ensure better health outcomes.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Cost Reduction</h1>
            <p className="software-content-description projects-close">
              Optimize business processes and resource allocation to reduce
              expenses while maintaining efficiency and quality.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Skill Development</h1>
            <p className="software-content-description projects-close">
              Create learning platforms or tools that empower individuals to
              acquire new skills, enhancing employability and career growth.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Sustainability</h1>
            <p className="software-content-description projects-close">
              Design eco-friendly solutions that promote responsible
              consumption, reduce environmental impact, and encourage green
              practices.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Resource Management</h1>
            <p className="software-content-description projects-close">
              Develop systems that optimize the use of resources, ensuring
              efficiency, cost-effectiveness, and minimal waste.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Urban Planning</h1>
            <p className="software-content-description projects-close">
              Innovate smart city solutions that enhance infrastructure,
              mobility, and sustainability for efficient urban living.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Social Responsibility</h1>
            <p className="software-content-description projects-close">
              Promote ethical and community-driven initiatives that address
              social issues and contribute to positive societal impact.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Accessibility</h1>
            <p className="software-content-description projects-close">
              Design inclusive solutions that ensure equal access to technology,
              services, and information for people of all abilities.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set2;
