import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  const developedBy = () => {
    window.open("https://shadowctrl.me", "_self");
    window.open("https://upwork.com/freelancers/shadowctrl", "_blank");
  };
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          TechnokreatiCon - {"Keep Rocking"}
        </p>
        <p className="copyright">
        {/* onClick={developedBy} */}
           <p>Organized By CyberZen</p>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
