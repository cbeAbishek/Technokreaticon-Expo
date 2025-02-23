import React, { useEffect } from "react";
import "./events.css";
import ReactGA from "react-ga";

const events = () => {
  const handleAbstract = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Abstract Reference Download`,
    });
    window.open("/docs/Abstract_Reference_Techno.pdf");
  };
  useEffect(() => {
    document.title = "Stages";
  });
  const handleStage = (stage) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Events Stage-${stage}`,
    });
    if (stage == "1") {
      document.querySelector("#line-progress").style.width = "0%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage1-content").classList.add("active");
    }
    if (stage == "2") {
      document.querySelector("#line-progress").style.width = "25%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage2-content").classList.add("active");
    }
    if (stage == "3") {
      document.querySelector("#line-progress").style.width = "50%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage3-content").classList.add("active");
    }
    if (stage == "4") {
      document.querySelector("#line-progress").style.width = "75%";
      document
        .querySelectorAll(".section-content")
        .forEach((stage) => stage.classList.remove("active"));
      document.querySelector(".stage4-content").classList.add("active");
    }
  };
  return (
    <React.Fragment>
      <div className="parent-events">
        <div className="events-progress-bar">
          <ul>
            <li onClick={() => handleStage("1")}>Stage 1</li>
            <li onClick={() => handleStage("2")}>Stage 2</li>
            <li onClick={() => handleStage("3")}>Stage 3</li>
            <li onClick={() => handleStage("4")}>Stage 4</li>
          </ul>
          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div className="events-container">
          <div className="section-content stage1-content active">
            <div className="section-format">
              {" "}
              <h1>Registration</h1>
              <p>
                🔗 Scan the QR in the poster or search{" "}
                <a href="https://www.technokreaticon.tech" target="_blank">
                  www.technokreaticon.tech
                </a>{" "}
                and register for the event.
                <br /> <br />
                ⿡ Participants register online by providing their details. They
                must select a category and theme for their project.
                <br /> <br />
                ⿢ Upon registration, a confirmation email is sent with event
                guidelines and deadlines. Each team receives a unique ID for
                tracking.
                <br /> <br />
                ⿣ The last date for registration is on or before the specified
                deadline. Late entries will not be accepted.
                <br /> <br />⿤ For any queries/issues, kindly check the
                contacts column for the Point of Contact (POC).
              </p>
            </div>
          </div>
          <div className="section-content stage2-content">
            <div className="section-format">
              <h1>Abstract Submission</h1>
              <h1>
                <span className="stage2-reference" onClick={handleAbstract}>
                  ABSTRACT SUBMISSION REFERENCE - Downlaod
                </span>
              </h1>
              <p>
                📝 Submission of ideas and essential documents is mandatory to
                proceed further.
                <br /> <br />
                ⿡ Teams must submit their project abstracts along with
                essential documents.
                <br /> <br />
                ⿢ They can also provide prototypes, MVPs, or research papers to
                strengthen their submission.
                <br /> <br />
                ⿣ All submitted ideas will directly proceed to the final round;
                no screening will be done.
                <br /> <br />
                ⿤ The deadline for submission must be strictly followed. Late
                submissions will not be considered.
                <br /> <br />⿥ Upon successful submission, participants will
                receive a confirmation email.
              </p>
            </div>
          </div>
          <div className="section-content stage3-content">
            <div className="section-format">
              <h1>Final Presentation & Evaluation</h1>
              <p>
                🎤 Final presentation and evaluation process for shortlisted
                teams.
                <br /> <br />
                ⿡ Each team presents their project to a jury panel on the event
                day.
                <br /> <br />
                ⿢ The evaluation is based on innovation, feasibility, impact,
                and market potential.
                <br /> <br />
                ⿣ A live Q&A session will be conducted to allow teams to
                explain their projects in detail.
                <br /> <br />
                ⿤ Working models or key concepts must be demonstrated clearly
                to the judges.
                <br /> <br />⿥ Constructive feedback will be provided to each
                team for further improvements.
              </p>
            </div>
          </div>
          <div className="section-content stage4-content">
            <div className="section-format">
              <h1>Result Announcement & Award Ceremony</h1>
              <p>
                🏆 Result announcement and award ceremony to conclude the event.
                <br /> <br />
                ⿡ Final scores will be compiled based on the evaluation
                criteria.
                <br /> <br />
                ⿢ Winners will be announced, and awards will be distributed to
                the top teams.
                <br /> <br />
                ⿣ Special recognitions may be given for outstanding
                innovations.
                <br /> <br />
                ⿤ All participants will receive certificates for their
                contributions.
                <br /> <br />⿥ A networking session with judges and industry
                experts will be conducted at the end.  
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default events;
