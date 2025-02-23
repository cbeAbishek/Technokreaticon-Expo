import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Feb
                  <div>
                    <div>26</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration Opens</h2>
              <p className="container-description">
                Registration is now open for tech enthusiasts, developers, and
                problem solvers from all backgrounds. Join us for an
                exhilarating Project Expo, collaboration, and competition.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Mar
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration Closes</h2>
              <p className="container-description">
                Last day to register your team or individual participation.
                Ensure all project details and supporting materials are
                submitted by this date.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Mar
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Final Submission Deadline</h2>
              <p className="container-description">
                Deadline for submitting your final pitch deck, proof of concept
                (MVP/prototype), and any additional documentation required for
                evaluation.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Mar
                  <div>
                    <div>19</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Pre-Event Briefing</h2>
              <p className="container-description">
                A virtual briefing session will be held for all participants to
                clarify doubts, discuss presentation guidelines, and share the
                event schedule.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Mar
                  <div>
                    <div>20</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Project Pitch Day</h2>
              <p className="container-description">
                The main event day! Participants will present their projects to
                the jury panel, network with peers, and explore stalls set up by
                sponsors and industry experts.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Mar
                  <div>
                    <div>20</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Closing Ceremony & Awards</h2>
              <p className="container-description">
                Winners will be announced during the closing ceremony. Prizes,
                certificates, and internship offers will be distributed to the
                top teams.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Apr
                  <div>
                    <div>5</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">E-Book Release</h2>
              <p className="container-description">
                An e-book capturing the highlights of the event, including
                featured projects and participant stories, will be published and
                shared with all attendees.
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
