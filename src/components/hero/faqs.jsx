import React, { useEffect } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <h1 className="faqs-title">
          <img src="/images/rrr.webp" alt="arrow-logo" />
          FAQs
        </h1>

        <div className="faqs-section">
          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Should the Innovation Model projects include a working prototype?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              While a working prototype is preferred, well-documented concepts
              with evidence of feasibility will also be considered. Participants
              are encouraged to demonstrate their innovation through tangible
              outputs like simulations, mockups, or functional MVPs (Minimum
              Viable Products). However, if a prototype is not feasible due to
              resource constraints, a detailed explanation of the concept,
              supported by diagrams, flowcharts, or research findings, will
              suffice. The key is to clearly communicate how your idea can be
              implemented in real-world scenarios.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Can participants submit projects from multiple categories?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Yes, participants can submit projects from multiple categories,
              but each project must be registered separately. For instance, if a
              team has developed an AI-based healthcare solution and a
              blockchain-powered supply chain tool, both projects need
              individual registrations. Ensure that each submission aligns with
              the guidelines of its respective category and pathway. Note that
              presenting multiple projects may require additional time
              management during the event day.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What is the maximum team size allowed for participation?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              The maximum team size allowed is 5 members. Teams can consist of
              students, professionals, or a mix of both, and cross-institutional
              collaborations are permitted. It is important to ensure that all
              team members contribute meaningfully to the project and
              presentation. Each team member must be registered under the same
              team name during the registration process.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Are there any restrictions on the domain of the project?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              No, there are no specific restrictions on the domain of the
              project. Participants are free to choose any domain, including but
              not limited to healthcare, education, environment, technology,
              business, or social impact. The project should, however, fall
              under one of the two main pathways: Problem-Solution Framework or
              Technology-Driven Innovation. Ensure that your project addresses a
              clear problem or leverages innovative technology to create value.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              How will the projects be evaluated by the jury panel?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Projects will be evaluated based on several criteria, including
              originality, technical depth, feasibility, societal impact, and
              scalability. The jury panel will assess how effectively the
              problem is addressed, the quality of the proposed solution, and
              the potential for real-world implementation. Additionally, factors
              such as market analysis, business model viability, and
              presentation skills will play a significant role in determining
              the winners. Detailed evaluation rubrics will be shared on the
              event website closer to the event date.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Is it mandatory to have a business model for every project?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              While having a business model is highly recommended, especially
              for startup-focused ideas, it is not mandatory for every project.
              If your project is purely research-oriented or experimental, you
              can focus on showcasing its technical innovation and societal
              impact instead. However, including a go-to-market strategy or
              revenue model strengthens your pitch and demonstrates the
              project's long-term sustainability. Judges appreciate projects
              that balance creativity with practicality.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What happens if my team cannot attend the event in person?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              If your team cannot attend the event in person, please contact the
              event coordinators immediately to discuss alternative
              arrangements. Depending on the circumstances, virtual
              participation options may be available. However, priority will be
              given to in-person presentations, as they allow better interaction
              with the jury and audience. Ensure that at least one team
              representative is present virtually or physically to present the
              project and answer questions during the Q&A session.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Will there be opportunities for networking with sponsors and
              industry experts?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Yes, the event will feature dedicated stalls and networking
              sessions where participants can interact with sponsors, industry
              experts, and potential mentors. These interactions provide
              excellent opportunities to gain feedback, explore collaborations,
              and learn about internship or job prospects. Participants are
              encouraged to bring business cards or prepare an elevator pitch to
              make the most of these networking opportunities. Details about
              participating organizations will be updated on the event website.
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              Can I update my project submission after registering?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              Yes, you can update your project submission until the registration
              deadline (March 17, 2025). After completing the initial
              registration, you will receive an email with a link to access and you can communicate in Whatsapp group 
            </p>
          </div>

          <div className="faqs-content" onClick={handleArrow}>
            <h1 className="faqs-content-title">
              What should I bring on the day of the event?
              <ChevronRightIcon
                style={styles.container}
                className="faqs-arrow"
              />
            </h1>
            <p className="faqs-content-description">
              On the day of the event, bring valid ID cards for all team members
              for verification purposes. Carry a copy of your pitch deck on a
              USB drive as a backup, even though digital submissions will be
              preloaded onto the presentation system. If your project involves
              hardware components or physical prototypes, ensure they are safely
              transported and ready for demonstration. Dress code is formal or
              smart casual, and don’t forget to collect your participation kit
              upon arrival.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;
