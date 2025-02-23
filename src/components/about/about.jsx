import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/srm.webp"
              alt="srm logo"
              className="about-srm-logo"
            />
            About Techno kreatiCon
            <img
              src="/images/srmvec.webp"
              alt="srmvec logo"
              className="about-srmvec-logo"
            />
          </div>
          <div className="foundation-description" id="about-left">
            Techno Kreaticon Phase 1 was an exciting platform where young
            innovators presented their groundbreaking technological ideas.
            Hosted at PPG Institute of Technology, Coimbatore, the event brought
            together creative minds from various disciplines to pitch their
            projects. Participants showcased solutions that addressed real-world
            problems, which were evaluated by a panel of industry experts. With
            a focus on innovation, feasibility, and market potential, the event
            fostered technological advancement and entrepreneurial thinking. The
            competition maintained transparency, with live updates ensuring fair
            judgment. Techno Kreaticon Phase 1 successfully inspired students to
            push the boundaries of technology and prepare for
            future innovations.
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.srmvalliammai.ac.in")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/srm.webp"
              alt="srmvec logo"
            />
            About PPG-IT
          </div>
          <div className="about-srmvec-description" id="about-right">
            PPG Institute of Technology (PPGIT), established in 2008 under the
            P. Perichi Gounder Memorial Education and Charitable Trust (PPG
            Trust), is one of the leading autonomous engineering colleges in
            Coimbatore, Tamil Nadu. Founded by Dr. L.P. Thangavelu, M.S., the
            institution is dedicated to imparting value-based education.
            Approved by AICTE, PPGIT provides a holistic learning environment
            enriched with ethics and Indian cultural values. With
            state-of-the-art infrastructure and excellent facilities, it
            continues to shape future professionals through innovation and
            academic excellence.
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.csi-kancheepuram.org/")}
          >
            <img
              className="about-csi-logo"
              src="/images/diamond.webp"
              alt="csi logo"
            />
            About CSE
          </div>
          <div className="about-csi-description" id="about-left">
            The Department of Computer Science and Engineering (CSE) at PPG
            Institute of Technology is dedicated to providing high-quality
            education, fostering research, and nurturing innovation in computing
            technologies. With a cutting-edge curriculum, modern laboratories,
            and experienced faculty, the department equips students with the
            skills required for the evolving IT industry. The program emphasizes
            software development, artificial intelligence, cybersecurity, and
            data science, ensuring holistic technical expertise. Through
            industry collaborations, hands-on projects, and research
            opportunities, the CSE department prepares students to excel in
            global technological advancements.
          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://www.whitehatians.tech")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/diamond.webp"
              alt="whitehatians logo"
            />
            About CyberZen
          </div>
          <div className="about-whitehatians-description" id="about-right">
            The CyberZen Club at PPG Institute of Technology is a dynamic
            student-driven community dedicated to fostering innovation,
            technical expertise, and cybersecurity awareness. The club actively
            organizes Techno Kreaticon, a premier event that provides a platform
            for students to showcase their technological innovations and
            entrepreneurial ideas. With a strong focus on coding, ethical
            hacking, AI, and emerging technologies, CyberZen conducts workshops,
            hackathons, and competitions to enhance technical skills. By
            bridging academia and industry, the club empowers students to excel
            in the evolving digital landscape.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
