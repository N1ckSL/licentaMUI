import React from "react";
import "../anunturi/anunturi.css";

function Anunturi() {
  return (
    <div className="page__wrapper">
      <div className="page__welcome">
        <h1>Bine ati venit la eSchool</h1>
      </div>
      <div className="page__content">
        <div className="left__column">
          <div className="column__content">hey hey</div>
          <div className="column__content">hey hey</div>
        </div>
        <div className="right__column">
          <div className="column__content">hey right</div>
          <div className="column__content">hey right</div>
          <div className="column__content">hey right</div>
        </div>
        <div className="map__wrapper">
          <div className="map__content">
            <div className="map__text">roflan im here</div>
          </div>
        </div>
        <div className="footer">
          <div className="footer__content">footer right here dude</div>
        </div>
      </div>
    </div>
  );
}

export default Anunturi;
