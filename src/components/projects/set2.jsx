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
        <h1 className="parent-software-title">Solutions Startup</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE Ideas ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Smart Subscription Ecosystem
            </h1>
            <p className="software-content-description projects-close">
              How can businesses create a seamless subscription-based model that
              offers users personalized access to products or services, ensuring
              convenience, long-term engagement, and recurring revenue streams?{" "}
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Cloud-Based SaaS Solutions{" "}
            </h1>
            <p className="software-content-description projects-close">
              Many businesses and individuals lack access to affordable,
              scalable software tools. A cloud-based solution with subscription
              pricing can democratize access to powerful tools while ensuring
              continuous updates and ease of use.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              B2B Digital Transformation{" "}
            </h1>
            <p className="software-content-description projects-close">
              Inter-business transactions often face inefficiencies and
              friction. Solutions that streamline partnerships and
              collaborations can optimize operations, reduce costs, and foster
              mutual growth.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              B2C Engagement Platforms{" "}
            </h1>
            <p className="software-content-description projects-close">
              Consumers demand personalized, seamless experiences. Platforms
              that directly connect businesses with end-users can enhance
              satisfaction, build loyalty, and drive repeat engagement.{" "}
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              MVP (Minimum Viable Product){" "}
            </h1>
            <p className="software-content-description projects-close">
              Launching a full-scale product without market validation is risky.
              A lean, functional prototype allows businesses to test viability,
              gather feedback, and refine offerings before significant
              investment.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Scalability</h1>
            <p className="software-content-description projects-close">
              Many solutions fail to handle growth, leading to operational
              bottlenecks. Developing adaptable systems ensures sustainable
              expansion and the ability to meet increasing market demands.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Circular Economy </h1>
            <p className="software-content-description projects-close">
              Traditional business models generate excessive waste and
              inefficiencies, lacking innovative approaches to minimize waste,
              reuse resources, and optimize lifecycle management, which harms
              both profitability and the environment.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Consultancy </h1>
            <p className="software-content-description projects-close">
              Businesses often lack access to expert guidance and tailored
              solutions to address unique challenges, hindering growth,
              innovation, and operational excellence in a competitive market.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Patient Care </h1>
            <p className="software-content-description projects-close">
              Healthcare systems face inefficiencies, rising costs, and gaps in
              delivering consistent, high-quality patient care and medical
              assistance, impacting health outcomes and patient satisfaction.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Cost Reduction</h1>
            <p className="software-content-description projects-close">
              Rising operational expenses strain profitability, with businesses
              struggling to optimize processes and resource allocation without
              compromising quality or efficiency.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Skill Development </h1>
            <p className="software-content-description projects-close">
              Rapid technological advancements render many skills obsolete,
              leaving individuals without accessible platforms to acquire new,
              relevant skills for career growth and adaptability.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Sustainability </h1>
            <p className="software-content-description projects-close">
              Environmental concerns and consumer preferences are shifting, but
              businesses lack eco-friendly solutions that promote responsible
              consumption and reduce environmental impact, risking brand
              reputation and market relevance.{" "}
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Resource Management </h1>
            <p className="software-content-description projects-close">
              Inefficient resource use leads to waste, increased costs, and
              operational inefficiencies, with businesses lacking systems to
              optimize resource allocation and minimize environmental impact.{" "}
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Social Responsibility </h1>
            <p className="software-content-description projects-close">
              Consumers increasingly expect businesses to address social issues,
              but many companies lack ethical, community-driven initiatives that
              create positive societal impact, risking brand trust and customer
              loyalty.{" "}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set2;
