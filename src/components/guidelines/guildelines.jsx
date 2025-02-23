import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              Participants must choose either Pathway 1: Problem-Solution
              Framework or Pathway 2: Technology-Driven Innovation for their
              project submission.
              <br /> <br />
              Each team or individual is required to select one specific
              category from the chosen pathway that best aligns with their
              project idea.
              <br /> <br />
              A detailed project pitch deck must be submitted, including
              sections on the problem statement, proposed solution, market
              analysis, and revenue model.
              <br /> <br />
              Supporting materials such as a proof of concept (MVP, prototype,
              simulation), patent documentation, or market research reports
              should accompany the pitch deck.
              <br /> <br />
              Projects must demonstrate originality, technical depth, societal
              impact, and scalability to qualify for evaluation by the jury
              panel.
              <br /> <br />
              Participants are encouraged to combine elements from multiple
              categories (e.g., AI + Healthcare) for interdisciplinary and
              innovative submissions.
              <br /> <br />
              All submissions must include a clear go-to-market strategy and
              potential for scalability, especially for startup-focused ideas.
              <br /> <br />
              Teams must register online by March 17, 2025 , and adhere to the
              registration fee guidelines available on the event website.
            </div>
            <div className="guidelines-2">
              Participants will present their projects in front of a
              distinguished jury panel during the event on March 20, 2025 , and
              should prepare for a Q&A session.
              <br /> <br />
              Final decisions will be based on predefined evaluation criteria,
              and winners will be announced during the closing ceremony.
              <br /> <br />
              All participants will receive participation certificates,
              refreshments, lunch, and a participation kit during the event.
              <br /> <br />
              The top three winning teams will be awarded shields, certificates,
              cash prizes, and internship offers at an incubator.
              <br /> <br />
              Networking opportunities with industry experts and access to
              stalls set up during the event will be available to all
              participants.
              <br /> <br />
              Post-event, an e-book capturing highlights, insights, and key
              takeaways will be published and shared with all attendees.
              <br /> <br />
              Participants must adhere to the event schedule, guidelines, and
              code of conduct outlined on the official website.
              <br /> <br />
              For queries or clarifications, contact the event coordinators via
              email or phone numbers listed on the website.
              <br /> <br />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
