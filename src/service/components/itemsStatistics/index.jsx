import React, { Component } from 'react';
import revenueLogo from "../../assets/revenue.png";
import './index.css';

class ItemsStatistics extends Component {
  render() {
    return (
      <div className="SectionTwo">
        <div className="container">
         <div className="section-title-wrap">
            <h2 className="section-title">Medienstatistiken</h2>
            <p className="section-subtitle">PEATS bietet digitale Präsentationsmöglichkeiten für Anbieter moderner HR-Tools.</p>
         </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 sectionTwo-left-content">
              <div className="row1">
                <p className="sub-header-title">150.000+ Klicks</p>
                <p className="sub-header-content">Zeigen das Interesse seit dem ersten Tag</p>
              </div>
              <div className="row2">
                <p className="sub-header-title">436% Zuwachs der Nutzer</p>
                <p className="sub-header-content">In 90 Tagen</p>
              </div>
              <div className="row3">
                <p className="sub-header-title">12.000 Reichweite</p>
                <p className="sub-header-content">In den sozialen Medien und im Newsletter<br />haben wir eine große Reichweite</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img-center">
              <img src={revenueLogo} className="sectionTwo-img " alt="sectionTwo-right-img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemsStatistics;