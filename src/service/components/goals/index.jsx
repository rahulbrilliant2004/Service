import React, { Component } from 'react';
import yourGoalLogo from "../../assets/direction-image.png";
import './index.css';

class Goals extends Component {
  render() {
    return (
      <div className="SectionOne">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img-center">
              <img src={yourGoalLogo} className="sectionOne-img" alt="sectionOne-left-img" />
              <button type="button" className="btn btn-default section-button">Partner werden</button>
              <p className="img-text">Euer Ziel</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img-center">
              <canvas id="canvasOne" className="sectionOne-img" width="500" height="400" ></canvas>
              <button type="button" className="btn btn-default section-button">Unsere Vision</button>
              <p className="img-text">Unser Ziel</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;