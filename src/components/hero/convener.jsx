import React from "react";
import "./convener.css";
const convener = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Convener</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/hod.png"
              alt="Senthil Kumar - HOD Cyber Security"
            />
            <h1 className="convener-name"> Prof J. Karthick Myilvahanan</h1>

            <h1 className="convener-position">
              Head Of Department - CSE{" "}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default convener;
