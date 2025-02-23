import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rrr.webp" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/cod1.png"
              alt="Giridharan - Assistant professor"
            />
            <h1 className="convener-name">Prof A. Jenefa </h1>
            <h1 className="convener-position">
              Assistant Professor - CSE
            </h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/cod2.png"
              alt="Nandhashree - Assistant professor"
            />
            <h1 className="convener-name"> Prof V. Santhamani</h1>
            <h1 className="convener-position">
              Assistant Professor - CSE
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
